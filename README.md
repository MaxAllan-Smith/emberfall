# emberfalls-website

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## GitHub Pages

The GitHub Actions workflow builds and deploys `dist` when changes are pushed to
`main`. Pull requests and other branches are built without deploying.
In the repository's **Settings > Pages**, set the source to **GitHub Actions**;
publishing the source branch directly will not run the Vue build.

The site is hosted at https://maxallan-smith.github.io/emberfall/.
The `github-pages` build mode sets the asset base to `/emberfall/` and uses hash
routing (for example, `/emberfall/#/play`) so navigation and refreshes work on
GitHub Pages. Local development and normal production builds retain history routing.

To build the Pages version locally:

```sh
npm run build -- --mode github-pages
```
