---
uid:      P-0001
title:    "Attention Is All You Need"
date:     2026-08-20
authors:  [A. Vaswani, N. Shazeer, N. Parmar, J. Uszkoreit, L. Jones, A. N. Gomez, Ł. Kaiser, I. Polosukhin]
venue:    NeurIPS
year:     2017
url_arxiv: https://arxiv.org/abs/1706.03762
tags:     [architecture, attention, scaling]
summary: >
  Introduces the Transformer, a sequence model built entirely from attention and
  feed-forward layers with no recurrence or convolution. Its significance for
  general-purpose systems is less the translation result than the property that made it
  the substrate for everything since: it parallelises over sequence length, so capability
  became a question of scale rather than of architecture search.
bibtex: |
  @inproceedings{vaswani2017attention,
    title     = {Attention Is All You Need},
    author    = {Vaswani, Ashish and Shazeer, Noam and Parmar, Niki and Uszkoreit, Jakob
                 and Jones, Llion and Gomez, Aidan N. and Kaiser, {\L}ukasz and Polosukhin, Illia},
    booktitle = {Advances in Neural Information Processing Systems},
    year      = {2017}
  }
---

## What it does

The paper replaces recurrence with **scaled dot-product attention**. For queries $$Q$$, keys
$$K$$ and values $$V$$, each layer computes

{% include eq.html n="1" tex="\mathrm{Attention}(Q, K, V) = \mathrm{softmax}\!\left(\frac{QK^{\top}}{\sqrt{d_k}}\right) V" %}

where the $$1/\sqrt{d_k}$$ scaling keeps the softmax out of its saturated regime as $$d_k$$
grows. Multi-head attention runs $$h$$ of these in parallel on projected subspaces and
concatenates the results, so a single layer can attend to several relational patterns at
once.

The architectural claim is negative and, in retrospect, the important one: nothing else in
the sequence-modelling toolkit — recurrence, convolution, explicit alignment — was load
bearing.

## Why it matters for general-purpose capability

Recurrent models compute a sequence of length $$n$$ in $$O(n)$$ sequential steps. Attention
does it in $$O(1)$$ sequential steps at the cost of $$O(n^2)$$ work per layer. On hardware
where parallel throughput is abundant and sequential latency is not, that trade is
extremely favourable — and it is what made it economically sensible to train a single model
on very large, undifferentiated corpora.

| Layer type | Complexity per layer | Sequential ops | Max path length |
|---|---:|---:|---:|
| Self-attention | $$O(n^2 \cdot d)$$ | $$O(1)$$ | $$O(1)$$ |
| Recurrent | $$O(n \cdot d^2)$$ | $$O(n)$$ | $$O(n)$$ |
| Convolutional | $$O(k \cdot n \cdot d^2)$$ | $$O(1)$$ | $$O(\log_k n)$$ |

The **maximum path length** column is the one that matters for general capability: any two
positions in the input are one hop apart, so gradients between distant tokens do not have
to survive a long chain of multiplications. Long-range dependency became an engineering
constraint on memory rather than a fundamental optimisation problem.[^1]

## Where it is weak

The quadratic term is a real ceiling, and the long line of work on sparse, linear and
recurrent-state alternatives exists because of it. The paper also says nothing about the
question that dominates [general-purpose AI](/wiki/general-purpose-ai/) now: the
Transformer is a fixed-weight function at inference time, so everything about
[continual learning](/wiki/continual-learning/) and persistent memory sits outside it.

> The dominant sequence transduction models are based on complex recurrent or
> convolutional neural networks.
> <cite>Opening line of the abstract — a framing the paper then dismantles</cite>

[^1]: This is also why the positional encoding is necessary at all: with every position one
    hop from every other, the model has no intrinsic notion of order to fall back on.
