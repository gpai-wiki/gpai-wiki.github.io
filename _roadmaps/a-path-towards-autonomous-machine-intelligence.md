---
uid:      R-001
title:    "A Path Towards Autonomous Machine Intelligence"
date:     2026-08-20
author:   Yann LeCun
version:  "0.9.2"
status:   active
horizon:  "2022 onward"
source:   https://openreview.net/forum?id=BZ5a1r-kVsf
tags:     [world-models, architecture, self-supervised]
summary: >
  A modular architecture in which a configurator, a learned world model, a cost module and
  an actor are trained largely by self-supervised prediction in representation space rather
  than pixel space. The central proposal is JEPA: predict abstract representations of the
  future, not the future itself.
---

{% capture c %}
This is an archive summary of a proposal published elsewhere. The document itself is linked
in the metadata above; the reading below is the archive's, not the author's.
{% endcapture %}
{% include note.html label="External proposal" kind="quiet" content=c %}

## The thesis

Generative prediction in observation space is the wrong objective, because most of the bits
in a future observation are unpredictable and irrelevant. A **joint embedding predictive
architecture** instead encodes both $$x$$ and $$y$$ and predicts in that latent space:

{% include eq.html n="1" tex="\min_{\theta}\; D\big(s_y(y),\, \mathrm{Pred}_\theta(s_x(x), z)\big) \quad \text{subject to a capacity constraint on } s_y" %}

The capacity constraint is doing the real work: without it the encoder collapses to a
constant and prediction becomes trivial.

## What would make it right

- Hierarchical JEPAs learn representations at multiple timescales, enabling planning that
  is coarse far ahead and fine nearby.
- Energy-based inference at deployment substitutes for the explicit search that model-based
  reinforcement learning performs badly.
- Intrinsic cost modules make objectives inspectable rather than emergent from a scalar
  reward.

## What would make it wrong

If a system trained purely on next-token prediction over a sufficiently broad corpus
develops usable predictive models of physical and social dynamics — with planning behaviour
that holds up under distribution shift — then the architectural separation this proposal
insists on is not necessary, only convenient. That is a live empirical question, not a
settled one, which is why the document is filed here as **active** rather than superseded.

## Open questions this leaves

- No account of how the configurator is trained, which is where task generality would have
  to come from.
- The capacity constraint is specified as a desideratum rather than a mechanism.
- Long-horizon [credit assignment](/wiki/credit-assignment/) is deferred to the hierarchy
  without an argument that hierarchy is sufficient — see
  [OP-001](/open-problems/stable-long-horizon-credit-assignment/).
