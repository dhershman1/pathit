[![build-status](https://pipelines-badges-service.useast.staging.atlassian.io/badge/atlassian/confluence-web-components.svg)](https://bitbucket.org/atlassian/pathit/addon/pipelines/home)

## Info
Takes a string path and builds files that do not exist along that path.

## How To

Install pathit with npm
```
npm i pathit
```

Run pathit tests using npm test
```
npm test
```

To use pathit simply require it and use it as a function

```js
const pathit = require('pathit');
pathit('my/path/system', callback);
```

Useful with a build system to easily create paths that do not exist yet for production files.