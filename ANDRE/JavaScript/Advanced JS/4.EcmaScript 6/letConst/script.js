//let + const
const player = "Bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
	let wizardLevel = true;
	console.log('inside', wizardLevel);
}

console.log('outside', wizardLevel);

//const cannot be updated while let can be changed
//we can reassign a let variable but we cannot reassign a const variable.

const obj = {
	player: "Bobby",
	experience: 100,
	wizardLevel: false
}

//in above we cannot reassign the obj 
//variable but we can change the obj property
//i.e obj.wizardLevel = true;

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

//DESTRUCTURING
const { player, experience} = obj
let wizardLevel = obj;
// this means that both the  player 
//and experience belong to the obj object.

//object PROPERTIES
const a = "Simon";
const b = true;
const c = {};

const obj = {
	a,
	b,
	c
}

//Template strings
const greeting = 
"Hello" + name + "you seem to be doing " + "greeting" + "!"

// the above example of a greeting variable is tedious thus:
const name = "Sally";
const age = 34;
const pet = "Dog";

 const greetingBest = 
 `Hello I am ${name} aged ${age-5} and my favorite pet is a ${pet}.`;

 //alternatively
 function greet(name = 'Sally', age = 34, pet = "Dog"){
 	return 
	`Hello I am ${name} aged ${age-5} and my favorite pet is a ${pet}.`;
 }

 //SYMBOL TYPE
 let sym1 = Symbol();
 let sym2 = Symbol(foo);
 let sym3 = Symbol(foo);
 //they create unique types and one symbol cannot be like the other symbol
 //for above Sym2 !== sym3;

 //Arrow Functions