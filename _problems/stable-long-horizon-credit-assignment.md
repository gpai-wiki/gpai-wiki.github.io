---
uid:        OP-001
title:      "Stable credit assignment over month-long horizons"
date:       2026-08-20
opened:     2026-08-20
status:     open
difficulty: "open-ended"
tags:       [credit-assignment, agents]
statement: >
  Given an agent whose consequential decisions pay off weeks or months later, produce a
  learning rule that assigns credit correctly to those decisions without requiring the
  designer to hand-specify intermediate rewards.
summary: >
  Discounting makes long-horizon consequences invisible; undiscounted objectives are
  unstable. No known method scales temporal credit assignment past a few thousand steps.
---

## Why it is hard

Discounted return with $$\gamma < 1$$ attenuates a consequence $$k$$ steps away by $$\gamma^{k}$$.
For an agent acting once per second, a payoff one week later arrives with weight
$$\gamma^{6 \times 10^{5}}$$ — numerically zero for any $$\gamma$$ that keeps learning stable.
Setting $$\gamma = 1$$ removes the attenuation and removes the contraction that makes value
iteration converge.

Hierarchical methods buy horizon by making the top-level timestep coarse, but they push the
problem into the question of what the temporal abstraction should be, which is itself
unsolved and typically hand-designed.

## What would count as progress

- A method demonstrating correct assignment over $$10^{5}$$ or more environment steps on a
  task with a single terminal reward and no shaping.
- A negative result establishing an information-theoretic bound on assignable horizon as a
  function of trajectory entropy — that would be equally valuable.
- A sharper restatement that separates the estimation problem from the representation
  problem.

## Related

- [Credit assignment](/wiki/credit-assignment/)
- [P-0003 — World Models](/papers/world-models/), where model error bounds the usable horizon
