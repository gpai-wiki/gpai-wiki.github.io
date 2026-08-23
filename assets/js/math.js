/* KaTeX bootstrap.
   kramdown (math_engine: mathjax) turns  $$…$$  in Markdown into \(…\) inline
   and \[…\] display. The eq.html include emits \[…\] directly. Single $ is left
   alone on purpose, so prices and shell variables in prose stay literal. */
(function () {
  var MACROS = {
    "\\R": "\\mathbb{R}", "\\N": "\\mathbb{N}", "\\Z": "\\mathbb{Z}",
    "\\E": "\\mathbb{E}", "\\Prob": "\\mathbb{P}",
    "\\argmax": "\\operatorname*{arg\\,max}", "\\argmin": "\\operatorname*{arg\\,min}",
    "\\KL": "\\mathrm{KL}", "\\given": "\\,\\vert\\,", "\\defeq": "\\vcentcolon="
  };

  function run() {
    if (typeof renderMathInElement !== "function") return;
    renderMathInElement(document.body, {
      delimiters: [
        { left: "\\[", right: "\\]", display: true },
        { left: "$$", right: "$$", display: true },
        { left: "\\(", right: "\\)", display: false }
      ],
      ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code", "option"],
      ignoredClasses: ["highlight", "highlighter-rouge", "copybox"],
      throwOnError: false,
      strict: "ignore",
      trust: false,
      macros: MACROS
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else { run(); }
  window.addEventListener("load", run);
})();
