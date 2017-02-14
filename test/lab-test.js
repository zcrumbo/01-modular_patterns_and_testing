'use strict';

//mocha testing labels, native test assert module
const greet = require('../lib/greet.js'); //file only includes function 'greet'
const assert = require ('assert'); //no dots or slashes indicate it is a core node module

describe('Function Module', function(){ //1st argument of describe gets displayed in terminal - naming is arbitrary
	describe ('#greet', function(){ //ditto above, but '#' is best practice to identify functions
		it('should throw an error if no parameter is passed', function(){
			assert.throws(function(){ // throws method expects block[, error][, message]
				greet();
			}, 'Error not thrown');
		});
		it('Should return hello Zachary', function(){
			let result=greet('Zachary');
			assert.ok(result === 'hello Zachary', 'not equal to hello Zachary')
		})
	})
})