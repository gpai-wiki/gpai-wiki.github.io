---
uid:      P-0004
title:    "Language Models are Few-Shot Learners"
date:     2026-08-22
authors:  [T. B. Brown, B. Mann, N. Ryder, M. Subbiah, J. Kaplan, et al.]
venue:    NeurIPS
year:     2020
url_arxiv: https://arxiv.org/abs/2005.14165
tags:     [scaling, in-context-learning, generality]
summary: >
  Demonstrates that a 175B-parameter autoregressive language model performs a wide range of
  unseen tasks from instructions and a handful of examples in its context, with no gradient
  updates. This is the first large-scale evidence that generality can emerge from scale
  alone rather than from task-specific architecture.
bibtex: |
  @inproceedings{brown2020language,
    title     = {Language Models are Few-Shot Learners},
    author    = {Brown, Tom B. and Mann, Benjamin and Ryder, Nick and others},
    booktitle = {Advances in Neural Information Processing Systems},
    year      = {2020}
  }
---

## What it does

Scales the previous generation's recipe by roughly two orders of magnitude and evaluates
without fine-tuning, in three settings: zero-shot, one-shot, and few-shot, where the only
difference is how many demonstrations appear in the prompt.

## Why it matters for general-purpose capability

The result relevant to [GPAI](/wiki/general-purpose-ai/) is not any individual benchmark.
It is that **task specification moved from the weights into the context**. A single fixed
artefact became addressable by natural-language description of an arbitrary task, and the
gap between zero-shot and few-shot widened with model size — evidence that
[in-context learning](/wiki/continual-learning/) is itself something scale buys.

It also gave [scaling laws](/wiki/scaling-laws/) a capability interpretation rather than
merely a loss-curve one.

## Where it is weak

Contamination between the training corpus and the evaluation sets is acknowledged and
imperfectly bounded, which limits how much any single benchmark number can carry. More
fundamentally, few-shot performance says nothing about whether the model *retains* anything
from the interaction: the context is erased afterward, so this is generality without
accumulation — precisely the gap that
[OP-002](/open-problems/continual-learning-without-forgetting/) names.
