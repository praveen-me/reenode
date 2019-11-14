# React and Node Boilerplate
## **NOTE**: Feel free to edit this README according to your need.

This boilerplate is packed to create full-stack applications and have a minimal configuration for leveraging the power of this boilerplate. 🔥

It comes with webpack-dev-middleware, webpack-hot-middleware(for Hot Module Replacement in client), eslint, prettier.
And I highly recommend configuring this boilerplate in your way.

## Usage
This boilerplate provides some scripts for sake of easiness:
You can run with your configured package manager. If you are using `npm` then have to use `npm run script-name` for every script except for `start` or if you are using yarn then you need to do `yarn script-name`. ⌨︎

* `start` : Runs you project in _production_ mode. Before running this command make sure you have built the project using `build` command.
* `dev` : Starts the development server.
* `build` : Build your client for production mode.
* `lint` : Runs eslint on whole project.
* `lint:fix-server` : Fix eslint issue on server.
* `lint:fix-client` : Same as `lint:fix-server` instead resolve issues on client folder.
* `prettier:server` : Runs prettier on server.
* `prettier:client` : Runs prettier on client.

## Features

- Hot Module Replacement in client-side in dev mode.
- Live server reloading using `nodemon` in dev mode.
- Different boilerplates generation.
- [`eslint`](https://eslint.org/) and [`prettier`](https://prettier.io/) setup.

## Folder Structure
Every boilerplate contains three main folder:

- `client` : This folder contains all the code related to the client such as react, redux, react-router, etc.
- `server` : This folder contains all the code related to the server such as node, express, MongoDB.
- `build-utils` : This folder contains all the configuration related to webpack.


