# PerkMax — landing page

Marketing/landing site for **[PerkMax](https://github.com/hanyiabc/perk_max)**, a
Flutter app that tracks recurring credits and perks on premium credit cards.

It is a single static page — `index.html`, `styles.css`, `script.js`, and an
`images/` folder. **No build step, no dependencies, no third-party scripts or
fonts.** That keeps it fast and matches the app's no-tracking stance.

## Live site

Served from GitHub Pages: **https://hanyiabc.github.io/perk_max_site/**

The page links out to:

- **Web app** → https://hanyiabc.github.io/perk_max_releases/
- **Downloads** (Android APK + desktop builds) → https://github.com/hanyiabc/perk_max_releases/releases

> If those URLs ever change, update the `href`s in `index.html` (they're grouped
> in the nav, hero, and download sections).

## Local preview

Just open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Adding real screenshots

The page ships with labeled placeholders. See
[`images/README.md`](images/README.md) for the three slots and how to swap each
one in (it's a one-line `src` change per image).

## Deploying

GitHub Pages serves the `main` branch root. Any push to `main` republishes:

```bash
git add -A
git commit -m "Update landing page"
git push
```

`.nojekyll` is present so Pages serves the files as-is (no Jekyll processing).
