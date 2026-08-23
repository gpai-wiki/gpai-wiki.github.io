---
title:    "Catastrophic forgetting"
date:     2026-08-20
aka:      [catastrophic interference]
coined:   "McCloskey & Cohen, 1989"
tags:     [memory, continual-learning]
summary: >
  The abrupt loss of previously learned capability when a network is trained on new data,
  caused by the same weights being reused for both.
see_also: [continual-learning, general-purpose-ai]
---

When a network trained on task $$A$$ is subsequently trained on task $$B$$, performance on $$A$$
frequently collapses rather than degrading gradually. The cause is structural: the
representation of $$A$$ lives in the same weights that gradient descent is now free to move in
service of $$B$$, and nothing in the objective for $$B$$ penalises the damage.

Formally, training on $$B$$ minimises $$\mathcal{L}_B(\theta)$$ with no term referencing
$$\mathcal{L}_A$$, so the solution found is an arbitrary point in the $$B$$-optimal set —
including points arbitrarily far from the $$A$$-optimal set.

## Families of mitigation

- **Regularisation** — penalise movement in directions the old task was sensitive to.
  Elastic weight consolidation ([P-0002](/papers/overcoming-catastrophic-forgetting/)) is
  the canonical example.
- **Replay** — interleave stored or generated samples from earlier tasks. Effective, and
  costly in storage or in generation quality.
- **Isolation** — allocate disjoint parameters per task, at the cost of transfer between
  tasks and of unbounded growth.

None of the three is a solution at the timescales a deployed general-purpose agent would
operate over; see [OP-002](/open-problems/continual-learning-without-forgetting/).
