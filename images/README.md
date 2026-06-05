# Screenshots — drop your real images here

The site currently shows **labeled SVG placeholders**. Replace them with real
screenshots whenever you're ready. Three slots drive the page:

| Slot in the page | Placeholder file | Recommended size | Aspect |
|---|---|---|---|
| Hero (top of page) | `shot-hero.svg` | 1200 × 760 | landscape |
| "Held tall" — phone | `shot-portrait.svg` | 390 × 844 | portrait (phone) |
| "Held wide" — desktop | `shot-landscape.svg` | 1280 × 800 | landscape |

## Easiest way to swap one in

1. Save your screenshot as a PNG/JPG into this `images/` folder, e.g. `dashboard.png`.
2. Open [`../index.html`](../index.html) and find the matching placeholder
   filename (search for `shot-hero.svg`), then change the `src` to your file:

   ```html
   <img src="images/dashboard.png" alt="PerkMax dashboard ..." />
   ```

Each placeholder is referenced exactly once in `index.html`, and the comment
right above it tells you which screenshot belongs there.

## Tips

- **Phone shot:** take it on a real device or a narrow browser window so the app
  is in its portrait/compact layout.
- **Desktop shot:** maximize the window (or use the web app) so the app shows its
  wide, multi-column layout — that's what sells the "any screen" section.
- Keep file sizes reasonable (under ~400 KB each); compress PNGs if needed.
- These files are also fine to delete once you've switched every `src` over.

## Reused app assets (already real — no action needed)

- `logo.png`, `icon-512.png`, `icon-maskable-512.png` — copied straight from the
  app's launcher icons so the favicon and social card match the app.
