---
uid:      P-0002
title:    "Overcoming Catastrophic Forgetting in Neural Networks"
date:     2026-08-21
authors:  [J. Kirkpatrick, R. Pascanu, N. Rabinowitz, J. Veness, G. Desjardins, A. A. Rusu, et al.]
venue:    PNAS
year:     2017
url_arxiv: https://arxiv.org/abs/1612.00796
tags:     [memory, continual-learning]
summary: >
  Proposes elastic weight consolidation, which slows learning on weights that a Fisher
  information estimate marks as important to previously learned tasks. It is the clearest
  early statement that catastrophic forgetting is a constraint problem, not a capacity
  problem — and the framing survives even where the method does not.
bibtex: |
  @article{kirkpatrick2017overcoming,
    title   = {Overcoming catastrophic forgetting in neural networks},
    author  = {Kirkpatrick, James and Pascanu, Razvan and Rabinowitz, Neil and others},
    journal = {Proceedings of the National Academy of Sciences},
    year    = {2017}
  }
---

## What it does

Elastic weight consolidation (EWC) adds a quadratic penalty that anchors parameters near
their values after an earlier task, weighted by how much each parameter mattered:

{% include eq.html n="1" tex="\mathcal{L}(\theta) = \mathcal{L}_B(\theta) + \sum_i \frac{\lambda}{2} F_i \left(\theta_i - \theta^{*}_{A,i}\right)^2" %}

$$F_i$$ is the diagonal of the Fisher information matrix at $$\theta^{*}_A$$, a cheap proxy for
the curvature of the old task's loss along each parameter direction. Directions the old
task was insensitive to stay free; directions it was sensitive to become stiff.

## Why it matters for general-purpose capability

A system that must keep learning after deployment cannot retrain from scratch on the union
of everything it has seen. EWC reframes [catastrophic forgetting](/wiki/catastrophic-forgetting/)
as a question about which regions of parameter space are shared between tasks — which is
the right question, and connects directly to [OP-002](/open-problems/continual-learning-without-forgetting/).

## Where it is weak

The diagonal Fisher approximation ignores parameter interactions, and the penalty
accumulates: after enough tasks the model is stiff everywhere and plasticity collapses.
Replay-based methods generally outperform it in practice. The contribution that lasted is
the diagnosis, not the cure.

{% capture c %}
Results in this paper are on task sequences that are short by the standards of an agent
running for months. Treat the numbers as evidence about the mechanism, not as a capability
claim.
{% endcapture %}
{% include note.html label="Reading it now" kind="quiet" content=c %}
