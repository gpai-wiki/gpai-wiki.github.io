---
uid:      P-0003
title:    "World Models"
date:     2026-08-21
authors:  [D. Ha, J. Schmidhuber]
venue:    NeurIPS
year:     2018
url_arxiv: https://arxiv.org/abs/1803.10122
url_code: https://github.com/hardmaru/WorldModelsExperiments
tags:     [world-models, planning, agents]
summary: >
  Trains a compact generative model of an environment and then trains a controller almost
  entirely inside it. The demonstration that a policy learned in a learned simulation can
  transfer back to the real environment is the load-bearing result.
bibtex: |
  @inproceedings{ha2018world,
    title     = {Recurrent World Models Facilitate Policy Evolution},
    author    = {Ha, David and Schmidhuber, J{\"u}rgen},
    booktitle = {Advances in Neural Information Processing Systems},
    year      = {2018}
  }
---

## What it does

Three components, trained in sequence rather than end to end:

1. **V** — a variational autoencoder compressing each frame to a latent $$z_t$$.
2. **M** — a recurrent mixture-density network predicting $$p(z_{t+1} \given z_t, a_t, h_t)$$.
3. **C** — a deliberately tiny linear controller, evolved by CMA-ES on $$[z_t, h_t]$$.

Because C is small, it can be optimised inside M's rollouts — the "dream" — at negligible
cost, and the resulting policy still works when returned to the real environment.

## Why it matters for general-purpose capability

Separating *what the world does* from *what to do about it* is the structural argument for
[world models](/wiki/world-model/) as a route to general capability: the model is
task-agnostic and reusable, and only the small controller is task-specific. It also makes
planning cheap in a way that model-free reinforcement learning never is.

## Where it is weak

The controller learns to exploit the world model's errors — the paper is candid about
this and adds a temperature parameter to inject uncertainty as a countermeasure. That
adversarial pressure between planner and learned model has not gone away, and it is one
face of [OP-001](/open-problems/stable-long-horizon-credit-assignment/).
