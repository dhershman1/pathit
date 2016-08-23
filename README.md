## Info
Takes a string path and builds files that do not exist along that path.

## How To
To use pathit simply require it and use it as a function

```js
const pathit = require('pathit');
pathit('my/path/system');
```

Useful with a build system to easily create paths that do not exist yet for production files.