<h1 align="center">Welcome to reenode 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://twitter.com/am_pra_veen">
    <img alt="Twitter: am_pra_veen" src="https://img.shields.io/twitter/follow/am_pra_veen.svg?style=social" target="_blank" />
  </a>
</p>

> 🔥 A **CLI** for generating React + Node boilerplates 🚀 with handful configurations. **reenode** helps you to create boilerplates with different configurations such as **react-router**, **redux** and **MongoDB**.

### 🏠 [Homepage](https://github.com/praveen-me/reenode)

## Demo 🎥

![GIF](/assets/reenode.gif)

## Install

```sh
npm install -g reenode
yarn global add reenode
```

## Usage
- `create [app-name]`: helps to create boilerplate that you want. Just run: `reenode create my-app`
- `--help | -h`: Helps you to get help about `reenode`.
- `--version | -v`: Gives current version of `reenode`.

You can simply create a project by running:
```
reenode create project-name
```

## Features

- Hot Module Replacement in client-side in dev mode.
- Live server reloading using `nodemon` in dev mode.
- Different boilerplates generation.
- [`eslint`](https://eslint.org/) and [`prettier`](https://prettier.io/) setup.

### Setup for ESlint + Pritter + VS Code:

- Install [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
- Install [Priettier Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
- Add these lines to your vs code's `setting.json`.

```json
  "prettier.eslintIntegration": true,
  "prettier.jsxBracketSameLine": true,
  "editor.formatOnSave": true,
```

## Introduction

Every boilerplate container three main folders: <br>
**Note:** Feel free to edit files according to your need.

- `client` : This folder contains all the code related to client such as react, redux, react-router, etc.
- `server` : This folder contains all the code related to server such as node, express, mongodb.
- `build-utils` : This folder contains all the configuration related to webpack.

## Author

👤 **Praveen Kumar Saini**

* Twitter: [@am_pra_veen](https://twitter.com/am_pra_veen)
* Github: [@praveen-me](https://github.com/praveen-me)

## 📝 License
Copyright © 2019 Praveen Kumar Saini. <br/>
This project is [MIT](https://github.com/praveen-me/reenode/blob/master/LICENSE) licensed.

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_