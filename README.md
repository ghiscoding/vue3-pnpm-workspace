# Vue 3 and pnpm workspace boilerplate

### Reuse Components & Composables across multiple Applications

## Description

This boilerplate is to demo a setup where we can take advantage of [pnpm workspaces](https://pnpm.io/workspaces) where multiple Vue 3 applications can share Components and Composables. This setup will provide the ability for different teams to work on different applications while being able to share reusable Components & Composables to follow a DRY (Don't Repeat Yourself) setup.

The other ability that pnpm workspace is providing us is the ability to have our workspace running with and even without publishing the Component, Composable packages on NPM (under an [npm organization](https://docs.npmjs.com/organizations) to take advantage or workspace) or locally with [Verdaccio](https://verdaccio.org/)... in other words you could publish each packages of the workspace (in this demo that would be 4 of them: [application1](/apps/application1), [application2](/apps/application2), [components](/components) and [composables](/composables)) or simply skip all of that and simply build & run them locally without ever publishing them anywhere.

For a great versioning/publishing tool in a workspace environment, take a look at [Lerna-Lite](https://github.com/ghiscoding/lerna-lite) which is what I use in a workspace monorepo structure.

## What is included/configured

- [Vite](https://vitejs.dev/)
- [Vue 3 - Composition API](https://vuejs.org/api/composition-api-setup.html#composition-api-setup)
  - we use the `script setup` syntax in a TypeScript environment, more info in this Medium [article](https://medium.com/@AzilenTech/using-script-setup-for-vue-3-ec4b6173b7f4)
- [pnpm workspaces](https://pnpm.io/workspaces)
- [ESLint](https://eslint.org/) with [Prettier](https://prettier.io/) using [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) to auto-import Vue Components (to avoid adding `.use()` on each)
- [TypeScript](https://www.typescriptlang.org/)

## How does it work?

Since we are using pnpm workspace and Vite, we can take advantage of Vite's [library mode](https://vitejs.dev/guide/build.html#library-mode) and build the `Components` and `Composables` packages in that mode and make them available as distributed libraries/packages (via their `dist` folder), then we can use them in `application1` and/or `application2` separately. What if you need develop a Component or Composables, do we need to rebuild every single time? Yes we do, but for that we can take advantage of Vite's [build.watch](https://vitejs.dev/config/#build-watch), which will rebuild for us and allow us to develop faster.

For more info about Vite library mode, this [article](https://dev.to/josip2312/build-a-typescript-component-library-with-vite-58dh) explains it well.

## Project structure

#### Components ([/components](/components))

A very simple `MyButton` Component is provided as an example of a reusable component

#### Composables ([/composables](/composables))

A very simple `useMouse` Composable, which is a mouse position tracker, is provided as an example of a reusable composable.

#### Apps ([/apps](/apps))

The `Apps` folder is where you will want to include all your applications.

### Can we expand on this?

Sure, you could maybe add Directives and/or anything else that you deemed reusable. The steps are simple, just add a folder (probably easier to copy `Component` and rename/remove what is different) and then add it to the pnpm workspace via the [pnpm-workspace.yaml](/ghiscoding/vue3-pnpm-workspace/blob/main/pnpm-workspace.yaml) file and add proper build scripts in the [package.json](/ghiscoding/vue3-pnpm-workspace/blob/main/package.json) file in the project root.

## Inspiration

All credit goes to the [Gun-Vue](https://github.com/DeFUCC/gun-vue) project when I was researching on how to do a Vue 3 pnpm workspace structure for reusability. I did not know how to build the Components/Composables as libraries and that project got me started. Thanks to them.

## Contributions

Feel free to contribution to the project if you think that you can improve it.

## Installation

The steps should be straightforward, simply run pnpm install, execute a build of all packages and then run application1 or application2. The steps assume that you already have installed pnpm, if not then follow the [pnpm installation](https://pnpm.io/installation)

1. run pnpm install

```sh
pnpm install  # or pnpm i
```

2. run a build

```sh
# run a full build of everything
pnpm build

# or run Components build separately
pnpm build:components

# or run Composables build separately
pnpm build:composables

# or run a build watch, which will be picked up by both the Components & Composables
pnpm build:watch
```

3. run dev server (app1 or app2)

```sh
pnpm app1:dev
```

4. run prod build (app1 or app2)

```sh
pnpm app1:build

# or run a full build of everything
pnpm build
```
