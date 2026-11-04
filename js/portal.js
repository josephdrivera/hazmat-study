/* ═══════════════════════════════════════════════════════
   portal.js — Academy Study shell
   ═══════════════════════════════════════════════════════
   Owns everything that is not the HazMat question engine:
     1. Theme (light / dark)
     2. Program switcher and the home dashboard
     3. Chapter library and chapter pages
     4. Glossary
     5. Resources (verified links and reference pages)
     6. Search
     7. Portal progress (chapters read, recent, test history)

   app.js keeps the HazMat study / practice-test logic and talks to this
   file through globalThis.AcademyPortal (showView, recordTest, ...).
   ═══════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var STORE_KEY = "academy-study-v2";
  var THEME_KEY = "academy-study-theme";
  var RECENT_LIMIT = 6;
  var HISTORY_LIMIT = 50;

  var programs = globalThis.StudyPrograms;
  var md = globalThis.StudyMarkdown;
  var content = globalThis.StudyContent || { chapters: [], resources: [], links: [], glossary: [] };
  var esc = md.escapeHtml;

  function $(id) { return document.getElementById(id); }

  /* ─── 7. PORTAL PROGRESS ────────────────────────── */

  function emptyStore() {
    return { program: programs.defaultId, chapters: {}, recent: [], history: [] };
  }

  function loadStore() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (!raw) return emptyStore();
      var data = JSON.parse(raw) || {};
      return {
        program: programs.byId[data.program] && !programs.byId[data.program].hidden ? data.program : programs.defaultId,
        chapters: data.chapters || {},
        recent: Array.isArray(data.recent) ? data.recent : [],
        history: Array.isArray(data.history) ? data.history : []
      };
    } catch (e) {
      return emptyStore();
    }
  }

  function saveStore() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { /* unavailable */ }
  }

  var store = loadStore();

  var ui = {
    chapterId: null,
    resourceId: null,
    chapterFilter: "all",
    chapterQuery: "",
    glossaryQuery: "",
    glossaryCategory: "all",
    chapterReturn: "view-chapters"
  };

  /* ─── 1. THEME ──────────────────────────────────── */

  function systemPrefersDark() {
    return !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
  }

  function currentTheme() {
    var attr = document.documentElement.getAttribute("data-theme");
    if (attr === "dark" || attr === "light") return attr;
    return systemPrefersDark() ? "dark" : "light";
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) { /* unavailable */ }
    updateThemeButton();
  }

  function updateThemeButton() {
    var button = $("theme-toggle");
    if (!button) return;
    var dark = currentTheme() === "dark";
    button.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    button.title = dark ? "Light mode" : "Dark mode";
  }

  /* ─── VIEWS ─────────────────────────────────────── */

  var DEFAULT_TITLE = document.title;

  function showView(id) {
    document.querySelectorAll(".view").forEach(function (el) {
      el.classList.toggle("active", el.id === id);
    });
    if (id !== "view-chapter" && id !== "view-resource") document.title = DEFAULT_TITLE;
    window.scrollTo(0, 0);
  }

  /* ─── DATA HELPERS ──────────────────────────────── */

  function program() { return programs.get(store.program); }

  function chaptersFor(programId) {
    return content.chapters.filter(function (chapter) {
      return chapter.program === programId;
    }).sort(function (a, b) { return (a.number || 0) - (b.number || 0); });
  }

  function chapterById(id) {
    for (var i = 0; i < content.chapters.length; i++) {
      if (content.chapters[i].id === id) return content.chapters[i];
    }
    return null;
  }

  function resourceById(id) {
    for (var i = 0; i < content.resources.length; i++) {
      if (content.resources[i].id === id) return content.resources[i];
    }
    return null;
  }

  function progressFor(id) {
    return store.chapters[id] || {};
  }

  function termsFor(programId) {
    return content.glossary.filter(function (term) {
      var list = term.programs || [];
      return list.length === 0 || list.indexOf(programId) !== -1 || list.indexOf("all") !== -1;
    });
  }

  function linksFor(programId) {
    return content.links.filter(function (link) {
      var list = link.programs || [];
      return list.length === 0 || list.indexOf(programId) !== -1 || list.indexOf("all") !== -1;
    });
  }

  function resourcesFor(programId) {
    return content.resources.filter(function (page) {
      return (page.program || "hazmat") === programId;
    });
  }

  var STATUS_LABEL = {
    "notes": "Study notes",
    "starter": "Starter notes",
    "needs-materials": "Needs materials"
  };

  function statusBadge(status) {
    return '<span class="status-badge status-badge--' + esc(status) + '">' + esc(STATUS_LABEL[status] || status) + "</span>";
  }

  function chapterLabel(chapter) {
    return "Chapter " + chapter.number + (chapter.title && chapter.title !== "Pending" ? " · " + chapter.title : "");
  }

  function pct(n, d) {
    return d > 0 ? Math.round((n / d) * 100) : 0;
  }

  function bandClass(percentage) {
    if (percentage >= 80) return "strong";
    if (percentage >= 70) return "target";
    return "below";
  }

  function formatWhen(iso) {
    if (!iso) return "";
    var d = new Date(iso);
    if (isNaN(d.getTime())) return "";
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[d.getMonth()] + " " + d.getDate();
  }

  function greeting() {
    var hour = new Date().getHours();
    if (hour < 12) return "Good morning.";
    if (hour < 18) return "Good afternoon.";
    return "Good evening.";
  }

  /* ─── 2. PROGRAM SWITCH AND HOME ────────────────── */

  function setProgram(id) {
    if (!programs.byId[id] || programs.byId[id].hidden || id === store.program) {
      showView("view-home");
      return;
    }
    store.program = id;
    saveStore();
    applyProgram();
    showView("view-home");
  }

  function applyProgram() {
    var p = program();
    document.body.setAttribute("data-program", p.id);
    renderSwitch();
    if (globalThis.HazmatStudy && HazmatStudy.refreshProgram) HazmatStudy.refreshProgram();
    renderHome();
  }

  function renderSwitch() {
    var nav = $("program-switch");
    if (!nav) return;
    nav.innerHTML = programs.list.filter(function (p) { return !p.hidden; }).map(function (p) {
      var current = p.id === store.program;
      return '<button type="button" class="program-tab" data-program="' + esc(p.id) + '"' +
        (current ? ' aria-current="true"' : "") + '>' +
        '<span class="program-dot program-dot--' + esc(p.accent) + '" aria-hidden="true"></span>' +
        esc(p.short) + "</button>";
    }).join("");
  }

  function historyFor(programId) {
    return store.history.filter(function (entry) { return entry.program === programId; });
  }

  function statHtml(label, value, sub, cls) {
    return '<div class="stat"><span class="stat-label">' + esc(label) + "</span>" +
      '<span class="stat-value' + (cls ? " stat-value--" + cls : "") + '">' + value + "</span>" +
      (sub ? '<span class="stat-sub">' + esc(sub) + "</span>" : "") + "</div>";
  }

  function renderStats() {
    var p = program();
    var el = $("home-stats");
    if (!el) return;
    var history = historyFor(p.id);
    var chapters = chaptersFor(p.id);
    var withNotes = chapters.filter(function (c) { return c.status !== "needs-materials"; });
    var read = chapters.filter(function (c) { return progressFor(c.id).read; }).length;
    var flagged = chapters.filter(function (c) { return progressFor(c.id).flagged; }).length;
    var html = "";

    if (history.length) {
      var last = history[history.length - 1];
      var avg = Math.round(history.reduce(function (sum, h) { return sum + h.percentage; }, 0) / history.length);
      var passed = history.filter(function (h) { return h.percentage >= 70; }).length;
      html += statHtml("Last test", esc(last.percentage + "%"),
        last.correct + " of " + last.total + (formatWhen(last.at) ? " · " + formatWhen(last.at) : ""), bandClass(last.percentage));
      html += statHtml("Tests taken", esc(String(history.length)),
        "Average " + avg + "% · " + passed + " at or above passing", null);
    } else {
      html += statHtml("Last test", "&mdash;", p.tests ? "No test finished yet" : "Tests not loaded yet", "muted");
      html += statHtml("Tests taken", "0", p.tests ? "Build one from the card below" : "", null);
    }

    if (p.sources && globalThis.HazmatStudy) {
      var studied = globalThis.HazmatStudy.studiedCount(p.id);
      var total = globalThis.HazmatStudy.totalQuestions(p.id);
      html += statHtml("Questions studied", esc(String(studied)) + " <small>/ " + esc(String(total)) + "</small>",
        globalThis.HazmatStudy.sourceSummary(p.id), null);
    } else {
      html += statHtml("Notes available", esc(String(withNotes.length)) + " <small>/ " + esc(String(chapters.length)) + "</small>",
        "chapters with study or starter notes", null);
    }

    html += statHtml("Chapters read", esc(String(read)) + " <small>/ " + esc(String(chapters.length)) + "</small>",
      flagged ? flagged + " saved for review" : "Mark chapters as you finish them", null);

    el.innerHTML = html;
  }

  function cardRow(main, sub, aside, asideCls, attrs) {
    return '<button type="button" class="card-row"' + (attrs || "") + '>' +
      '<span class="card-row-main"><span>' + main + "</span>" + (sub ? "<small>" + sub + "</small>" : "") + "</span>" +
      (aside ? '<span class="card-row-aside' + (asideCls ? " " + asideCls : "") + '">' + aside + "</span>" : "") +
      "</button>";
  }

  function renderHome() {
    var p = program();
    $("home-eyebrow").textContent = p.eyebrow;
    $("home-title").textContent = greeting() + " Pick up where you left off.";
    $("home-lede").textContent = p.lede;
    $("builder-eyebrow").textContent = p.short;

    $("panel-handouts").hidden = !p.handouts;
    $("panel-exam-prep").hidden = !p.sources;

    var builderBtn = $("btn-open-builder");
    var note = $("tests-unavailable");
    builderBtn.disabled = !p.tests;
    note.hidden = p.tests;
    note.textContent = p.testsNote || "";
    $("tests-desc").textContent = p.tests
      ? (p.testsDesc || "Pick sources and book exams. 10 to 150 questions, each used once. Practice shows the answer as you go. Exam hides it until you submit.")
      : "Practice tests for this program are not loaded yet.";

    var recentTests = historyFor(p.id).slice(-2).reverse();
    $("tests-recent").innerHTML = recentTests.length
      ? recentTests.map(function (h) {
        return '<div class="card-row" style="cursor:default"><span class="card-row-main"><span>' + esc(h.label) + "</span>" +
          "<small>" + esc(formatWhen(h.at) || "") + "</small></span>" +
          '<span class="card-row-aside ' + (h.percentage >= 70 ? "card-row-aside--done" : "") + '">' + h.percentage + "%</span></div>";
      }).join("")
      : (p.tests ? '<p class="card-empty">Your last two tests will show here.</p>' : "");

    renderStats();
    renderHomeChapters();
    renderHomeResources();
  }

  function renderHomeChapters() {
    var p = program();
    var chapters = chaptersFor(p.id);
    var withNotes = chapters.filter(function (c) { return c.status !== "needs-materials"; });
    $("chapters-meta").textContent = chapters.length
      ? withNotes.length + " with notes · " + chapters.length + " chapters"
      : "No chapters yet";
    $("chapters-desc").textContent = chapters.length
      ? "Key takeaways from the chapters, written as a study aid. " + p.chapterRange + "."
      : "No chapter notes for this program yet.";

    var recentIds = store.recent.filter(function (id) {
      var c = chapterById(id);
      return c && c.program === p.id;
    }).slice(0, 3);
    var rows = recentIds.map(chapterById);
    if (!rows.length) {
      rows = withNotes.slice(0, 3);
    }
    var list = $("chapters-recent");
    list.innerHTML = rows.length
      ? rows.map(function (c) {
        var prog = progressFor(c.id);
        var aside = prog.reviewed ? "Reviewed" : prog.read ? "Read" : STATUS_LABEL[c.status];
        return cardRow(esc(chapterLabel(c)), esc((c.topics || []).slice(0, 3).join(" · ")),
          esc(aside), prog.read || prog.reviewed ? "card-row-aside--done" : "", ' data-chapter="' + esc(c.id) + '"');
      }).join("")
      : '<p class="card-empty">Chapter notes will appear here when they are added.</p>';
    $("btn-chapters").disabled = chapters.length === 0;
  }

  function linkIcon(kind) {
    if (kind === "app") {
      return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>';
    }
    if (kind === "view") {
      return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>';
    }
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>';
  }

  function renderHomeResources() {
    var p = program();
    var links = linksFor(p.id);
    var terms = termsFor(p.id);
    var pages = resourcesFor(p.id);
    $("resources-meta").textContent = links.length + " links · " + terms.length + " terms";
    $("resources-top").innerHTML = links.slice(0, 3).map(function (link) {
      return '<a class="card-row" href="' + esc(link.url) + '" target="_blank" rel="noopener">' +
        '<span class="card-row-main"><span>' + esc(link.title) + "</span><small>" + esc(link.publisher || "") + "</small></span>" +
        '<span class="card-row-aside card-row-aside--link">' + esc(link.kind === "app" ? "App" : link.kind === "view" ? "View" : "Download") + "</span></a>";
    }).join("") + (pages.length ? cardRow(esc(pages.length + " reference pages"), esc("DOT classes, ERG, NFPA 704, response steps"), "Open", "card-row-aside--link", ' data-open="resources"') : "");
    $("btn-glossary").disabled = terms.length === 0;
  }

  /* ─── 3. CHAPTER LIBRARY ────────────────────────── */

  function chapterMatchesQuery(chapter, query) {
    if (!query) return true;
    var hay = (chapterLabel(chapter) + " " + (chapter.topics || []).join(" ")).toLowerCase();
    return hay.indexOf(query) !== -1;
  }

  function renderChapters() {
    var p = program();
    $("chapters-eyebrow").textContent = p.eyebrow;
    var query = ui.chapterQuery.trim().toLowerCase();
    var chapters = chaptersFor(p.id).filter(function (c) {
      var prog = progressFor(c.id);
      if (ui.chapterFilter === "flagged" && !prog.flagged) return false;
      if (ui.chapterFilter !== "all" && ui.chapterFilter !== "flagged" && c.status !== ui.chapterFilter) return false;
      return chapterMatchesQuery(c, query);
    });
    document.querySelectorAll("#chapters-filters .chip").forEach(function (chip) {
      chip.classList.toggle("is-active", chip.getAttribute("data-status") === ui.chapterFilter);
    });
    var list = $("chapters-list");
    if (!chapters.length) {
      list.innerHTML = '<p class="glossary-empty">No chapters match.</p>';
      return;
    }
    list.innerHTML = chapters.map(function (c) {
      var prog = progressFor(c.id);
      var pending = c.status === "needs-materials" && !(c.body || "").trim().length;
      var badges = [statusBadge(c.status)];
      if (prog.reviewed) badges.push('<span class="status-badge status-badge--reviewed">Reviewed</span>');
      else if (prog.read) badges.push('<span class="status-badge status-badge--read">Read</span>');
      if (prog.flagged) badges.push('<span class="status-badge status-badge--flag">Saved</span>');
      if (c.verify && c.verify.length) badges.push('<span class="status-badge status-badge--verify">Needs verification</span>');
      if (c.midterm) badges.push('<span class="status-badge status-badge--midterm">Midterm ' + esc(String(c.midterm)) + "</span>");
      return '<button type="button" class="chapter-card' + (pending ? " chapter-card--pending" : "") + '" data-chapter="' + esc(c.id) + '">' +
        '<div class="chapter-card-head"><span class="chapter-num">Chapter ' + esc(String(c.number)) + "</span></div>" +
        '<h2 class="chapter-card-title">' + esc(c.title || "Pending") + "</h2>" +
        '<p class="chapter-card-topics">' + esc((c.topics || []).slice(0, 4).join(" · ") || "Chapter title and content not yet confirmed.") + "</p>" +
        '<div class="chapter-card-foot">' + badges.join("") + "</div>" +
        "</button>";
    }).join("");
  }

  function noteRecent(id) {
    store.recent = [id].concat(store.recent.filter(function (x) { return x !== id; })).slice(0, RECENT_LIMIT);
    var prog = store.chapters[id] || {};
    prog.lastOpened = new Date().toISOString();
    store.chapters[id] = prog;
    saveStore();
  }

  function openChapter(id, returnView) {
    var chapter = chapterById(id);
    if (!chapter) return;
    if (chapter.program !== store.program) {
      store.program = chapter.program;
      saveStore();
      applyProgram();
    }
    ui.chapterId = id;
    ui.chapterReturn = returnView || "view-chapters";
    noteRecent(id);
    renderChapter();
    showView("view-chapter");
  }

  function siblingChapter(chapter, direction) {
    var list = chaptersFor(chapter.program);
    var index = list.indexOf(chapter);
    return list[index + direction] || null;
  }

  function renderChapter() {
    var chapter = chapterById(ui.chapterId);
    if (!chapter) return;
    var p = programs.get(chapter.program);
    var prog = progressFor(chapter.id);

    $("chapter-eyebrow").textContent = p.label + " · Chapter " + chapter.number;
    $("chapter-title").textContent = chapter.title === "Pending" ? "Chapter " + chapter.number + " (pending)" : chapter.title;

    var badges = [statusBadge(chapter.status)];
    if (chapter.midterm) badges.push('<span class="status-badge status-badge--midterm">Midterm questions ' + esc(String(chapter.midterm)) + "</span>");
    if (chapter.reviewed) badges.push('<span class="status-badge">Notes reviewed ' + esc(String(chapter.reviewed)) + "</span>");
    $("chapter-badges").innerHTML = badges.join("");

    var verify = $("chapter-verify");
    if (chapter.verify && chapter.verify.length) {
      verify.hidden = false;
      verify.innerHTML = "<strong>Needs verification</strong><ul>" + chapter.verify.map(function (item) {
        return "<li>" + esc(item) + "</li>";
      }).join("") + "</ul>";
    } else {
      verify.hidden = true;
      verify.innerHTML = "";
    }

    var body = $("chapter-body");
    var text = (chapter.body || "").trim();
    if (text) {
      body.classList.remove("prose--empty");
      body.innerHTML = md.render(text).html;
    } else {
      body.classList.add("prose--empty");
      body.textContent = "Chapter title and content have not yet been confirmed from the collected chapter document.";
    }

    var terms = content.glossary.filter(function (term) {
      return (term.chapters || []).indexOf(chapter.id) !== -1;
    });
    var termsSection = $("chapter-terms");
    termsSection.hidden = terms.length === 0;
    $("chapter-term-list").innerHTML = terms.map(termRowHtml).join("");

    $("chapter-related").hidden = true;

    setPressed($("chapter-mark-read"), !!prog.read, "Mark as read", "Read");
    setPressed($("chapter-mark-reviewed"), !!prog.reviewed, "Mark as reviewed", "Reviewed");
    setPressed($("chapter-flag"), !!prog.flagged, "Save for review", "Saved for review");
    $("chapter-flag").classList.add("pill-btn--flag");

    var prev = siblingChapter(chapter, -1);
    var next = siblingChapter(chapter, 1);
    $("chapter-prev").disabled = !prev;
    $("chapter-next").disabled = !next;
    $("chapter-prev").textContent = prev ? "Chapter " + prev.number : "First chapter";
    $("chapter-next").textContent = next ? "Chapter " + next.number : "Last chapter";
    document.title = chapterLabel(chapter) + " — Academy Study";
  }

  function setPressed(button, on, offLabel, onLabel) {
    button.setAttribute("aria-pressed", on ? "true" : "false");
    button.textContent = on ? onLabel : offLabel;
  }

  function toggleChapterFlag(key) {
    var id = ui.chapterId;
    if (!id) return;
    var prog = store.chapters[id] || {};
    if (prog[key]) delete prog[key];
    else prog[key] = new Date().toISOString();
    if (key === "reviewed" && prog.reviewed && !prog.read) prog.read = prog.reviewed;
    store.chapters[id] = prog;
    saveStore();
    renderChapter();
  }

  /* ─── 4. GLOSSARY ───────────────────────────────── */

  function termRowHtml(term) {
    var defs = term.definitions && term.definitions.length ? term.definitions : [term.definition || ""];
    var links = (term.chapters || []).map(function (id) {
      var c = chapterById(id);
      return c ? '<button type="button" data-chapter="' + esc(id) + '">' + esc(chapterLabel(c)) + "</button>" : "";
    }).concat((term.resources || []).map(function (id) {
      var r = resourceById(id);
      return r ? '<button type="button" data-resource="' + esc(id) + '">' + esc(r.title) + "</button>" : "";
    })).join("");
    return '<div class="term-row" id="term-' + esc(md.slugify(term.term)) + '"><dt>' + esc(term.term) +
      (term.category ? '<span class="term-cat">' + esc(term.category) + "</span>" : "") + "</dt>" +
      defs.map(function (d) { return "<dd>" + esc(d) + "</dd>"; }).join("") +
      (links ? '<div class="term-links">' + links + "</div>" : "") + "</div>";
  }

  function renderGlossary() {
    var p = program();
    $("glossary-eyebrow").textContent = p.eyebrow;
    var terms = termsFor(p.id);
    var categories = {};
    terms.forEach(function (t) { if (t.category) categories[t.category] = true; });
    var select = $("glossary-category");
    var current = ui.glossaryCategory;
    select.innerHTML = '<option value="all">All categories</option>' + Object.keys(categories).sort().map(function (c) {
      return '<option value="' + esc(c) + '">' + esc(c) + "</option>";
    }).join("");
    select.value = categories[current] ? current : "all";
    ui.glossaryCategory = select.value;

    var query = ui.glossaryQuery.trim().toLowerCase();
    var shown = terms.filter(function (t) {
      if (ui.glossaryCategory !== "all" && t.category !== ui.glossaryCategory) return false;
      if (!query) return true;
      var defs = (t.definitions || [t.definition || ""]).join(" ");
      return (t.term + " " + defs).toLowerCase().indexOf(query) !== -1;
    }).sort(function (a, b) { return a.term.localeCompare(b.term, undefined, { sensitivity: "base" }); });

    $("glossary-intro").textContent = terms.length
      ? terms.length + " terms from the " + p.label + " chapters and resources. Definitions are quoted from the source notes."
      : "No glossary terms for this program yet.";

    var groups = {};
    shown.forEach(function (t) {
      var letter = t.term.charAt(0).toUpperCase();
      if (!/[A-Z]/.test(letter)) letter = "#";
      (groups[letter] = groups[letter] || []).push(t);
    });
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    $("glossary-alpha").innerHTML = letters.map(function (l) {
      return '<button type="button" data-letter="' + l + '"' + (groups[l] ? "" : " disabled") + ">" + l + "</button>";
    }).join("");

    var list = $("glossary-list");
    var keys = Object.keys(groups).sort();
    list.innerHTML = keys.length
      ? keys.map(function (l) {
        return '<section class="glossary-group" id="glossary-' + l + '"><h2 class="glossary-letter">' + l + "</h2>" +
          groups[l].map(termRowHtml).join("") + "</section>";
      }).join("")
      : '<p class="glossary-empty">No terms match.</p>';
  }

  function openGlossary(query) {
    ui.glossaryQuery = query || "";
    $("glossary-search").value = ui.glossaryQuery;
    renderGlossary();
    showView("view-glossary");
  }

  /* ─── 5. RESOURCES ──────────────────────────────── */

  function linkCardHtml(link) {
    var kindLabel = link.kind === "app" ? "App" : link.kind === "view" ? "View online" : "Free download";
    return '<a class="link-card" href="' + esc(link.url) + '" target="_blank" rel="noopener">' +
      '<span class="card-icon" aria-hidden="true">' + linkIcon(link.kind) + "</span>" +
      '<span class="link-card-main"><span class="link-card-title">' + esc(link.title) + "</span>" +
      '<span class="link-card-desc">' + esc(link.description || "") + "</span>" +
      '<span class="link-card-meta">' + esc(kindLabel) + (link.publisher ? " · " + esc(link.publisher) : "") +
      (link.verified ? " · checked " + esc(link.verified) : "") + (link.note ? " · " + esc(link.note) : "") + "</span></span>" +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"/></svg>' +
      "</a>";
  }

  function renderResources() {
    var p = program();
    $("resources-eyebrow").textContent = p.eyebrow;
    var links = linksFor(p.id);
    $("resources-links").innerHTML = links.length
      ? links.map(linkCardHtml).join("")
      : '<p class="glossary-empty">No links for this program yet.</p>';
    var pages = resourcesFor(p.id);
    $("resources-pages-section").hidden = pages.length === 0;
    $("resources-pages").innerHTML = pages.map(function (r) {
      return '<button type="button" class="chapter-card" data-resource="' + esc(r.id) + '">' +
        '<div class="chapter-card-head"><span class="chapter-num">Reference</span></div>' +
        '<h2 class="chapter-card-title">' + esc(r.title) + "</h2>" +
        '<p class="chapter-card-topics">' + esc(r.summary || "") + "</p>" +
        '<div class="chapter-card-foot">' + statusBadge(r.status || "starter") + "</div></button>";
    }).join("");
  }

  function openResource(id) {
    var r = resourceById(id);
    if (!r) return;
    ui.resourceId = id;
    $("resource-eyebrow").textContent = programs.get(r.program || "hazmat").label + " · Reference";
    $("resource-title").textContent = r.title;
    $("resource-badges").innerHTML = statusBadge(r.status || "starter") +
      (r.reviewed ? '<span class="status-badge">Reviewed ' + esc(String(r.reviewed)) + "</span>" : "");
    $("resource-body").innerHTML = md.render(r.body || "").html +
      (r.sources && r.sources.length ? "<h2>Sources</h2><ul>" + r.sources.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul>" : "");
    showView("view-resource");
  }

  /* ─── 6. SEARCH ─────────────────────────────────── */

  function snippet(text, query) {
    var plain = md.plainText(text);
    var at = plain.toLowerCase().indexOf(query);
    if (at === -1) return esc(plain.slice(0, 140)) + (plain.length > 140 ? "…" : "");
    var start = Math.max(0, at - 60);
    var end = Math.min(plain.length, at + query.length + 80);
    var piece = plain.slice(start, end);
    var re = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "ig");
    return (start > 0 ? "…" : "") + esc(piece).replace(re, function (m) { return "<mark>" + m + "</mark>"; }) + (end < plain.length ? "…" : "");
  }

  function runSearch(raw) {
    var query = String(raw || "").trim().toLowerCase();
    $("search-input").value = raw || "";
    var results = $("search-results");
    if (query.length < 2) {
      $("search-summary").textContent = "Type at least two characters.";
      results.innerHTML = "";
      return;
    }
    var hits = [];
    content.chapters.forEach(function (c) {
      if (programs.get(c.program).hidden) return;
      var title = chapterLabel(c);
      var hay = (title + " " + (c.topics || []).join(" ") + " " + (c.body || "")).toLowerCase();
      if (hay.indexOf(query) !== -1) {
        hits.push({ kind: programs.get(c.program).short + " · Chapter", title: title, snippet: snippet((c.topics || []).join(" · ") + " " + (c.body || ""), query), attr: 'data-chapter="' + esc(c.id) + '"', rank: title.toLowerCase().indexOf(query) !== -1 ? 0 : 1 });
      }
    });
    content.glossary.forEach(function (t) {
      var defs = (t.definitions || [t.definition || ""]).join(" ");
      if ((t.term + " " + defs).toLowerCase().indexOf(query) !== -1) {
        hits.push({ kind: "Glossary", title: t.term, snippet: snippet(defs, query), attr: 'data-term="' + esc(t.term) + '"', rank: t.term.toLowerCase().indexOf(query) !== -1 ? 0 : 2 });
      }
    });
    content.resources.forEach(function (r) {
      if ((r.title + " " + (r.summary || "") + " " + (r.body || "")).toLowerCase().indexOf(query) !== -1) {
        hits.push({ kind: "Reference", title: r.title, snippet: snippet((r.summary || "") + " " + (r.body || ""), query), attr: 'data-resource="' + esc(r.id) + '"', rank: 1 });
      }
    });
    content.links.forEach(function (l) {
      if ((l.title + " " + (l.description || "")).toLowerCase().indexOf(query) !== -1) {
        hits.push({ kind: "Link", title: l.title, snippet: esc(l.description || ""), attr: 'data-href="' + esc(l.url) + '"', rank: 1 });
      }
    });
    hits.sort(function (a, b) { return a.rank - b.rank || a.title.localeCompare(b.title); });
    $("search-summary").textContent = hits.length
      ? hits.length + (hits.length === 1 ? " result" : " results") + " across all programs."
      : "Nothing matched. Try a shorter word.";
    results.innerHTML = hits.map(function (h) {
      return '<button type="button" class="search-hit" ' + h.attr + '><span class="search-hit-kind">' + esc(h.kind) + "</span>" +
        '<span class="search-hit-title">' + esc(h.title) + "</span>" +
        '<span class="search-hit-snippet">' + h.snippet + "</span></button>";
    }).join("");
  }

  function openSearch(query) {
    runSearch(query);
    showView("view-search");
    if (!query) $("search-input").focus();
  }

  /* ─── PUBLIC API (used by app.js) ───────────────── */

  function recordTest(entry) {
    if (!entry || typeof entry.percentage !== "number") return;
    store.history.push({
      at: entry.at || new Date().toISOString(),
      program: entry.program || "hazmat",
      percentage: entry.percentage,
      correct: entry.correct,
      total: entry.total,
      label: entry.label || "",
      mode: entry.mode || "exam"
    });
    if (store.history.length > HISTORY_LIMIT) store.history = store.history.slice(-HISTORY_LIMIT);
    saveStore();
    renderHome();
  }

  function clearProgress() {
    var programId = store.program;
    store = emptyStore();
    store.program = programId;
    try { localStorage.removeItem(STORE_KEY); } catch (e) { /* unavailable */ }
    renderHome();
  }

  globalThis.AcademyPortal = {
    showView: showView,
    recordTest: recordTest,
    clearProgress: clearProgress,
    refreshHome: renderHome,
    programId: function () { return store.program; },
    openChapter: openChapter,
    openGlossary: openGlossary,
    openResources: function () { renderResources(); showView("view-resources"); },
    openSearch: openSearch
  };

  /* ─── EVENTS ────────────────────────────────────── */

  function delegate(root, handler) {
    root.addEventListener("click", function (e) {
      var chapterEl = e.target.closest("[data-chapter]");
      if (chapterEl) { openChapter(chapterEl.getAttribute("data-chapter"), root.closest(".view") ? root.closest(".view").id : "view-home"); return; }
      var resourceEl = e.target.closest("[data-resource]");
      if (resourceEl) { openResource(resourceEl.getAttribute("data-resource")); return; }
      var termEl = e.target.closest("[data-term]");
      if (termEl) { openGlossary(termEl.getAttribute("data-term")); return; }
      var hrefEl = e.target.closest("[data-href]");
      if (hrefEl) { window.open(hrefEl.getAttribute("data-href"), "_blank", "noopener"); return; }
      var openEl = e.target.closest("[data-open]");
      if (openEl && openEl.getAttribute("data-open") === "resources") { AcademyPortal.openResources(); return; }
      if (handler) handler(e);
    });
  }

  function init() {
    updateThemeButton();
    $("theme-toggle").addEventListener("click", function () {
      setTheme(currentTheme() === "dark" ? "light" : "dark");
    });
    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateThemeButton);
    }

    $("program-switch").addEventListener("click", function (e) {
      var tab = e.target.closest("[data-program]");
      if (tab) setProgram(tab.getAttribute("data-program"));
    });
    $("brand-home").addEventListener("click", function () { renderHome(); showView("view-home"); });

    // Home
    $("home-search").addEventListener("submit", function (e) {
      e.preventDefault();
      openSearch($("home-search-input").value);
    });
    $("btn-chapters").addEventListener("click", function () { renderChapters(); showView("view-chapters"); });
    $("btn-resources").addEventListener("click", AcademyPortal.openResources);
    $("btn-glossary").addEventListener("click", function () { openGlossary(""); });
    $("btn-open-builder").addEventListener("click", function () {
      if (globalThis.HazmatStudy) HazmatStudy.openBuilder();
      else showView("view-builder");
    });
    delegate($("chapters-recent"));
    delegate($("resources-top"));

    // Builder
    $("builder-home").addEventListener("click", function () { renderHome(); showView("view-home"); });

    // Chapters
    $("chapters-home").addEventListener("click", function () { renderHome(); showView("view-home"); });
    $("chapters-filters").addEventListener("click", function (e) {
      var chip = e.target.closest("[data-status]");
      if (!chip) return;
      ui.chapterFilter = chip.getAttribute("data-status");
      renderChapters();
    });
    $("chapters-search").addEventListener("input", function () {
      ui.chapterQuery = this.value;
      renderChapters();
    });
    delegate($("chapters-list"));

    // Chapter page
    $("chapter-back").addEventListener("click", function () {
      if (ui.chapterReturn === "view-chapters") renderChapters();
      else if (ui.chapterReturn === "view-home") renderHome();
      showView(ui.chapterReturn === "view-chapter" ? "view-chapters" : ui.chapterReturn);
    });
    $("chapter-prev").addEventListener("click", function () {
      var c = chapterById(ui.chapterId);
      var prev = c && siblingChapter(c, -1);
      if (prev) openChapter(prev.id, ui.chapterReturn);
    });
    $("chapter-next").addEventListener("click", function () {
      var c = chapterById(ui.chapterId);
      var next = c && siblingChapter(c, 1);
      if (next) openChapter(next.id, ui.chapterReturn);
    });
    $("chapter-mark-read").addEventListener("click", function () { toggleChapterFlag("read"); });
    $("chapter-mark-reviewed").addEventListener("click", function () { toggleChapterFlag("reviewed"); });
    $("chapter-flag").addEventListener("click", function () { toggleChapterFlag("flagged"); });
    delegate($("chapter-term-list"));

    // Glossary
    $("glossary-home").addEventListener("click", function () { renderHome(); showView("view-home"); });
    $("glossary-search").addEventListener("input", function () {
      ui.glossaryQuery = this.value;
      renderGlossary();
    });
    $("glossary-category").addEventListener("change", function () {
      ui.glossaryCategory = this.value;
      renderGlossary();
    });
    $("glossary-alpha").addEventListener("click", function (e) {
      var btn = e.target.closest("[data-letter]");
      if (!btn) return;
      var target = $("glossary-" + btn.getAttribute("data-letter"));
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    delegate($("glossary-list"));

    // Resources
    $("resources-home").addEventListener("click", function () { renderHome(); showView("view-home"); });
    delegate($("resources-pages"));
    $("resource-back").addEventListener("click", AcademyPortal.openResources);

    // Search
    $("search-home").addEventListener("click", function () { renderHome(); showView("view-home"); });
    $("search-form").addEventListener("submit", function (e) {
      e.preventDefault();
      runSearch($("search-input").value);
    });
    delegate($("search-results"));

    applyProgram();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
