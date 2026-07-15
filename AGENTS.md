# Speaking Exam Trainer

A static, client-side Progressive Web App (PWA) for practising a 3-part English speaking exam. Plain HTML/CSS/vanilla JS — no framework, no build step, no dependencies, and no backend. All content lives in `js/data.js`; UI logic (tabs, timers, recorder) is in `js/app.js`.

## Cursor Cloud specific instructions

- **Running the app**: serve the repo root over HTTP, e.g. `python3 -m http.server 8000`, then open `http://localhost:8000`. See `README.md` for details.
- **Must be served over `http://localhost` (not `file://`)**: the service worker (`sw.js`) and the microphone recorder both require a secure context, so opening `index.html` directly will silently disable those features.
- **No install / build / test / lint tooling exists**: there is no `package.json`, lockfile, or dependency manifest, and no automated test or lint suite. "Building" is just serving the static files; deployment (`.github/workflows/deploy-pages.yml`) uploads the repo root to GitHub Pages with no build step.
- **Microphone recording cannot be exercised headlessly** (no audio device / mic permission in the VM), but it does not block the rest of the app — all other features (tabs, topic switching, collapsible answers, speaking timers, vocabulary) work in a normal browser.
- Google Fonts is loaded via CDN in `index.html`; it is cosmetic only and the app works offline once the service worker has cached assets.
