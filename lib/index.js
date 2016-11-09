'use strict';

const fs = require('fs');
const path = require('path');

//Fun little function that will recursively read a path given to it
//which then builds all the folders needed to meet that path
function pathit(dirPath, cb) {
	let promises = [];
	let i = 0;
	let len = dirPath.length;
	for (i; i < len; i++) {
		promises.push(runPath(dirPath[i]));
	}
	Promise.all(promises).then(cb);
}

function buildParents(parents) {
	return new Promise((resolve, reject) => {
		fs.mkdir(parents, (err) => {
			if (err && err.errno === -4058) {
				buildParents(path.dirname(parents));
			} else if (err && err.errno !== -4058 && err.errno !== -4075) {
				return reject(err);
			}
		});
		resolve();
	});
}

function buildDir(dirPath) {
	return new Promise((resolve, reject) => {
		fs.mkdir(dirPath, (err) => {
			if (err && err.errno !== -4058 && err.errno !== -4075) reject(err);
			resolve();
		});
	});
}

function runPath(dirPath) {
	//Create all our parents recursively
	return new Promise((resolve, reject) => {
		buildParents(path.dirname(dirPath))
			//And then our directory
			.then(function() {
				buildDir(dirPath);
				resolve();
			})
			.catch(function(err) {
				reject(err);
			});
	});
}

module.exports = pathit;
