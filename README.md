# gpai-wiki.github.io

An archive of the work toward general-purpose artificial intelligence: papers,
roadmaps, implementations, concepts and open problems — edited in the open,
stored as plain Markdown, published at **https://gpai-wiki.github.io**.

## Sections

| URL | Source | What it holds |
|---|---|---|
| `/news/` | `_news/` | Results, releases, policy and industry moves — primary source required |
| `/papers/` | `_papers/` | Curated, annotated research entries |
| `/roadmaps/` | `_roadmaps/` | Signed, falsifiable proposals for how to get there |
| `/systems/` | `_systems/` | Code, benchmarks, reproductions |
| `/wiki/` | `_concepts/` | Short, neutral, heavily cross-linked definitions |
| `/open-problems/` | `_problems/` | Numbered, stable statements of what is unsolved |
| `/pages/` | `_profiles/` | Contributor pages, in the contributor's own voice |
| `/log/` | `_posts/` | Change log |

## Running it locally

```bash
bundle install
bundle exec jekyll serve --livereload
```

Then open http://localhost:4000. Editing `_config.yml` requires a restart;
everything else live-reloads.

## Deployment

GitHub Actions builds the site with **Jekyll 4** and publishes it to GitHub Pages
(`.github/workflows/pages.yml`).

**Set Settings -> Pages -> Build and deployment -> Source: GitHub Actions.** While the
source is left on the default branch-based setting, GitHub *also* runs its built-in
`pages-build-deployment` on every push, and the two deployments race — whichever finishes
last is what visitors get. Setting the source to GitHub Actions stops the built-in builder
from running at all.

The stylesheet is deliberately written to compile under either builder: `@import` rather
than `@use`, and ASCII-only sources, so Ruby Sass 3.7 (used by the legacy Jekyll 3.9 build)
produces the same 330 rules as dart-sass. That is a safety net, not the intended path --
dart-sass warns that `@import` is deprecated, and the legacy builder cannot run custom
plugins if this site ever needs one.

## Contributing

`_news/TEMPLATE.md` is a copyable starting point for news items.
See [`/contribute/`](https://gpai-wiki.github.io/contribute/) for the full front-matter
schema of every section, the available includes (figures, video, audio, callouts,
numbered equations) and the review criteria. Short version: fork, add one Markdown
file to the folder that matches what you are adding, open a pull request.

## Structure

```
_config.yml            site config, collections, front-matter defaults
_data/nav.yml          section navigation
_layouts/              one layout per collection, all extending default.html
_includes/             dhead, meta, rail, pager, row, figure, video, audio, note, eq
_sass/                 tokens · base · layout · index · prose · doc · code · math
assets/js/site.js      theme toggle, TOC, index filter/sort, copy buttons
assets/js/math.js      KaTeX bootstrap
```

The design system is documented at the top of `_sass/_tokens.scss`. It has three
rules worth knowing before editing: **hairlines, never shadows; zero border-radius;
one accent colour.**

## Licence

Text is CC BY 4.0, code is MIT, unless an individual file says otherwise.
Contributors keep copyright in their own work.
