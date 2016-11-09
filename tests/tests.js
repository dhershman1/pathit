'use strict';

const expect = require('chai').expect;
const pathit = require('../lib/index.js');
const fs = require('fs');

describe('Creating a file based on string', function() {
	it('should create a simple path', function(done) {
		pathit(['./tests/testpath'])
			.then(function() {
				fs.readdir('./tests/testpath', (err, files) => {
					if (err) done(err);
					expect(files).to.be.ok;
					done();
				});
			});
	});
	it('should create a subfolder 1', function(done) {
		pathit(['./tests/testpath/new-path-1'])
			.then(function() {
				fs.readdir('./tests/testpath', (err, files) => {
					if (err) done(err);
					expect(files.length).to.equal(1);
					done();
				});
			});
	});
	it('should create a 2nd subfolder', function(done) {
		pathit(['./tests/testpath/path_2'])
			.then(function() {
				fs.readdir('./tests/testpath', (err, files) => {
					if (err) done(err);
					expect(files.length).to.equal(2);
					done();
				});
			});
	});
	it('should create a whole branch', function(done) {
		pathit(['./tests/testpath/path_3/sub_path'])
			.then(function() {
				fs.readdir('./tests/testpath/path_3', (err, files) => {
					if (err) done(err);
					expect(files.length).to.equal(1);
					done();
				});
			});
	});
});

describe('Handling multiple paths in an array', function() {
	it('Should create multiple paths', function(done) {
		pathit(['./tests/multi_path_test', './tests/multi_path_test/path_1', './tests/multi_path_test/path_2', './tests/multi_path_test/path_3'])
			.then(function() {
				fs.readdir('./tests/testpath', (err, files) => {
					if (err) done(err);
					expect(files).to.be.ok;
					done();
				});
			}).catch(function(err) {
				console.log(err);
			});
	});
});
