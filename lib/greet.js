'use strict';

//console.log(`module.exports = ${module.exports}`)
//single function export syntax - details on node modules object here: https://nodejs.org/api/modules.html#modules_the_module_object
module.exports = function greet(name){
	if (arguments.length === 0) throw new Error('No name provided');
	return (`hello ${name}`);
};