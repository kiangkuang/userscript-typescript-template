# Userscript TypeScript Template

A template for creating userscripts in TypeScript. This repository provides a basic structure and tooling to get you started quickly with userscript development.

## Features

- Userscripts using TypeScript powered by Vite
- Configurable userscript headers using [vite-plugin-monkey](https://github.com/lisonge/vite-plugin-monkey)
- Prettier as formatter with precommit hook to run lint-staged
- Precommit hook to build latest code so you can use repository as installation link (See [Deployment](#deployment))

## Getting Started

1. Customize your userscript headers in [vite.config.ts][userscriptConfig]
2. Modify [src/main.ts][inputFile] to implement your userscript logic
3. Run `npm run build` to build the resulting [script.user.js][outputFile]

## Deployment

This template is currently configured with a precommit hook to run

```
npm run build
git add dist
```

This ensures that the [script.user.js][outputFile] file in the repository will automatically be up to date with the source code.

This allows users to use this [link][installUrl] as the installation link.

Alternatively, you can remove this behaviour by

1. Remove command in [pre-commit](/.husky/pre-commit#L5-L6)
2. Add `dist` to [.gitignore](/.gitignore)
3. Run `npm run build` whenever you want

[userscriptConfig]: /vite.config.ts#L4
[inputFile]: /src/main.ts
[outputFile]: /dist/script.user.js
[installUrl]: /dist/script.user.js?raw=1
