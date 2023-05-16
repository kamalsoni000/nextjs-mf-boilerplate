# Microfrontends using Next.js and Module Federation

Microfrontends allow teams to work independently of each other by splitting the application into smaller, shareable, and modular components. The primary goal for a microfrontend strategy is to improve collaboration across teams of developers.

Microfrontends using Next.js and Module Federation

# Module Federation
Module federation is a strategy for building applications in a large organization with many teams that want to prioritize shipping velocity. We encourage you to research module federation as an option for helping teams build as a part of a large organization where teams may not have the opportunity to communicate and work together.

<center>

[![1](https://github.com/sokra/slides/blob/master/content/ModuleFederationWebpack5/1.png)](https://github.com/sokra/slides/blob/master/content/ModuleFederationWebpack5/1.png)

</center>

The motivation for Module Federation is developing one or more applications with multiple teams.

Applications are split into smaller application "parts". These could be frontend components like a "Header" or "Sidebar" component, but also logical components like "Data Fetching Logic" or other business logic.

Each part can be developed by a separate team.

Applications or parts of them share other parts or libraries.

<hr>


<center>

[![10](https://github.com/sokra/slides/blob/master/content/ModuleFederationWebpack5/10.png)](https://github.com/sokra/slides/blob/master/content/ModuleFederationWebpack5/10.png)

</center>

With Module Federation each part would be a separate build. These builds are compiled as "Containers".

Containers can be referenced by applications or other containers.

In such a relationship the container is the "remote" and the consumer of the container is the "host". The "remote" can expose modules to the "host". The "host" can use such modules. They are called "remote modules".

By using separate builds we getting a good build performance for the whole system.

<hr>

## Getting Started

1. run `yarn install` with npm 7 (yarn probbably better) in all 3 Modules.
2. run `yarn start` and browse to Run Particular Modules 

## Context

We have three next.js applications

- `home` - port 3000
- `blog` - port 3001
- `contacts` - port 3002

The Main Authentication is Done In Home Module by the Help of Middleware.ts in Nextjs and Sub Applications is Load Under Home Module Which As a Main Gateway Of the MicroFrontend 

The applications utilize omnidirectional routing and pages or components are able to be federated between applications like a SPA

### Sharing

Next.js does not have an async boundary. Between the entrypoint and the shared code.
Read this for more context: https://github.com/sokra/slides/blob/master/content/ModuleFederationWebpack5.md

In order for webpack to figure out who shares what, an async boundary is typically needed somewhere before the module is used.
Usually, we can work around async boundaries for things like `react` by specifying the following

https://medium.com/dev-genius/module-federation-advanced-api-inwebpack-5-0-0-beta-17-71cd4d42e534?source=friends_link&sk=70658eb0bf58dfcc5ce534cb1cd78b1f

```js
const config = {
  shared: {
    react: {
      eager: true,
      singleton: true,
    },
  },
};
```

However, in the case of Next.js - you need to use @module-federation/nextjs-mf


