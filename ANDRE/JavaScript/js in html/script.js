//use of functions
//function declaration

function sayHello(){
	console.log("Hello");
}

sayHello();

/*anonymous function*/
var sayBye = function() {
	console.log("Bye");
}

sayBye();

//using an argument
function sing(song) {
	console.log(song);
}

sing("Geoffry barkimye ninyon tumbolala");
sing("sinyon kabisanga");

function multiply(a,b) {
	console.log(a * b);
}

multiply(5,10)/*arguments*/;

//alternatively for immediate above
function times(a,b)/*parameters*/ {
	return(a * b);
}

alert(times(5,10));


//intro
4 + 3;

if ( 4+3 ===7 ) {
	alert("You are smart!");
}

/*DATA STRUCTURES*/
/*1. Arrays*/
var list =["tiger","cat","bear", "bird"];    /*ALWAYS REFERENCE W3C SCHOOLS*/
console.log(list[2]);


/*Array within another array*/
var list2 = [
	["tiger","cat","bear", "bird"]
	];
console.log(list2[0][2])

console.log(list);

/*2. Methods*/

list.shift();
console.log(list);

list.pop();
console.log(list);

list.push("elephant");
console.log(list);

var list3 =list.concat(["bee", "cow"]);
console.log(list3); 

/*3. Objects*/
var user = {
	name: "John",
	age:34,
	hobby: "soccer",
	isMarried: false,
	//list inside the object
	spells: ["abrakadra", "shazam", "boom"],
	//method - a function inside an object is a method
	shout: function(){
		console.log("aaaaaaaaah");
	}
};

//objects inside an array
var list4 = [
{
	username: "jack",
	password: "secret"
},
{
	username: "jane",
	password: "123"
}
];

//accessing them
console.log(user.spells)
console.log(list4[0].password)
console.log(list4[1].username)
