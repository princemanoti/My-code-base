/*JavaScript is a single threaded language that can be 
non-blocking Memory Heap-This is where memory allocation 
happens Call Stack -This is where your code is read and 
executed tells where one is in the program.*/


//memory allocation
const a = 1;
const b = 10;
const c = 100;
//memory leak happens where there is unused memory.


//call stack
console.log('1');
console.log('2');
console.log('3');

const one = () => {
	const two = () => {
		console.log('4');
	}
	two();
}


//this is what happens in the call stack start from bottom to top
console.log('4')
two()
one()
//call stack/..first in first out.

/*JavaScript is a single threaded language that can be 
non-blocking meaning that it has only one call stack and
does one thing at a time...first in first out.*/

/* it is a synchronous language in that execution happens 
line by line starting from the first line to the last
..waits until one finishes before going to next */

//when stack overflow happens
//Recursion....a function calls itself over and over
function foo() {
	foo()
}
foo()
// the maximum stack is exceeded creating a stack overflow


ASYNCHRONOUS PROGRAMMING
/*There is a need for asynchronous programing in JavaScript
if some line is so huge to load then we can use ASYNCHRONOUS
PROGRAMMING*/

//SetTimeout is used in asynchronous programming.

console.log('1');
setTimeout(() => {
	console.log('2');
},2000)
console.log('3');

//1 and 3 are logged first but after 2 seconds 2 is logged.

/*JavaScript Run-Time Environment consists of:
1.Memory heap and call stack
2. Web APIs -DOM(Document)
			-AJAX(XML HttpRequest)
			-Timeout(setTimeout)
3.CallBack Queue
		-onClick
		-onLoad
		-onDone
4. Event Loop