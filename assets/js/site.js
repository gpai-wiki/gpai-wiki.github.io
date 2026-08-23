/* GPAI Wiki — small, dependency-free page behaviour. */
(function () {
  "use strict";

  /* ── colour scheme ─────────────────────────────────────────────────────── */
  var root = document.documentElement;
  var btn = document.getElementById("theme");
  if (btn) {
    btn.addEventListener("click", function () {
      var mqDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      var current = root.getAttribute("data-theme") || (mqDark ? "dark" : "light");
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("gpai-theme", next); } catch (e) {}
    });
  }

  /* ── wrap wide tables so the page body never scrolls sideways ──────────── */
  document.querySelectorAll(".prose table").forEach(function (t) {
    if (t.parentElement && t.parentElement.classList.contains("tablewrap")) return;
    var w = document.createElement("div");
    w.className = "tablewrap";
    w.setAttribute("tabindex", "0");
    t.parentNode.insertBefore(w, t);
    w.appendChild(t);
  });

  /* ── heading anchors ───────────────────────────────────────────────────── */
  document.querySelectorAll(".prose h2[id], .prose h3[id], .prose h4[id]").forEach(function (h) {
    var a = document.createElement("a");
    a.className = "anchor";
    a.href = "#" + h.id;
    a.setAttribute("aria-label", "Link to this section");
    a.textContent = "#";
    h.insertBefore(a, h.firstChild);
  });

  /* ── mark external links ───────────────────────────────────────────────── */
  var host = location.hostname;
  document.querySelectorAll(".prose a[href^='http'], .meta__v a[href^='http']").forEach(function (a) {
    if (a.hostname && a.hostname !== host) {
      a.rel = "noopener";
      a.classList.add("ext");
    }
  });

  /* ── copy buttons ──────────────────────────────────────────────────────── */
  document.querySelectorAll("[data-copy]").forEach(function (b) {
    b.addEventListener("click", function () {
      var pre = b.parentElement.querySelector("pre");
      if (!pre) return;
      navigator.clipboard.writeText(pre.innerText).then(function () {
        var old = b.textContent;
        b.textContent = "copied";
        setTimeout(function () { b.textContent = old; }, 1400);
      });
    });
  });

  /* ── table of contents: build + scroll-spy ─────────────────────────────── */
  var railToc = document.getElementById("toc");
  if (railToc) {
    var heads = document.querySelectorAll(".prose h2[id], .prose h3[id]");
    if (heads.length < 2) {
      var blk = railToc.closest(".rail__blk");
      if (blk) blk.hidden = true;
    } else {
      var ul = document.createElement("ul");
      ul.className = "toc__l";
      heads.forEach(function (h) {
        var li = document.createElement("li");
        li.setAttribute("data-lv", h.tagName === "H2" ? "2" : "3");
        var a = document.createElement("a");
        a.href = "#" + h.id;
        a.textContent = (h.textContent || "").replace(/^#/, "").trim();
        li.appendChild(a);
        ul.appendChild(li);
      });
      railToc.appendChild(ul);

      var links = {};
      ul.querySelectorAll("a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
      var seen = [];
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          var id = e.target.id;
          if (e.isIntersecting) { if (seen.indexOf(id) === -1) seen.push(id); }
          else { var i = seen.indexOf(id); if (i > -1) seen.splice(i, 1); }
        });
        var active = seen[0];
        if (!active) return;
        Object.keys(links).forEach(function (k) { links[k].classList.toggle("on", k === active); });
      }, { rootMargin: "-70px 0px -70% 0px", threshold: 0 });
      heads.forEach(function (h) { obs.observe(h); });
    }
  }

  /* ── index filter + sort ───────────────────────────────────────────────── */
  var idx = document.querySelector("[data-index]");
  if (idx) {
    var q = document.getElementById("q");
    var counter = document.getElementById("n");
    var chips = Array.prototype.slice.call(document.querySelectorAll("[data-tag]"));
    var sorts = Array.prototype.slice.call(document.querySelectorAll("[data-sort]"));
    var items = Array.prototype.slice.call(idx.querySelectorAll("li"));
    var empty = document.getElementById("empty");
    var active = null;

    function apply() {
      var term = (q && q.value || "").trim().toLowerCase();
      var shown = 0;
      items.forEach(function (li) {
        var hay = (li.getAttribute("data-search") || li.textContent).toLowerCase();
        var tags = (li.getAttribute("data-tags") || "").split(" ");
        var ok = (!term || hay.indexOf(term) > -1) && (!active || tags.indexOf(active) > -1);
        li.hidden = !ok;
        if (ok) shown++;
      });
      if (counter) counter.textContent = shown + " / " + items.length;
      if (empty) empty.hidden = shown !== 0;
    }

    if (q) q.addEventListener("input", apply);
    chips.forEach(function (c) {
      c.addEventListener("click", function () {
        var t = c.getAttribute("data-tag");
        active = active === t ? null : t;
        chips.forEach(function (x) {
          x.setAttribute("aria-pressed", x.getAttribute("data-tag") === active ? "true" : "false");
        });
        apply();
      });
    });
    sorts.forEach(function (s) {
      s.addEventListener("click", function () {
        var key = s.getAttribute("data-sort");
        var dir = s.getAttribute("aria-pressed") === "true" ? 1 : -1;
        sorts.forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
        s.setAttribute("aria-pressed", dir === -1 ? "true" : "false");
        items.sort(function (a, b) {
          var av = a.getAttribute("data-" + key) || "";
          var bv = b.getAttribute("data-" + key) || "";
          return av < bv ? dir : av > bv ? -dir : 0;
        });
        items.forEach(function (li) { idx.appendChild(li); });
      });
    });
    apply();
  }
})();
