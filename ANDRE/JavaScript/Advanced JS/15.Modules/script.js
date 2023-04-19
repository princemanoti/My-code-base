//Climbing mountain of Modules
1. Inline Script
// this where JavaScript is mixed with HTML
2. Script tags
// This is where reference to the JavaScript file is added to HTML
3. IIFE- Immediately invoked function Execution
//js1 file
var myApp = {};

//js2
(function(){
	myApp.add = function(a,b){
		return a + b;
	}
})(/*This empty bracket means run the function*/);
	/*  the global namespace is 1 and the problem is dependency
	resolution where the order of files is important
	in above js2 is dependent on js1*/
4. Browserify
......CommonJS + Browserify........
//js1
module.exports = function add(a,b){
	return a+b;
}

//js2
var add = acquire("./add");//assuming js1 file is add.js
/* Before puttng a website online all the syntax is 
read through and bundled up into a single file bundle.js*/

---------Es6 + WebPack2--------------
//js1
export const add = (a,b) => a + b;
or 
export default function add(){
	return a + b;
}
//js2
import {add} from './add';
or 
import add from './add';