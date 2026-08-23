# gpai-wiki.github.io

An archive of the work toward general-purpose artificial intelligence: papers,
roadmaps, implementations, concepts and open problems — edited in the open,
stored as plain Markdown, published at **https://gpai-wiki.github.io**.

## Sections

| URL | Source | What it holds |
|---|---|---|
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
(`.github/workflows/pages.yml`). This is deliberate: the built-in GitHub Pages
build is pinned to Jekyll 3.9 and disallows custom plugins, which would rule out
the collection layouts and includes this site uses.

One-time setup on a fresh repository: **Settings → Pages → Build and deployment →
Source: GitHub Actions**.

## Contributing

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
