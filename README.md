# Learning ElectronJS (and ReactJS, with TypeScript)
This repo contains sample ElectronJS project(s) written in TypeScript to help me get up-to-speed with creating desktop applications in a web dev environment, rather than what I'm used to in Unity/C# programming!

## Creating a New ReactJS + ElectronJS + TypeScript Project
### 1. Run `npx create-react-app .`
:information_source: NOTE: Now, you can run `npm start` to run the ReactJS project currently.

### 2. Run `npm install electron concurrently wait-on cross-env`
### 3. Edit your `package.json` with the following:
#### 3.1. Set your "main" field to `"src/main.js"`
#### 3.3. Set your "scripts" field to the following:
```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",

  "electron-serve": "concurrently -k \"cross-env BROWSER=none npm start\" \" npm run electron-start\"",
  "eletron-build": "",
  "electron-start": "wait-on tcp:3000 && electron ."
},
```
:information_source: NOTE: Now, you can run `npm run electron-serve` to run the ElectronJS + ReactJS project currently.

### 4. Run `npm install -D typescript`
#### 4.1. Add a new `tsconfig.json` file to the project with at least the following set _(use `tsc --init` for fully-documented JSON config file)_:
```json
{
    "compilerOptions": {
      /* Visit https://aka.ms/tsconfig.json to read more about this file */
  
      /* Language and Environment */
      "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
      "jsx": "react",                                      /* Specify what JSX code is generated. */
  
      /* Modules */
      "module": "commonjs",                                /* Specify what module code is generated. */
      "rootDir": "ts",                                     /* Specify the root folder within your source files. */
  
      /* Emit */
      "sourceMap": true,                                   /* Create source map files for emitted JavaScript files. */
      "outDir": "src",                                     /* Specify an output folder for all emitted files. */
      "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */
  
      /* Type Checking */
      "strict": true,                                      /* Enable all strict type-checking options. */
      "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
    }
  }
```

## References
- [(Getting Started with) React with TypeScript](https://www.electronforge.io/guides/framework-integration/react-with-typescript)
- [`package.json` documentation](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)
- [Why you should not use a custom value with `process.env.NODE_ENV`](https://rafaelalmeidatk.com/blog/why-you-should-not-use-a-custom-value-with-node-env)
- Handy NPM Packages:
  - [Playwright _(for unit testing)_](https://www.npmjs.com/package/playwright)
  - [Husky _(for Git hooks)_](https://www.npmjs.com/package/husky)
  - [Webpack _(for bundling JavaScript projects)](https://www.npmjs.com/package/webpack)
