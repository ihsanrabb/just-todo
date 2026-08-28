# Design

## Plant growth widget

A small pixel-art widget that reflects progress as a growing plant. The plant
advances through five stages driven by the user's cumulative session count —
not sessions today — so the widget only ever moves forward.

## Layers

Three layers, composited back to front:

| Layer | Behaviour |
| --- | --- |
| backdrop | Drawn once. Sits behind every stage. |
| ground | Shared baseline. Drawn once. |
| plant | The only layer that swaps. Five variants. |

All five plant variants share one ground line and one horizontal centre, so the
widget never jumps on stage-up. Only the plant changes between stages; the
backdrop and ground stay put.

## Stages

| Asset | Stage | Sessions |
| --- | --- | --- |
| `seed.png` | seed | 0 |
| `sprout.png` | sprout | 1–5 |
| `leafy.png` | leafy | 6–20 |
| `budding.png` | budding | 21–40 |
| `full-bloom.png` | full bloom | 41+ |

Ranges are inclusive and contiguous — every session count maps to exactly one
stage.

## Assets

All under `src/assets/images/`.

| File | Depicts |
| --- | --- |
| `backdrop.png` | Park scene — two trees flanking a cloud band, grass field, soil body below. |
| `ground.png` | Grass row over a soil body, under a flat sky band. |
| `seed.png` | A seed half-buried in a low soil mound. |
| `sprout.png` | Two cotyledon leaves on a short stem, rooted in a soil mound. |
| `leafy.png` | Four-leaf plant — two leaf pairs on an upright stem. |
| `budding.png` | Tall stem with alternating leaves and a closed bud at the tip. |
| `full-bloom.png` | Open white flower above a single leaf pair on a straight stem. |

## Open

- **Sizing and scaling.** Native size and the scaling rule are not settled yet.
- **Transparency.** The five plant sprites currently ship with a baked card
  background rather than a transparent cut-out, so the layering described above
  assumes a future transparent re-export.
- **Backdrop vs. ground.** Both currently carry their own ground, so they
  overlap. Whether `ground.png` becomes a baseline strip over `backdrop.png` or
  the two collapse into one layer is undecided.
