'use strict';

//const greet = require('./lib/greet.js'); 
//function in file is called 'greet' - code below works with any name, however
//console.log(greet('Zachary'));

//process.argv stores command line parameters as array
//https://nodejs.org/dist/latest-v6.x/docs/api/process.html#process_process_argv

let len = process.argv.length;
let greet = require('./lib/greet.js');
if (len<=2)	return greet(); //throws error if no string is passed

for (let i = 2; i < len; i++) {
	let name = process.argv[i];
	console.log(greet(name));
};