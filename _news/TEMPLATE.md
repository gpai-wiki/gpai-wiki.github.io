---
published: false          # <-- DELETE THIS LINE, or your item will not appear

# ---- required ---------------------------------------------------------------
uid:      N-0004          # next free number; check _news/ for the highest
title:    "Short, factual, no hype"
date:     2026-08-24      # when the thing HAPPENED (or when the primary source
                          # was published) -- not when you filed it
kind:     research        # research | release | policy | industry
source:   https://        # PRIMARY source: the paper, the official announcement,
                          # the actual legal text. Required. Not a news article.
source_label: "arXiv:0000.00000"   # short label shown in the index
tags:     [scaling, evaluation]    # 1-3, reuse existing tags where you can
summary: >
  Two or three sentences. What happened, stated plainly, then why it matters for
  general-purpose capability. No adjectives you would not defend in review.

# ---- optional ---------------------------------------------------------------
also:                     # secondary coverage. Never the only source.
  - { label: "Reuters", url: "https://" }

related:                  # links into the archive; titles are resolved for you
  - /papers/attention-is-all-you-need/
  - /wiki/scaling-laws/

added_by: your-github-handle

correction:               # add later if the item turns out to be wrong
  date: 2026-09-01
  note: "What was wrong, and what is correct. Do not silently edit the item."
---

The body is **optional**. Many items need nothing beyond the summary above.

Use it when there is something a reader cannot get from the source in one glance:
what is genuinely new versus incremental, which claims are load-bearing, what would
have to be true for this to matter in a year. Keep it short -- long analysis belongs
in `_papers/` or on your own contributor page.

Everything the archive supports works here: maths with `$$...$$`, tables, code
fences, and the figure/video/audio includes. See [the guide](/contribute/#news).
