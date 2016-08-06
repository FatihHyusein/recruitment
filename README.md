# Recruitment web site

# App Features
- Multiple languages support
- Home
- Contact form
- Areas of activity and brigades info

# Used Technologies
- Angular2
- SASS
- Typescript
- Webpack
- Material design


#### Features
- Inline external HTML templates into typescript component files (optional)
- Inline and autoprefix external SCSS files into typescript component files (optional)
- Inject style tags into `index.html` (optional)
- Inject script tags into `index.html`
- Bundle and minify release builds

# Files structure
- .editorConfig - basic config for editors (don't ignore it when you open the project in your IDE)
- .htaccess - used for default routing for NG2|gzip sent files/requests|cache resources
- deploy.sh - will be used for creating deploy folder from all repos for excitel
- webpack.config.js - configurations for webpack
*src
    - vendor.ts - includes libraries
    - polyfills.ts - includes libraries for supporting old browsers
    - main.ts - includes project files and bootstraps NG2 App
    - index.html - starter point of the app
    * assets - for static content
    * shared - for shared code across different components
    * components - project components


#Build info
- After release build, in dest folder should be created:
    * assets folder
    * .htaccess
    * css file
    * js files: vendor/polyfill/main
    * index.html - includes created css and js files
    * component html files will be included in the js files
    
- After dev build, in dest folder should be created:
    * assets folder
    * .htaccess
    * js files: vendor/polyfill/main
    * index.html - includes created js files
    * css and component html files will be included in the js files

Getting Started
---------------

#### Prerequisites
- `node >=5.12`

#### Quick Start
```shell
$ npm install
$ npm run typings
$ npm run build
$ npm run buildDev
```


Usage
-----

|Script|Description|
|---|---|
|`npm run build`|Lint, test, and build the application to `./dest`|
|`npm run buildDev` | build the application to `./dest` and watch for changes|
|`npm run lint`|Lint `.ts` and `.js` files|
|`npm run lint:js`|Lint `.js` files with eslint|
|`npm run lint:ts`|Lint `.ts` files with tslint|
|`npm run typings`|Install ambient typings|
