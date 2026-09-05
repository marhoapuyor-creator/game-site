# Marhoapuyor Studio — game-site

This repository contains a starter marketing website, a small HTML5 playable demo, and an ad assets folder.

Live site (GitHub Pages): https://marhoapuyor-creator.github.io/game-site/

What to edit before going live:
- Contact form: add your Formspree endpoint or server endpoint. In index.html set window.FORM_ENDPOINT in js/game-loader.js or edit the script tag in index.html.
- Replace placeholder email contact@marhoapuyor-creator.com with your real email.
- Replace logo at assets/logo.svg with your own logo (same filename).

Deploy notes
- The repo is on the main branch. GitHub Pages should publish automatically from the main branch. If not, enable Pages in the repository settings (set branch to main / root).

Local run
- You can preview locally by opening index.html in a browser, or run a small static server:
  npx http-server -c-1

Files of interest
- index.html — site
- css/styles.css — styles
- js/game-loader.js — loads demo and handles form
- demo/game.js — tiny canvas demo
- ads/ — ad copy and SVG banners

Analytics & tracking
- Add your GA4 script or other analytics to index.html inside <head> before deploying.

If you want, I can:
- Configure a custom domain you own
- Set up a Formspree form and wire FORM_ENDPOINT
- Create PNG/JPEG versions of the banners and social image sizes
- Create the 15s video (voiceover + stock footage directions)
