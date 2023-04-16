//Advanced Objects


//REFERENCE TYPES
[] === [] //false
[1] === [1] //false

var object1 = { value : 10 };
var object2 = object1;
var object3 = { value : 10 };

function b() {
	let a = 5;
}
console.log(a);
// Reference error(a not defined) since the parent can't access child


//CONTEXT - tells us where we are within the object

console.log(this);
VM395:1 Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}
this.alert("jack") or window.alert("jack");

function a(){
	console.log(this);
}
a();
//consoles to the log Window

const object4 = {
	a:function(){
		console.log(this);
	}
}
object4.a();
//Consoles to the log {a: f} // a:f()


//INSTANTIATION-  creating multiple copies of an object
//Syntax

class Player { /*player Object*/
	constructor(name,type) {
		console.log(this);
		this.name = name;
		this.type = type;
	}
	introduce() { /*method*/
		console.log(`Hi I am ${this.name}, I am a ${this.type}`);
	}
}

class Wizard extends Player {
	/*adds on top of what the player has*/
	constructor(name,type) {
		super(name,type)/*We call the constructor of the 
		player class so that the Wizard player can access 
		properties of the super Player Class*/
	}
	play(){
		console.log(`I am a ${this.type}`);
	}
}

/* The power of this is that we can't constantly be creating
players but instead...look below*/
const wizard1 = new Wizard('Shelly', 'healer');
const wizard2 = new Wizard('Shawn', 'Dark Magician');