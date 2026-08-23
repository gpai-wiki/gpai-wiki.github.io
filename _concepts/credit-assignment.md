---
title:    "Credit assignment"
date:     2026-08-21
aka:      [temporal credit assignment, structural credit assignment]
tags:     [credit-assignment, agents, learning]
summary: >
  Determining which of an agent's earlier decisions were responsible for a later outcome.
see_also: [continual-learning, world-model]
---

Two distinguishable problems share the name:

**Structural** credit assignment asks which components of a system deserve credit for an
outcome. Backpropagation is a complete answer to this within a differentiable model.

**Temporal** credit assignment asks which of the actions taken at times
$$t_1 < t_2 < \dots < t_n$$ produced a reward observed at time $$T$$. This has no comparably
complete answer. Discounted returns bound the problem by making distant consequences
cheap to ignore:

{% include eq.html n="1" tex="G_t = \sum_{k=0}^{\infty} \gamma^{k} r_{t+k+1}, \qquad 0 < \gamma < 1" %}

which is a mathematical convenience with a substantive cost — it makes long-horizon
consequences invisible by construction. An agent whose decisions pay off in weeks cannot be
trained by an objective that discounts them to zero in hours. See
[OP-001](/open-problems/stable-long-horizon-credit-assignment/).
