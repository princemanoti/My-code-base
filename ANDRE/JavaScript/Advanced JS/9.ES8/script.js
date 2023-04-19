ES 8 -Released 2017

1.String Padding

.padStart();
.PadEnd();

'Turtle'.padStart(10); 
/*returns turtle with 10 spaces at the start
"          Turtle"*/

'Turtle'.PadEnd(10);
/*returns turtle with 10 spaces at the end
"Turtle          "*/

2. Trailing Commas in Fuction(s) parameter lists and calls
//they make things alot cleaner.

const fun = (a,b,c,d,) => {
	console.log(a);
}

fun(1,2,3,4,);// Logs 1 to the terminal since a = 1;


3. Object.values and Object.entries previously Object.keys


let obj = {
	username0: 'Santa',
	username1: 'Rudolf',
	username2: 'Mr.Grinch'
}

Object.keys(obj).forEach((key,index) => {
	console.log(key, obj[key]);
})
/*username0 Santa
VM197:8 username1 Rudolf
VM197:8 username2 Mr.Grinch*/

Object.values(obj).forEach(value => {
	console.log(value);
})
/*Santa
VM201:2 Rudolf
VM201:2 Mr.Grinch */

Object.entries(obj).forEach(value => {
	console.log(value);
})
/*
prints as an array
VM205:2 (2) ['username0', 'Santa']
VM205:2 (2) ['username1', 'Rudolf']
VM205:2 (2) ['username2', 'Mr.Grinch'] */

Object.entries(obj).map(value => {
	return value[1] + value[0].replace('username', '');
})

4. Async Await===most important concept look another script