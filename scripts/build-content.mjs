#!/usr/bin/env node
/**
 * build-content.mjs — Bundles the Markdown study content under content/
 * into js/content.js so the site keeps working with no server and no
 * runtime fetch (the page can still be opened straight from index.html).
 *
 *   node scripts/build-content.mjs          # write js/content.js
 *   node scripts/build-content.mjs --check  # exit 1 if js/content.js is stale
 *
 * Input layout (all optional, missing folders are skipped):
 *   content/<program>/chapter-NN.md   chapter pages with a front-matter block
 *   content/resources/*.md            reference pages with a front-matter block
 *   content/resources/links.json      verified external links
 *   content/glossary/terms.json       glossary entries
 *
 * Front matter is a small YAML subset:
 *   key: value
 *   key: [a, b, c]
 *   key:
 *     - item
 *     - item
 * Numbers are parsed; quoted strings lose their quotes; everything else
 * stays a string. The body after the closing --- is kept as Markdown and
 * rendered in the browser by js/markdown.js.
 */
import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from "node:fs";
import { join, dirname, basename, extname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const contentDir = join(root, "content");
const outFile = join(root, "js", "content.js");

function parseScalar(raw) {
  const text = raw.trim();
  if (text === "") return "";
  if (/^-?\d+(\.\d+)?$/.test(text)) return Number(text);
  if (text === "true") return true;
  if (text === "false") return false;
  if ((text.startsWith('"') && text.endsWith('"')) || (text.startsWith("'") && text.endsWith("'"))) {
    return text.slice(1, -1);
  }
  if (text.startsWith("[") && text.endsWith("]")) {
    const inner = text.slice(1, -1).trim();
    if (!inner) return [];
    return inner.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/).map((part) => parseScalar(part));
  }
  return text;
}

export function parseFrontMatter(source, file) {
  const normalized = source.replace(/\r\n/g, "\n");
  if (!normalized.startsWith("---\n")) {
    return { meta: {}, body: normalized };
  }
  const end = normalized.indexOf("\n---", 4);
  if (end === -1) throw new Error(`${file}: front matter never closes`);
  const block = normalized.slice(4, end);
  const body = normalized.slice(end + 4).replace(/^\n/, "");
  const meta = {};
  let listKey = null;
  block.split("\n").forEach((line) => {
    if (!line.trim()) return;
    const item = /^\s+-\s+(.*)$/.exec(line);
    if (item && listKey) {
      meta[listKey].push(parseScalar(item[1]));
      return;
    }
    const pair = /^([A-Za-z][A-Za-z0-9_-]*):\s*(.*)$/.exec(line);
    if (!pair) throw new Error(`${file}: cannot read front matter line "${line}"`);
    const key = pair[1];
    const value = pair[2];
    if (value === "") {
      meta[key] = [];
      listKey = key;
      return;
    }
    listKey = null;
    meta[key] = parseScalar(value);
  });
  return { meta, body };
}

function listMarkdown(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((name) => extname(name) === ".md")
    .sort()
    .map((name) => join(dir, name));
}

function readJson(file, fallback) {
  if (!existsSync(file)) return fallback;
  return JSON.parse(readFileSync(file, "utf8"));
}

export function buildContent() {
  const programs = existsSync(contentDir)
    ? readdirSync(contentDir).filter((name) => {
        const full = join(contentDir, name);
        return statSync(full).isDirectory() && name !== "resources" && name !== "glossary" && name !== "drafts";
      })
    : [];

  const chapters = [];
  programs.sort().forEach((program) => {
    listMarkdown(join(contentDir, program)).forEach((file) => {
      const { meta, body } = parseFrontMatter(readFileSync(file, "utf8"), file);
      const slug = basename(file, ".md");
      const record = Object.assign(
        {
          id: `${program}-${slug}`,
          program,
          slug,
          status: "starter",
          topics: [],
          sources: [],
          terms: [],
          verify: []
        },
        meta,
        { body }
      );
      if (record.number == null) {
        const m = /chapter-(\d+)/.exec(slug);
        if (m) record.number = Number(m[1]);
      }
      chapters.push(record);
    });
  });

  const resources = listMarkdown(join(contentDir, "resources")).map((file) => {
    const { meta, body } = parseFrontMatter(readFileSync(file, "utf8"), file);
    const slug = basename(file, ".md");
    return Object.assign({ id: slug, slug, program: "hazmat", status: "starter", sources: [] }, meta, { body });
  });

  const links = readJson(join(contentDir, "resources", "links.json"), []);
  const glossary = readJson(join(contentDir, "glossary", "terms.json"), []);

  const seen = new Set();
  chapters.forEach((chapter) => {
    if (seen.has(chapter.id)) throw new Error(`duplicate chapter id ${chapter.id}`);
    seen.add(chapter.id);
    const allowed = ["notes", "starter", "needs-materials"];
    if (!allowed.includes(chapter.status)) {
      throw new Error(`${chapter.id}: status must be one of ${allowed.join(", ")}`);
    }
  });

  return { chapters, resources, links, glossary };
}

function serialize(data) {
  const json = JSON.stringify(data, null, 1);
  return [
    "/* Generated by scripts/build-content.mjs from content/ — do not edit by hand. */",
    "(function () {",
    '  "use strict";',
    `  var content = ${json};`,
    "  globalThis.StudyContent = content;",
    "})();",
    ""
  ].join("\n");
}

const invokedDirectly = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (invokedDirectly) {
  const data = buildContent();
  const output = serialize(data);
  if (process.argv.includes("--check")) {
    const current = existsSync(outFile) ? readFileSync(outFile, "utf8") : "";
    if (current !== output) {
      console.error("js/content.js is out of date. Run: node scripts/build-content.mjs");
      process.exit(1);
    }
    console.log("js/content.js is up to date.");
  } else {
    writeFileSync(outFile, output);
    console.log(
      `Wrote js/content.js: ${data.chapters.length} chapters, ${data.resources.length} resource pages, ` +
      `${data.links.length} links, ${data.glossary.length} glossary terms.`
    );
  }
}
