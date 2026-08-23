---
title:    "Scaling laws"
date:     2026-08-22
aka:      [neural scaling laws]
tags:     [scaling, generality]
summary: >
  Empirical power-law relationships between model size, dataset size, training compute and
  loss, which hold across many orders of magnitude and permit extrapolation.
see_also: [general-purpose-ai]
---

Test loss falls as a power law in each of parameters $$N$$, data $$D$$ and compute $$C$$, with
the others held non-limiting:

{% include eq.html n="1" tex="L(N) \approx \left(\frac{N_c}{N}\right)^{\alpha_N}, \qquad L(D) \approx \left(\frac{D_c}{D}\right)^{\alpha_D}" %}

The practical consequence is that training runs became **predictable**: the loss of a model
too expensive to train twice can be forecast from a series of small ones. That predictability
is why frontier-scale training is a planned engineering activity rather than a gamble, and it
is the mechanism behind the generality observed in
[P-0004](/papers/language-models-are-few-shot-learners/).

## Limits of the framing

Scaling laws describe loss, not capability. The mapping from loss to downstream competence
is not itself a power law and is not smooth — which is what discussions of emergent ability
are really about. They also say nothing about data exhaustion, and nothing at all about
[continual learning](/wiki/continual-learning/), where the i.i.d. assumption underpinning
them does not hold.
