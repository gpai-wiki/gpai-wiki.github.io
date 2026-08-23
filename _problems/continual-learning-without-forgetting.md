---
uid:        OP-002
title:      "Continual learning at deployment scale"
date:       2026-08-21
opened:     2026-08-21
status:     open
difficulty: "hard"
tags:       [memory, continual-learning]
statement: >
  Produce a system that learns from a non-stationary stream for a year of wall-clock time,
  retains earlier competence within a stated tolerance, and does not grow its parameter
  count or its stored replay data without bound.
summary: >
  Every known mitigation for catastrophic forgetting either accumulates stiffness, grows
  storage without limit, or grows parameters without limit. None survives a year-long stream.
---

## Why the existing families do not close it

| Family | Failure mode at scale |
|---|---|
| Regularisation (EWC and descendants) | Stiffness accumulates; plasticity approaches zero |
| Replay | Storage grows with stream length, or generation quality degrades |
| Parameter isolation | Parameter count grows with task count; transfer is lost |
| Retraining from scratch | Cost grows with total experience; not a continual method |

The trilemma is the point: bounded parameters, bounded storage, and bounded forgetting
appear to be jointly unachievable by current methods, and nobody has shown they are jointly
unachievable in principle either.

## What would count as progress

A demonstration on a stream long enough that the failure modes above actually bite —
which in practice means months, not the short task sequences standard in the literature.
An honest negative result on a year-long stream would also close a real gap.

## Related

- [Catastrophic forgetting](/wiki/catastrophic-forgetting/) · [Continual learning](/wiki/continual-learning/)
- [P-0002 — Overcoming catastrophic forgetting](/papers/overcoming-catastrophic-forgetting/)
