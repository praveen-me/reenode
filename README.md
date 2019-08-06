# reenode

🔥 A **CLI** for generating React + Node boilerplates 🚀 with handful configurations. **reenode** helps you to create boilerplates with different configurations such as **react-router**, **redux** and **MongoDB**.

![](https://img.shields.io/npm/v/reenode.svg)

# Demo 🎥

![GIF](/assets/reenode.gif)

# Install

```
npm install -g reenode
yarn global add reenode
```

# Usage

- `create [app-name]`: create command helps you to create boilerplate that you want. Just run: `reenode create my-app`
- `--help | -h`: Helps you to get help about `reenode`.
- `--version | -v`: Gives current version of `reenode`.

# Introduction

Every boilerplate container three main folders: <br>
**Note:** Feel free to edit files according to your need.

- `client` : This folder contains all the code related to client such as react, redux, react-router, etc.
- `server` : This folder contains all the code related to server such as node, express, mongodb.
- `build-utils` : This folder contains all the configuration related to webpack.

# Features

- Hot Module Replacement in client-side in dev mode.
- Live server reloading using `nodemon` in dev mode.
- Different boilerplates generation.
- [`eslint`](https://eslint.org/) and [`prittier`](https://prettier.io/) setup.

## Setup for ESlint + Pritter + VS Code:

- Install [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
- Install [Priettier Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
- Add these lines to your vs code's `setting.json`.

```json
  "prettier.eslintIntegration": true,
  "prettier.jsxBracketSameLine": true,
  "editor.formatOnSave": true,
```

# License

![License](https://img.shields.io/npm/l/reenode)

- [MIT](https://en.wikipedia.org/wiki/MIT_License)
