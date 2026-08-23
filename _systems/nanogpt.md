---
uid:      S-001
title:    "nanoGPT"
date:     2026-08-22
repo:     https://github.com/karpathy/nanoGPT
language: Python
license:  MIT
hardware: "8× A100 40GB, ~4 days for the 124M reproduction"
status:   maintained
reproduces: /papers/attention-is-all-you-need/
tags:     [architecture, training, reproduction]
summary: >
  A deliberately small, readable implementation of GPT training and fine-tuning — roughly
  300 lines of model code and 300 of training loop. It is the standard reference point for
  understanding what a decoder-only Transformer actually does at the level of tensors.
install: |
  git clone https://github.com/karpathy/nanoGPT && cd nanoGPT
  pip install torch numpy transformers datasets tiktoken wandb tqdm
  python data/shakespeare_char/prepare.py
  python train.py config/train_shakespeare_char.py
---

## Why it is filed here

Most Transformer implementations are either pedagogical toys that cannot train anything
real, or production frameworks whose abstractions obscure the model. This sits in between:
small enough to read in an afternoon, complete enough to reproduce GPT-2 scale results.

For anyone working through the [architecture](/wiki/general-purpose-ai/) literature, the
value is that every equation in [P-0001](/papers/attention-is-all-you-need/) has a visible
counterpart of a few lines.

## What you get

```python
class CausalSelfAttention(nn.Module):
    def forward(self, x):
        B, T, C = x.size()
        q, k, v = self.c_attn(x).split(self.n_embd, dim=2)
        k = k.view(B, T, self.n_head, C // self.n_head).transpose(1, 2)
        q = q.view(B, T, self.n_head, C // self.n_head).transpose(1, 2)
        v = v.view(B, T, self.n_head, C // self.n_head).transpose(1, 2)
        y = F.scaled_dot_product_attention(q, k, v, is_causal=True)
        return self.resid_dropout(self.c_proj(y.transpose(1, 2).contiguous().view(B, T, C)))
```

## Caveats

The character-level Shakespeare configuration runs on a laptop in minutes and teaches the
mechanics; the GPT-2 reproduction needs real hardware and real time. Check the repository
for current numbers rather than trusting the figures quoted in any secondary source,
including this one.
