---
uid:      R-002
title:    "The Next Decade in AI: Four Steps Towards Robust Artificial Intelligence"
date:     2026-08-21
author:   Gary Marcus
version:  "1.0"
status:   contested
horizon:  "2020–2030"
source:   https://arxiv.org/abs/2002.06177
tags:     [hybrid, symbolic, robustness]
summary: >
  Argues that scaling statistical learning alone will not produce robust intelligence, and
  proposes hybrid architectures with explicit symbolic machinery, large-scale knowledge, and
  cognitive models as prerequisites.
---

{% capture c %}
Archive summary of an externally published proposal. Filed as **contested** because parts
of its central empirical prediction — that pure scaling would plateau on compositional and
few-shot tasks — have been at minimum complicated by subsequent results.
{% endcapture %}
{% include note.html label="External proposal" kind="quiet" content=c %}

## The four steps

1. Hybrid architectures combining learned and symbolic representations.
2. Large-scale structured knowledge, including a formal ontology.
3. Reasoning machinery capable of operating over that knowledge.
4. Cognitive models rich enough to support causal and counterfactual inference.

## Why it is worth keeping on file

The predictions are unusually specific for a position paper, which makes it useful
regardless of whether one agrees. The failure modes it names — brittleness under
distribution shift, absence of a stable world model, poor compositional generalisation —
remain the standard diagnostic vocabulary, and the disagreement is now about *how much*
of each survives scaling, rather than whether the categories are real.

Read alongside [R-001](/roadmaps/a-path-towards-autonomous-machine-intelligence/), which
shares the diagnosis and rejects the prescription.
