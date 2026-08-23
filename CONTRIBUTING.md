# Contributing

The full guide, with the front-matter schema for every section, lives at
**https://gpai-wiki.github.io/contribute/** (source: `contribute/index.md`).

## Short version

1. Fork the repository and create a branch.
2. Add **one** Markdown file to the folder matching your contribution:
   `_papers/`, `_roadmaps/`, `_systems/`, `_concepts/`, `_problems/`, `_profiles/`.
3. Use a kebab-case filename — it becomes the permanent URL.
4. Fill in the front matter. `uid`, `title`, `date`, `tags` and `summary` are
   required everywhere; each section adds a few of its own.
5. Check it builds: `bundle exec jekyll serve`.
6. Open a pull request. One entry per pull request.

## Review criteria

Entries are accepted when they are **accurate** (claims match the source),
**legible** (a competent reader outside the subfield can follow), **specific**
(especially for roadmaps — an argument that cannot be wrong is not useful), and
**attributed** (sources linked, prior work credited, your own work marked as yours).

Archive sections are written in a neutral voice even when describing your own work.
Contributor pages under `_profiles/` are yours and may be as opinionated as you like.

## Licence

By opening a pull request you agree to publish your text under CC BY 4.0 and any
code under MIT, unless the file states otherwise. You keep copyright.
