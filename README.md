# Keeps website

Marketing site for **Keeps** — a personal product journal for iOS and Android. Static HTML/CSS/JS, hosted on [GitHub Pages](https://pages.github.com/).

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Landing page |
| `privacy.html` | Privacy Policy (App Store / Play Store) |
| `styles.css` | Shared styles |
| `script.js` | Header scroll state & reveal animation |
| `img/` | Icons, favicon, hero mockup |

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
# or: python3 -m http.server 8080
```

## GitHub Pages

1. Repo **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / folder: `/ (root)`
4. Site URL will be `https://<user>.github.io/keeps-website/` (or a custom domain if configured)

No build step — Pages serves these files as-is.

## Privacy & support

- Privacy Policy: [privacy.html](privacy.html)
- Support: [my.keeps.app@gmail.com](mailto:my.keeps.app@gmail.com)

## License

All rights reserved. This site and Keeps branding are not licensed for reuse unless stated otherwise.
