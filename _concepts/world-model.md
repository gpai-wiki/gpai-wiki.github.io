---
title:    "World model"
date:     2026-08-21
aka:      [learned simulator, forward model, dynamics model]
symbol:   "p(s_{t+1} \\given s_t, a_t)"
tags:     [world-models, planning]
summary: >
  A learned predictive model of environment dynamics, used to evaluate candidate actions
  without executing them.
see_also: [general-purpose-ai, credit-assignment]
---

A world model answers: *if the state is $$s_t$$ and I take action $$a_t$$, what happens next?*
Having one converts action selection from trial in the environment into search inside the
model, which is cheaper, safer, and — crucially — reusable across tasks that share dynamics.

## Prediction space matters

Models that predict raw observations spend most of their capacity on detail that is
irrelevant to control. Models that predict in a learned representation space avoid this but
must be prevented from collapsing to a constant. This is the core tension addressed by
[R-001](/roadmaps/a-path-towards-autonomous-machine-intelligence/) and demonstrated in
[P-0003](/papers/world-models/).

## The exploitation problem

Any planner optimising against a learned model will find and exploit its errors. Compounding
error over a rollout of length $$H$$ means the effective planning horizon is bounded by model
accuracy, not by compute. Mitigations — uncertainty penalties, ensembles, short rollouts
with learned value bootstrapping — all trade horizon for reliability rather than removing
the bound.
