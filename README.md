[![build-status](https://pipelines-badges-service.useast.staging.atlassian.io/badge/atlassian/confluence-web-components.svg)](https://bitbucket.org/atlassian/pathit/addon/pipelines/home)

## Info
Takes a string path and builds files that do not exist along that path.

## How To

Install pathit with npm
```
npm i pathit
```

Run pathit tests using npm test this also allows you to see it in action as it will generate a test folder structure.
Make sure you either do an npm i inside pathit or install mocha and chai before hand since the tests require these modules.
```
npm test
```

To use pathit simply require it and use it as a function with an array of paths.

The function call will return a `promise` back.

```js
const pathit = require('pathit');
pathit(['my/path/system']);
```

it now supports multiple paths so you can easily create branching filesystems.
```js
const pathit = require('pathit');
pathit(['my/path/system', 'path/to/wherever', 'path/3/wherever']);
```

Useful with a build system to easily create paths that do not exist yet for production files.