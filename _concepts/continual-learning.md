---
title:    "Continual learning"
date:     2026-08-20
aka:      [lifelong learning, incremental learning]
tags:     [memory, continual-learning]
summary: >
  Learning from a non-stationary stream of experience without retraining from scratch and
  without losing what was already learned.
see_also: [catastrophic-forgetting, general-purpose-ai, credit-assignment]
---

The standard training setup assumes data are drawn i.i.d. from a fixed distribution and
that the model may revisit all of it. Continual learning drops both assumptions: data
arrive as a stream, the distribution shifts, and revisiting earlier data is limited or
impossible.

The difficulty is usually stated as the **stability–plasticity dilemma**. A system stable
enough to retain old competence is too rigid to acquire new competence; one plastic enough
to learn quickly overwrites what it had. Every mitigation for
[catastrophic forgetting](/wiki/catastrophic-forgetting/) is a particular point on that
trade-off, not an escape from it.

## Why it is load bearing for GPAI

A [general-purpose](/wiki/general-purpose-ai/) system that cannot accumulate is a system
whose competence is fixed at the moment of training. In-context learning gives the
appearance of accumulation within a session and none across sessions. Until that gap
closes, "general-purpose" describes breadth only.
