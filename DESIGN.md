# HANSI design system

Four values, each with one job. If a change can't be described with the rules
below, the rules are wrong — fix them here first, then the code.

## Colours

| Token     | Value         | Job                                                              |
| --------- | ------------- | ---------------------------------------------------------------- |
| `cream`   | warm beige    | The page. Most of the site is this.                              |
| `card`    | lighter beige | Cards and panels sitting on the page.                            |
| `ketchup` | `#d33a2c`     | Action and emphasis: buttons, outlines, one block per page.      |
| `mustard` | warm yellow   | Highlight: closing panels, badges, footer headings.              |
| `ink`     | deep maroon   | Text, every drop shadow, and the footer. The site's dark anchor. |

There is no brown. `ink` is a near-black drawn from the red; at paragraph size
it reads as dark, not as a colour.

## Rules

1. **Beige is the page.** Each page gets **one** filled block — the red band on
   home, the smoke panel on catering, the yellow "not announced" card on
   where-we-are. Everything else is a beige card.
2. **No page ends on red.** The footer is the site's dark anchor, so a red panel
   directly above it puts two dark areas back to back. Page-closing panels are
   yellow or beige.
3. **Outlines are always red.** Every card, button and panel. No exceptions.
4. **Every shadow is maroon.** One shadow colour sitewide, on every surface.
   Shadows that changed colour per element read as accidental.
5. **Text never sits red-on-yellow or yellow-on-red.** On yellow use maroon; on
   red and maroon use cream, with mustard for headings.
6. **Red means "do this".** If red is used as a large flat area on a page, that
   page should not also have a red button competing with it.

## Type

- Display (`Bungee`) for headings and buttons, uppercase.
- `Outfit` for body, `Caveat` for the handwritten asides, `Cairo` for Arabic.
- Handwritten asides are red on beige, mustard on maroon.

## Motion

- `press`: buttons lift on hover and sink on click.
- `btn-red`: red buttons darken toward maroon on hover.
- `reveal`: sections fade up as they enter the viewport. **Always visible by
  default** — a prerendered page must read with JavaScript off.
- Stickers tilt per item via `stickerTilt(index)` so they look hand-stuck, and
  straighten slightly when their card is hovered.

## Photography

- Product shots: the item alone on the beige studio backdrop.
- Place shots: the real cart, the real team, real guests. No stock crowds.
- Export at 1400px for menu items, 1800px for wide shots, JPEG around 0.82.
