---
title:    "General-purpose AI"
date:     2026-08-20
aka:      [GPAI, general-purpose artificial intelligence, foundation model]
tags:     [generality, definitions]
summary: >
  A system whose competence is not bounded to the tasks it was trained on, and which can be
  directed at new tasks by description rather than by retraining.
see_also: [scaling-laws, continual-learning, world-model]
---

A system is **general-purpose** to the degree that the set of tasks it can be directed at
exceeds the set it was optimised for. The term is preferred here over *AGI* because it names
a measurable property rather than a threshold, and because the threshold framing tends to
collapse into an argument about definitions.

## Three axes worth separating

Generality is usually discussed as one quantity. It is at least three, and systems can be
strong on one while weak on another:

- **Task breadth** — how wide the set of addressable tasks is at a fixed set of weights.
- **Specification cost** — how much effort it takes to direct the system at a new task.
  Retraining is expensive; a natural-language instruction is nearly free.
- **Accumulation** — whether competence acquired during operation persists. A system that
  solves a novel task and retains nothing is general in breadth but not in time.

Current large models are strong on the first two and close to absent on the third, which
is why [continual learning](/wiki/continual-learning/) and
[catastrophic forgetting](/wiki/catastrophic-forgetting/) recur throughout this archive.

## What it is not

Not a claim about consciousness, agency, or resemblance to human cognition. Not a synonym
for *large*. A very large model narrowly specialised is not general-purpose; a small model
that can be steered across many domains partly is.

## Regulatory use of the term

"GPAI" also appears as a legal category in AI regulation, where it carries a specific and
narrower technical definition tied to training compute and capability thresholds. That usage
is related but not identical to the one above; where an entry means the legal sense, it
says so.
