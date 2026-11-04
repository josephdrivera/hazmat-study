/**
 * markdown.js — A small Markdown renderer for the chapter and resource
 * pages. It covers the subset the content files use and nothing more:
 *
 *   # / ## / ### headings      - or * bullet lists      1. numbered lists
 *   **bold**   _italic_   `code`   blank-line paragraphs
 *
 * Everything is HTML-escaped first, so content can never inject markup.
 * No DOM; loaded as a classic script in the browser and from the tests.
 */
(function () {
  "use strict";

  function escapeHtml(text) {
    return String(text == null ? "" : text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function inline(text) {
    var html = escapeHtml(text);
    html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
    html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/(^|[\s(])_([^_]+)_(?=[\s.,;:)]|$)/g, "$1<em>$2</em>");
    return html;
  }

  function slugify(text) {
    return String(text).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  }

  function render(markdown, options) {
    var opts = options || {};
    var lines = String(markdown == null ? "" : markdown).replace(/\r\n/g, "\n").split("\n");
    var out = [];
    var paragraph = [];
    var list = null; // { tag: "ul" | "ol", items: [] }
    var headings = [];

    function flushParagraph() {
      if (paragraph.length) {
        out.push("<p>" + inline(paragraph.join(" ")) + "</p>");
        paragraph = [];
      }
    }

    function flushList() {
      if (list) {
        out.push("<" + list.tag + ">" + list.items.map(function (item) {
          return "<li>" + inline(item) + "</li>";
        }).join("") + "</" + list.tag + ">");
        list = null;
      }
    }

    lines.forEach(function (raw) {
      var line = raw.replace(/\s+$/, "");
      if (line.trim() === "") {
        flushParagraph();
        flushList();
        return;
      }
      var heading = /^(#{1,3})\s+(.*)$/.exec(line);
      if (heading) {
        flushParagraph();
        flushList();
        var level = heading[1].length + (opts.shift || 0);
        if (level > 6) level = 6;
        var text = heading[2].trim();
        var id = slugify(text);
        headings.push({ level: level, text: text, id: id });
        out.push("<h" + level + ' id="' + id + '">' + inline(text) + "</h" + level + ">");
        return;
      }
      var bullet = /^\s*[-*]\s+(.*)$/.exec(line);
      if (bullet) {
        flushParagraph();
        if (!list || list.tag !== "ul") { flushList(); list = { tag: "ul", items: [] }; }
        list.items.push(bullet[1]);
        return;
      }
      var numbered = /^\s*\d+[.)]\s+(.*)$/.exec(line);
      if (numbered) {
        flushParagraph();
        if (!list || list.tag !== "ol") { flushList(); list = { tag: "ol", items: [] }; }
        list.items.push(numbered[1]);
        return;
      }
      if (list && /^\s{2,}\S/.test(line)) {
        // continuation of the previous list item
        list.items[list.items.length - 1] += " " + line.trim();
        return;
      }
      flushList();
      paragraph.push(line.trim());
    });
    flushParagraph();
    flushList();

    return { html: out.join("\n"), headings: headings };
  }

  function plainText(markdown) {
    return String(markdown == null ? "" : markdown)
      .replace(/^#{1,6}\s+/gm, "")
      .replace(/[*_`]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  globalThis.StudyMarkdown = {
    render: render,
    inline: inline,
    escapeHtml: escapeHtml,
    plainText: plainText,
    slugify: slugify
  };
})();
