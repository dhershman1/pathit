[![build-status](https://pipelines-badges-service.useast.staging.atlassian.io/badge/atlassian/confluence-web-components.svg)](https://bitbucket.org/dhershman/pathit/addon/pipelines/home)

## Info
Takes an array of strings and builds files that do not exist along those paths.

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

The function call will return a `promise` back. The promise if resolved won't return any arguments, but if a `reject` occurs then it will return an error argument to the `.catch()`

```js
const pathit = require('pathit');
pathit(['my/path/system']).then(handler).catch(err);

//or

pathit(['my/path/system'])
.then(() => {
	//do stuff
})
.catch(err => {
	//do stuff
});
```

it now supports multiple paths so you can easily create branching filesystems.
```js
const pathit = require('pathit');
pathit(['my/path/system', 'path/to/wherever', 'path/3/wherever']).then(handler).catch(err);

//or

pathit(['my/path/system', 'path/to/wherever', 'path/3/wherever'])
.then(() => {

})
.catch(err => {

})
```