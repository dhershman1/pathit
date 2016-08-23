const fs = require('fs');
const path = require('path');

//Fun little function that will recursively read a path given to it
//which then builds all the folders needed to meet that path
function pathit(dirPath, cb) {
	fs.mkdir(dirPath, (err) => {
		//If the dir path fails lets build all the stuff we need
		if (err && err.errno === -4058) {
			//Create all our parents recursively
			pathit(path.dirname(dirPath), cb);
			//And then our directory
			pathit(dirPath, cb);
		} else if (err && err.errno !== -4058 && err.errno !== -4075) {
			return console.error(err);
		}
		cb && cb(err);
	});
}

module.exports = pathit;