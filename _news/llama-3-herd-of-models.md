---
uid:      N-0001
title:    "Llama 3.1 405B released with open weights"
date:     2024-07-31
kind:     release
source:   https://arxiv.org/abs/2407.21783
source_label: "arXiv:2407.21783 — The Llama 3 Herd of Models"
tags:     [scaling, generality]
summary: >
  Meta published the Llama 3 technical report alongside open weights for models up to
  405B parameters. The significance for general-purpose work is distributional rather
  than architectural: capability near the contemporary frontier became something a
  research group could run and modify locally rather than only query through an API.
related:
  - /wiki/scaling-laws/
  - /wiki/general-purpose-ai/
---

The report is unusually detailed on the parts that are normally omitted — data curation,
the annealing schedule, and the infrastructure failure modes encountered across a
16k-GPU run. For anyone reasoning about what frontier training actually costs, that
operational detail is worth more than the benchmark tables.
