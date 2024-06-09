<h1 align="center">Welcome to GWS Spec-Checker Tool 👋</h1>
<p>
  <a href="https://gitlab.griffin-studio.dev/gws-internal/spec-check/-/blob/main/LICENSE" target="_blank">
    <img alt="License: Modified GNU General Public License (GPL) version 3" src="https://img.shields.io/badge/License-Modified GNU General Public License (GPL) version 3-green.svg" />
  </a>
</p>

> A simple Tool to overlay the Spec Design over the live preview website.

🏠 [Homepage](https://gws-internal.griffin-studio.co.uk/spec-check/) | ✨ [Demo](https://gws-internal.griffin-studio.co.uk/spec-check/)

## Usage

Install

```sh
bun install
```

Development

```sh
bun run dev
```

Production

```sh
bun run build
```

Tests

```sh
bun test
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Author

👤 **Rihards Simanovics**

* Website: https://griffin-web.studio/
* Gitlab: [@rihards-s](https://gitlab.griffin-studio.dev/rihards-s)
* LinkedIn: [@https://www.linkedin.com/in/rihardssimanovics/](https://linkedin.com/in/https://www.linkedin.com/in/rihardssimanovics/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://gitlab.griffin-studio.dev/gws-internal/spec-check/-/issues). You can also take a look at the [contributing guide](https://gitlab.griffin-studio.dev/gws-internal/spec-check/-/wikis/home).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Griffin Web Studio Limited](https://griffin-web.studio).<br />
Copyright © 2022 [Rihards Simanovics](https://gitlab.griffin-studio.dev/rihards-s).<br />
This project is [Modified GNU General Public License (GPL) version 3](https://gitlab.griffin-studio.dev/gws-internal/spec-check/-/blob/main/LICENSE) licensed.