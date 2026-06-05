# Icons

These SVGs are **self-hosted** (downloaded into the repo) so the page loads no
third-party resources. They're tinted to the theme color at render time via a
CSS `mask` (see `.p-ico` / `.f-ico` in `../../styles.css`).

## Sources & licenses

| Files | Set | License |
|---|---|---|
| `android.svg`, `apple.svg`, `linux.svg`, `windows.svg`, `pwa.svg` | [Simple Icons](https://simpleicons.org) | CC0 1.0 (public domain) |
| `credit-card.svg`, `target.svg`, `ticket.svg`, `repeat.svg`, `history.svg`, `cloud-upload.svg` | [Lucide](https://lucide.dev) | ISC |

Brand logos remain the trademarks of their respective owners; they're used here
only to indicate platform support. The Lucide files keep their ISC license
comment inline.

## Updating or swapping an icon

Drop a replacement SVG in this folder (same filename) and it's picked up
automatically. To use a different icon, change the `--i:url(...)` value on the
matching element in [`../../index.html`](../../index.html).

Re-fetch originals:

```bash
# Simple Icons (brand)
curl -fsSL https://cdn.jsdelivr.net/npm/simple-icons/icons/android.svg -o android.svg
# Lucide (line)
curl -fsSL https://cdn.jsdelivr.net/npm/lucide-static/icons/credit-card.svg -o credit-card.svg
```
