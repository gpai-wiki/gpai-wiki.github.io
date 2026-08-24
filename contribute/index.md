---
layout: page
section: contribute
kicker: Contribute
title: Adding to the archive
subtitle: >-
  Everything here is a Markdown file in a public Git repository. Fork it, add a file,
  open a pull request. If it is accurate and legible, it gets merged.
toc: true
math: true
---

## The short version

```bash
gh repo fork gpai-wiki/gpai-wiki.github.io --clone
```

Create a branch, add **one file** in the folder that matches what you are contributing, and
open a pull request. One entry per pull request keeps review fast.

| You want to add | Folder | Published at |
|---|---|---|
| A paper worth reading | `_papers/` | `/papers/<slug>/` |
| A roadmap or proposal | `_roadmaps/` | `/roadmaps/<slug>/` |
| Code, a benchmark, a reproduction | `_systems/` | `/systems/<slug>/` |
| A concept or definition | `_concepts/` | `/wiki/<slug>/` |
| An unsolved problem | `_problems/` | `/open-problems/<slug>/` |
| A page about your own work | `_profiles/` | `/pages/<slug>/` |

File names are kebab-case and permanent: `continual-learning-without-replay.md`. The
filename becomes the URL, and URLs here are meant to survive, so pick carefully.

## Running it locally

```bash
bundle install && bundle exec jekyll serve --livereload
```

The site builds with Jekyll 4 through GitHub Actions, so plugins and custom includes work
normally — you are not limited to the GitHub Pages gem set.

## Front matter

Every file starts with a YAML block. Fields marked **required** are checked in review.

### Papers

```yaml
---
uid:      P-0143               # required, next free number
title:    "Continual Learning Without Replay"   # required
date:     2026-08-19           # required, date added to the archive
authors:  [A. Okonkwo, R. Sato, M. Villanueva]  # required
venue:    arXiv                # arXiv | NeurIPS | ICML | journal | …
year:     2026
url_arxiv: https://arxiv.org/abs/0000.00000
url_pdf:  https://arxiv.org/pdf/0000.00000
url_code: https://github.com/example/repo
tags:     [memory, continual-learning]          # required, 1–5
summary:  >                    # required, 1–3 sentences, plain language
  One paragraph on what the result actually is and why it matters for
  general-purpose capability. No marketing, no benchmark tables here.
added_by: your-github-handle
bibtex: |
  @article{okonkwo2026continual,
    title  = {Continual Learning Without Replay},
    author = {Okonkwo, A. and Sato, R. and Villanueva, M.},
    year   = {2026}
  }
---
```

The body is your commentary: what the paper claims, what it demonstrates, where it is
weak, and what it would take to build on it. Write for someone who has not read it.

### Roadmaps and proposals

```yaml
---
uid:      R-010
title:    "The Compute-First Path"
date:     2026-08-19
author:   Your Name
handle:   your-github-handle
version:  "1.0"
status:   proposed     # proposed | draft | active | contested | superseded | archived
horizon:  "2027–2032"
tags:     [scaling, compute]
summary:  >
  A one-paragraph statement of the thesis, specific enough to be wrong.
---
```

Hosting a roadmap is not an endorsement. The bar is that the argument is **falsifiable**:
it says what would have to be true, and what would count as evidence against it.

### Implementations

```yaml
---
uid:      S-004
title:    "Minimal World-Model Agent"
date:     2026-08-19
repo:     https://github.com/example/repo
language: Python
license:  Apache-2.0
hardware: "1× A100, 6 h"
status:   maintained   # maintained | wip | archived | unverified
reproduces: /papers/world-models-as-implicit-planners/
tags:     [world-models, agents]
summary:  >
  What it does, and what a stranger gets if they run it.
install: |
  git clone https://github.com/example/repo && cd repo
  pip install -e .
---
```

### Concepts

```yaml
---
title:    "Catastrophic forgetting"
date:     2026-08-19
aka:      [catastrophic interference]
symbol:   "\\mathcal{L}_{\\text{old}}"      # plain TeX, no delimiters
coined:   "McCloskey & Cohen, 1989"
tags:     [memory, continual-learning]
summary:  >
  A one-sentence definition. This is what shows up in the index, so make it stand alone.
see_also: [continual-learning, replay-buffer]
---
```

Concept pages stay short, neutral, and heavily linked. Link to other concepts with
absolute site paths — `[catastrophic forgetting](/wiki/catastrophic-forgetting/)` — because
that is what the automatic **referenced by** list at the bottom of each concept page reads.

### Open problems

