'use strict';

//process.argv stores command line parameters as array
//https://nodejs.org/dist/latest-v6.x/docs/api/process.html#process_process_argv
//this lib file is a testing ground - not meant for use in production

let len = process.argv.length;
//console.log(process.argv[2])
if (len>2) {
	for (let i = 2; i < len; i++) {
		let greet = require('../lib/greet.js');
		let name = process.argv[i];
		console.log(greet(name));
	}
};
