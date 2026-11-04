import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createContext, runInContext } from "node:vm";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function loadScripts(files) {
  const context = { console };
  context.globalThis = context;
  const ctx = createContext(context);
  files.forEach((file) => {
    runInContext(readFileSync(join(root, file), "utf8"), ctx, { filename: file });
  });
  return context;
}

const { buildContent } = await import(join(root, "scripts", "build-content.mjs"));
const built = buildContent();

test("js/content.js is up to date with content/", () => {
  assert.ok(existsSync(join(root, "js", "content.js")), "run: node scripts/build-content.mjs");
  execFileSync(process.execPath, [join(root, "scripts", "build-content.mjs"), "--check"], { cwd: root });
});

test("every chapter has a number, a title, a known status, and a program folder", () => {
  const statuses = new Set(["notes", "starter", "needs-materials"]);
  assert.ok(built.chapters.length >= 36, "expected the 36 chapters from the brief");
  built.chapters.forEach((chapter) => {
    assert.equal(typeof chapter.number, "number", `${chapter.id} number`);
    assert.ok(chapter.title && chapter.title.trim(), `${chapter.id} title`);
    assert.ok(statuses.has(chapter.status), `${chapter.id} status ${chapter.status}`);
    assert.ok(["firefighter-1", "firefighter-2", "hazmat"].includes(chapter.program), `${chapter.id} program`);
    assert.ok(Array.isArray(chapter.topics), `${chapter.id} topics`);
    assert.ok(Array.isArray(chapter.sources), `${chapter.id} sources`);
  });
});

test("chapter numbers are unique within a program and pending chapters never look complete", () => {
  const seen = new Set();
  built.chapters.forEach((chapter) => {
    const key = `${chapter.program}:${chapter.number}`;
    assert.ok(!seen.has(key), `duplicate ${key}`);
    seen.add(key);
    if (chapter.title === "Pending") {
      assert.equal(chapter.status, "needs-materials", `${chapter.id} pending chapters are needs-materials`);
      assert.equal(chapter.topics.length, 0, `${chapter.id} pending chapters have no topics`);
    }
  });
});

test("the brief's chapters 1 and 5 carry full study notes and HazMat chapters 29-36 exist", () => {
  const byKey = {};
  built.chapters.forEach((c) => { byKey[`${c.program}:${c.number}`] = c; });
  assert.equal(byKey["firefighter-1:1"].status, "notes");
  assert.equal(byKey["firefighter-1:5"].status, "notes");
  for (let n = 29; n <= 36; n++) {
    assert.ok(byKey[`hazmat:${n}`], `hazmat chapter ${n}`);
    assert.ok(byKey[`hazmat:${n}`].body.includes("## Quick notes"), `hazmat chapter ${n} quick notes`);
  }
  assert.equal(byKey["firefighter-2:28"].program, "firefighter-2");
});

test("glossary terms are well formed and link only to chapters and resources that exist", () => {
  const chapterIds = new Set(built.chapters.map((c) => c.id));
  const resourceIds = new Set(built.resources.map((r) => r.id));
  assert.ok(built.glossary.length >= 14, "at least the Part 7 example entries");
  const terms = new Set();
  built.glossary.forEach((entry) => {
    assert.ok(entry.term && entry.term.trim(), "term text");
    const key = entry.term.toLowerCase();
    assert.ok(!terms.has(key), `duplicate term ${entry.term}`);
    terms.add(key);
    const defs = entry.definitions || [entry.definition];
    assert.ok(defs.length && defs.every((d) => d && d.trim()), `${entry.term} definition`);
    (entry.chapters || []).forEach((id) => assert.ok(chapterIds.has(id), `${entry.term} -> ${id}`));
    (entry.resources || []).forEach((id) => assert.ok(resourceIds.has(id), `${entry.term} -> ${id}`));
  });
});

test("external links are https, carry a checked date, and name a program", () => {
  assert.ok(built.links.length >= 5);
  built.links.forEach((link) => {
    assert.match(link.url, /^https:\/\//, link.id);
    assert.match(link.verified, /^\d{4}-\d{2}-\d{2}$/, link.id);
    assert.ok(Array.isArray(link.programs) && link.programs.length, link.id);
    assert.ok(["download", "view", "app"].includes(link.kind), link.id);
  });
});

test("the markdown renderer escapes HTML and renders the subset the content uses", () => {
  const { StudyMarkdown } = loadScripts(["js/markdown.js"]);
  const out = StudyMarkdown.render("## Quick notes\n\n- **Term** — definition <b>x</b>\n- second\n\n1. one\n2. two\n\nPara `code`.");
  assert.ok(out.html.includes('<h2 id="quick-notes">Quick notes</h2>'));
  assert.ok(out.html.includes("<ul><li><strong>Term</strong> — definition &lt;b&gt;x&lt;/b&gt;</li><li>second</li></ul>"));
  assert.ok(out.html.includes("<ol><li>one</li><li>two</li></ol>"));
  assert.ok(out.html.includes("<p>Para <code>code</code>.</p>"));
  assert.deepEqual(JSON.parse(JSON.stringify(out.headings)), [{ level: 2, text: "Quick notes", id: "quick-notes" }]);
});

test("every chapter body renders without leaking raw markdown markers", () => {
  const { StudyMarkdown } = loadScripts(["js/markdown.js"]);
  built.chapters.concat(built.resources).forEach((page) => {
    const html = StudyMarkdown.render(page.body).html;
    assert.ok(!/^#{1,3}\s/m.test(html), `${page.id} heading marker leaked`);
    assert.ok(!html.includes("**"), `${page.id} bold marker leaked`);
  });
});

test("programs registry lists hazmat first with the fields the shell reads", () => {
  const { StudyPrograms } = loadScripts(["js/programs.js"]);
  assert.equal(StudyPrograms.list[0].id, "hazmat");
  StudyPrograms.list.forEach((p) => {
    ["short", "label", "eyebrow", "lede", "accent", "chapterRange"].forEach((key) => {
      assert.ok(p[key], `${p.id}.${key}`);
    });
    assert.equal(typeof p.tests, "boolean");
  });
  assert.equal(StudyPrograms.get("nope").id, "hazmat");
});
