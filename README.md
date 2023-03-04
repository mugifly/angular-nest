# angular-nest

Simple web app template with Angular + NestJS + ng-openapi-gen.

Deployable on Heroku, Render, Google App Engine (GAE) and other hosting services using with/without Docker ([learn more](https://github.com/mugifly/angular-nest/wiki/#Deployments)).

[![Build](https://github.com/mugifly/angular-nest/actions/workflows/build.yml/badge.svg?event=push)](https://github.com/mugifly/angular-nest/actions/workflows/build.yml)

---

## Key Elements

- Angular -- for Frontend app.
- NestJS -- for Backend app.
- ng-openapi-gen -- for API Client generation.
- Docker -- for Production environment.
- Karma + Jasmine -- for Unit testing of Frontend (with Puppeteer + Headless Chromium)
- Jest -- for Unit testing of Backend
- GitHub Actions -- for CI
- npm Workspaces - for Monorepo structure.

---

## Quick Start

This app supports direct deployment to [various hosting services](https://github.com/mugifly/angular-nest/wiki/#Deployments) as a production environment.

It's also very easy to automatic-deployment, because you don't have to run the build process locally or in CI.

### Development on Local

Before you start, you should install the following softwares:

- Git

- Node.js v16+

- Visual Studio Code

Next, please [Create a new repository from this repository](https://github.com/mugifly/angular-nest/generate).

Then, execute as the following in your terminal:

```
$ git clone git@github.com:YOUR_GITHUB_NAME/angular-nest.git
$ cd angular-nest/

$ npm install

$ npm run start:dev
```

Finally, open the web browser and navigate to `http://localhost:4200/`.
Also, when you edit the frontend source-code, auto-reloading applies your changes to the browser immediately.

See the [Wiki](https://github.com/mugifly/angular-nest/wiki/) for additional information.
You'll find tips for implementing database connectivity, guides for future updates, and more.

### Deployment on Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

This app can be deployed either to the `Heroku` stack (Node.js buildpack based) or the `Container` stack (Docker based).

Please see [Deploy to Heroku](https://github.com/mugifly/angular-nest/wiki/Deploy-to-Heroku) page for more informations.

### Deployment on Render

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

This app can be deployed either as a Node.js application or Docker based application.

Please see [Deploy to Render](https://github.com/mugifly/angular-nest/wiki/Deploy-to-Render) page for more informations.

### Deployment on other servers (with/without Docker)

https://github.com/mugifly/angular-nest/wiki/#Deployments

---

## CLI Commands

### Start

- Start the development server (watch mode): &nbsp; `npm run start:dev`
- Start the production app: &nbsp; `npm run build && npm run start`

### Angular CLI & Nest CLI

- Angular CLI (@angular/cli): &nbsp; `npm run ng`
  - Generate component: &nbsp; `npm run ng -- generate component foo-bar`
  - Other `ng` commands can also be run by typing it after `npm run ng -- `. See [here](https://angular.io/cli#command-overview) for a list of the available commands.
- Nest CLI (@nestjs/cli): &nbsp; `npm run nest`
  - Generate controller: &nbsp; `npm run nest -- generate controller foo-bar`
  - Other `nest` commands can also be run by typing it after `npm run nest -- `. See [here](https://docs.nestjs.com/cli/usages) for a list of the available commands.

### Testing

- Unit tests for frontend: &nbsp; `npm run test -w client` &nbsp; (Google Chrome and [dependencies of Puppeteer](https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md) required)
- Unit tests for backend: &nbsp; `npm run test -w server`

### Install npm modules

- Install for frontend: `npm install -w client XXXXX`
- Install for backend: `npm install -w server XXXXX`<br>(e.g. `npm install -w server @nestjs/typeorm typeorm`)

---

## License and Author

This project is released under the [CC0 1.0 Universal](https://github.com/mugifly/angular-nest/blob/master/LICENSE) license, by Masanori Ohgita ([mugifly](https://github.com/mugifly)).

Therefore, a copyright notice is NOT required.
Feel free to use or copy it to your project :)

NOTE: However, some sample codes and documents (e.g. client/README.md and server/README.md) that generated by Angular CLI or Nest CLI may be based on their respective licenses.
