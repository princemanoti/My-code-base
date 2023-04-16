//ARROW FUNCTIONS
 function add (a, b) {
 	return a + b;
 }

 //we can use the arrow functions as follows
 const add = (a, b) => a + b;
 //alternatively
 const add2 = (a, b) => {
 	return a + b;
 }



 
//Closures
const first = () => {
	const greet = 'Hi';
	const second = () => {
		alert(greet);
		const name = "Bobby";
	}
	return second;
}

const newFunc = first();
newFunc();

//CLOSURES - a function ran, the function executed.
//it's never going to run again. 
//but it's going to remember that there are references to those
//variables so the child scope always has access to the parentScope.
//Child scope always has access to the parent scope but 
//the parent scope has no acces to the child scope
//i.e in example above the Child greet iin second() has access 
//to the parent greet in the First() 
//but the variable name cannot be accessed by the first()function
//it can only be used by second() function

//CURRYING - The process of converting a function that has 
//multiple arguments into a function that takes them one at a time.

const multiply = (a,b) => a * b;

const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(9);

const multiplyBy5 = curriedMultiply(5);
multiplyBy5(10);

//COMPOSE - the act of putting two functions together to form a third
//function where the output of one function is the input of another.

const compose = (f,g) => (a) => f(g(a));

const sum = (num) => num + 1;
compose(sum, sum)(5);

//Avoiding side effects and functional purity
var a = 1;
function b() {
	a = 2;//side effects ...we make sure that we always return something
	//avoid returning undefined values
	//By avoiding side effects and always returning a value we create a
	//deterministic code... no matter what inputs are passed into a 
	//function the return value will always be the same thus we always 
	//avoid bugs...thus making you a top developer
}