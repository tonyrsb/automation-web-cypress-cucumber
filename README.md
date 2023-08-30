
![cypress](https://img.shields.io/badge/AT--WEBUI-Cypress-yellow.svg) ![coverage](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)
# automation-web-cypress-cucumber

### Prerequisites:

- Install Node.js and npm
- Install Cypress version 10 above

> Cypress
- Install cypress cucumber preprocessor
- Install browserify-preprocessor dependency

### How to Getting Started:

```sh
$ npm install
```

### This is directory structure

        .
        ├── cypress
        │  ├── downloads
        │  ├── e2e
        │  │    ├── feature
        │  ├── fixtures
        │  ├── pageObjects
        │  ├── screenshots
        │  ├── support
        │  │    ├── step_definitions
        │  ├── screenshots
        │  └── videos
        ├── .env
        └── cypress.config.js
        └── package.json

### Foldering and Naming Convention

1. Filename using `snake_case` *except for the repo name*
2. Variable name using `camelCase`
3. Add your Cucumber file (`.feature`) in to `cypress/e2e/feature` folder
4. Add your Steps file (`.js`) in to `cypress/support/step_definitions` folder
5. The steps file (.js) should be same as feature file (.feature)
6. Declare and hook your `.env` variables to Cypress Config Env (`cypress.config.js`)
7. Add your test data file in to `cypress/fixtures` folder
8. Your result video will be added in to `cypress/videos`
3. Your result screenshots will be added in to `cypress/screenshots`

## Run the test

You can specify the command that you want to run from package.json file.


###### Here are our default commands:

```sh
$ npm install
```

```sh
$ npm run cypress
```

###### Here are our other commands:

```sh
$ npm run cypress -- -e TAGS=''                     | to run all tests
$ npm run cypress -- -e TAGS='@tagNameScenario'     | to run test with specific tag / specific repo
$ npm run cypress -- -e TAGS='not @skip'            | to exclude @skip tag
$ npm run cypress -- -e TAGS='' --browser chrome    | to run all tests with launch browser
```

# Let's make TRUSTED and IMPACTFUL tests!