```yaml
---
uid:        OP-018
title:      "Stable credit assignment over month-long horizons"
date:       2026-08-19
opened:     2026-08-19
status:     open        # open | contested | solved | archived
difficulty: "open-ended"
proposed_by: your-github-handle
tags:       [credit-assignment, agents]
statement: >
  The problem in one or two sentences, stated so that a solution would be recognisable.
summary:    Short version for the index.
---
```

### Contributor pages

```yaml
---
title:    "Your Name"
handle:   your-github-handle
subtitle: "What you work on, in one line"
updated:  2026-08-19
links:
  - { label: Site,   url: https://example.com }
  - { label: Scholar, url: https://scholar.google.com/citations?user=… }
---
```

Your page is framed as yours: a visible strip marks it as a contributor page and says the
views are your own. Inside it you can write what you like, within the review rules below.

## Writing the body

Bodies are Markdown (kramdown, GitHub-flavoured). A few things beyond plain Markdown:

### Mathematics

Maths uses **`$$...$$` for both inline and display** — that is kramdown's convention, and
it is why a lone `$` in prose (a price, a shell variable) is always safe. Put the delimiters
on their own lines for a display equation, or inline in a sentence for an inline one:

```markdown
The bound is $$O(n^2)$$ per layer.

$$
\mathcal{L}(\theta) = \E_{x \sim \mathcal{D}}\!\left[ \KL\big(p_\theta(\cdot \given x) \,\|\, q(\cdot \given x)\big) \right]
$$
```

which renders as: the bound is $$O(n^2)$$ per layer, and

$$
\mathcal{L}(\theta) = \E_{x \sim \mathcal{D}}\!\left[ \KL\big(p_\theta(\cdot \given x) \,\|\, q(\cdot \given x)\big) \right]
$$

Rendering is KaTeX, so most of LaTeX's maths mode works — `align`, `cases`, `matrix`,
`\text`, and multi-line environments with `\\` line breaks. KaTeX is **vendored into the
repository** under `assets/vendor/katex/`, not loaded from a CDN, so equations render
offline, behind a blocked CDN, and years from now. Nothing on a page needs the network to
become readable.

A few macros are predefined: `\R \N \Z \E \Prob \argmax \argmin \KL \given \defeq`
(`\Prob` rather than `\P`, which KaTeX already uses for the pilcrow).
For a numbered equation, use the include:

{% raw %}
```liquid
{% include eq.html n="3" tex="H(X) = -\sum_i p_i \log p_i" %}
```
{% endraw %}

### Figures, video and audio

Put media under `assets/img/` or `assets/media/` and use the includes — they carry the
captioning, framing and lazy-loading:

{% raw %}
```liquid
{% include figure.html src="/assets/img/curve.svg" alt="Loss curve" n="1"
   caption="Training loss under the replay-free schedule." wide=true %}

{% include video.html youtube="VIDEO_ID" caption="Rollout of the learned policy." %}
{% include video.html src="/assets/media/rollout.mp4" poster="/assets/img/rollout.jpg" %}
{% include audio.html src="/assets/media/sample.wav" title="Sample 3" caption="Generated audio." %}
```
{% endraw %}

Keep individual files under 5 MB and prefer SVG for plots. For anything larger, link out
rather than committing it.

### Callouts

{% raw %}
```liquid
{% capture c %}Body text, in **Markdown**.{% endcapture %}
{% include note.html label="Caveat" kind="warn" content=c %}
```
{% endraw %}

`kind` is one of `warn`, `quiet`, or omitted.

### Code

Fenced blocks with a language tag are highlighted. Keep snippets short enough to read on a
phone — link to the repository for anything longer.

```python
def credit(trajectory, horizon: int) -> float:
    """Discounted return over a bounded horizon."""
    return sum(r * 0.99 ** t for t, r in enumerate(trajectory[:horizon]))
```

## How pull requests are reviewed

Entries are accepted on four criteria:

1. **Accurate.** Claims match the source. If you are uncertain, say so in the text.
2. **Legible.** A competent reader outside your subfield can follow it.
3. **Specific.** Especially for roadmaps: an argument that cannot be wrong is not useful.
4. **Attributed.** Sources linked, prior work credited, your own work marked as your own.

Rejections are not judgements of the work — most are "not yet legible enough" or
"belongs on your own contributor page rather than in the archive." Either way you will get
a reason in the pull request.

{% capture c %}
Self-promotion is fine and expected on `/pages/`. In `/papers/`, `/roadmaps/`,
`/systems/`, `/wiki/` and `/open-problems/`, entries are written in a neutral voice
even when you are describing your own work.
{% endcapture %}
{% include note.html label="One rule worth stating twice" kind="quiet" content=c %}

## Licensing

By opening a pull request you agree to publish your text under **CC BY 4.0** and any code
under **MIT**, unless your file states otherwise in a `license:` field. You keep copyright.
