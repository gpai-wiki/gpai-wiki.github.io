---
uid:      N-0002
title:    "DeepSeek-R1 shows reasoning emerging from reinforcement learning alone"
date:     2025-01-22
kind:     research
source:   https://arxiv.org/abs/2501.12948
source_label: "arXiv:2501.12948"
tags:     [reasoning, training]
summary: >
  Reports that long-form reasoning behaviour can be elicited by reinforcement learning
  on outcome rewards without a supervised fine-tuning stage, with weights released. The
  claim that matters is the negative one: the supervised reasoning traces widely assumed
  to be necessary appear not to be.
related:
  - /wiki/credit-assignment/
  - /open-problems/stable-long-horizon-credit-assignment/
---

The result bears directly on [credit assignment](/wiki/credit-assignment/): outcome-only
rewards over long generated chains are exactly the regime where assignment is supposed to
be hardest, and it worked well enough to matter. Whether that survives at horizons longer
than a single response is open — see
[OP-001](/open-problems/stable-long-horizon-credit-assignment/).
