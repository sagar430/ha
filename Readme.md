# commonjs-testutils

End to End BDD Testing package 

- [`Integration Steps`](#Integration-Steps)
- [`Getting Started`](#Getting-Started)
- [`Debugging`](#Debugging)
- [`Capabilities`](#Capabilities)
- [`Running the Tests against Saucelab`](#Running-the-Tests-against-Saucelab)
- [`Grouping Test Specs`](#Grouping-Test-Specs)


## Integration Steps
* Add the following property to your .npmrc file
`chromedriver_skip_install=true`

* `npm install --save-dev  common-js-test-utils`

As a post install step, a folder called **e2e-test** gets created at the root of the consuming application. A config file **e2eTest.config.js** along with folders for feature, stepDefinitions, pageContents, pageObjects and reports, get created inside the e2e-test folder. All the application specififc BDD testing configurtation properties need to be added to the config file. For now, you can just leave the defaults. We will be enhancing the file as needed.

Here is a sample config file:

```
const path = require('path')
const root = path.resolve(__dirname)

const featurePaths = [path.join(root, './features/**/**/*.feature')]

const stepDefinitionPaths = [
    path.join(root, './step_definition/**/*.steps.js')
]

const reportsPath = path.join(root, './reports')

module.exports = {
    features: featurePaths,
    stepDefinitions: stepDefinitionPaths,
    reportsPath: reportsPath,
}
```

Here is a list of options that can be set:
- `features` - glob with the feature file paths
- `stepDefinitions` - glob with the step definition file paths
- `reportsPath` -  destination path for the report files
- `projectName` -  
- `applicationName` -  
- `applicationVersion` -  
- `targetedPlatform` - targeted platform for test execution. - WindowsChrome, WindowsFirefox
- `waitForTimeout` -  default timeout for all waitFor* commands in milliseconds, default is 60000
- `stepDefinitionTimeout` - timeout for step definitions in milliseconds, default is 120000


## Getting Started

### BDD files
Add all your BDD files, `features`, `step definitions`, `page objects`... to your application. For the default configuration settings to work, the files need to be added at the root inside an `e2e-test` folder. The folder structure should be either of the two:

**Folder structure for projects with one application**
```
├── e2e-test
│     │─features
│     │─pageObjects
│     │─pageContents
│     │─...
│     │─stepDefinitions
```

### NPM scripts
Add the following scripts to the consuming applications package.json file:
- `"wdio": "wdio run wdio.conf.js"`

### Execute the Tests

***For Mac users***

Open a new terminal session and Execute `npm run wdio`. 




