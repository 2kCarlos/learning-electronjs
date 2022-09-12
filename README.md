# Learning ElectronJS (and ReactJS, with TypeScript)
This repo contains a bare-bones base ElectronJS + ReactJS project setup with TypeScript to help me get up-to-speed with creating desktop applications in a web dev environment.


## Basic Commands
| Command                       | Description |
| ----------------------------- | ----------- |
| `npm start`                   | Runs the project locally in developer mode. |
| `npx playwright test`         | Runs the project's unit tests.<br />_(See [Playwright's docs](https://playwright.dev/docs/intro), [Electron's docs](https://www.electronjs.org/docs/latest/tutorial/automated-testing) and [example test scripts](https://github.com/microsoft/playwright/blob/main/examples/github-api/tests/test-api.spec.ts) for more info)_ |
| `npm run build-windows`       | Creates a build (executable) of the project for Windows_(See the project folders below)_. |
| `npm run build-mac`           | Creates a build (executable) of the project for MacOS_(See the project folders below)_. |
| `npm run build-linux`         | Creates a build (executable) of the project for Linux_(See the project folders below)_. |
| `npm run clean`               | Deletes the build folders. |


## Dependencies
| Package Name                  | Purpose |
| ----------------------------- | ------- |
| [⚛️ ReactJS](https://beta.reactjs.org/) | A popular library for building UI/UX using HTML/CSS/JS. |
| [🛠️ React Scripts](https://create-react-app.dev/docs/documentation-intro) | Allows us to easily run and build the ReactJS code. |
| [⚛️ ElectronJS](https://www.electronjs.org/docs/latest) | A popular library for developing standalone cross-platform desktop applications using JS. |
| [🛠️ Electron Builder](https://www.electron.build/) | Allows us to easily build and run the ElectronJS program. |
| [📜 TypeScript](https://www.typescriptlang.org/) | Allows us to write code in TypeScript for enhanced language features, and transpile down to JavaScript runtime code.<br /><br />ℹ️ NOTE: The ReactJS build process integrates directly with TypeScript, and thus, NO JavaScript files should be emitted from the ReactJS code.<br />The ElectronJS build process DOES need the emitted JavaScript files, so there is a 2nd [tsconfig.json](./electron/tsconfig.json) for the Electron project. |
| [🧪 Playwright](https://github.com/microsoft/playwright) | A popular library for automated testing such as for writing and running unit tests. |


## Project Folders
```
GIT REPO                    
├─ 📁 build                 (Gitignored) Contains the production build, created from npm run build-windows (for example).
├─ 📁 dist                  (Gitignored) Contains the development build, created from npm start.
├─ 📁 electron               Contains the ElectronJS project.
│  ├─ main.ts                The main entry point of the Electron project.
│  └─ tsconfig.json          The Electron project's TypeScript config file, necessary for emitting the JS files into builds.
├─ 📁 public                 Contains files that are copied directly to production builds, such as index.html.
│  └─ ...
├─ 📁 src                   Contains the source code of the React project. This code is packed by React's build script.
│  ├─ react                 
│  │  └─ App.tsx            
│  ├─ shared                
│  │  └─ constants.ts       
│  └─ index.tsx             
├─ 📁 tests                 Contains automated tests (such as unit tests) for the project, in the form of .spec.ts files.
│  └─ example.spec.ts       
├─ package-lock.json        
├─ package.json             
├─ README.md                
└─ tsconfig.json            
```


## 📖 Learning & References
- Default Project Structures:
  - [ElectronJS folder structure](https://www.electronjs.org/docs/latest/development/source-code-directory-structure)
  - [ReactJS folder structure](https://create-react-app.dev/docs/folder-structure/)
- [React + TypeScript Best Practices](https://www.sitepoint.com/react-with-typescript-best-practices/)
- [Update Guide for ReactJS 18](https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis)
- [📖 Electron + Create React Example Project](https://github.com/johndyer24/electron-cra-example)
- [🔥 Building a production ElectronJS + ReactJS Project](https://medium.com/@johndyer24/building-a-production-electron-create-react-app-application-with-shared-code-using-electron-builder-c1f70f0e2649)
- _This project doesn't build with Webpack, but incase you're curious:
  - [Bundling Using Webpack](https://www.pluralsight.com/guides/typescript-react-getting-started#module-bundlingusingwebpack)
