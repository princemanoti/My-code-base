//Advanced Arrays

const array = [1, 2, 10, 16];

const double = []
// forEach just iterates over the elements only
const newArray = array.forEach((num) => {
	//returns undefined...alot of sideeffects...we can console.log , create
	//a new array named double and also push to the new array double.
	//this is what we were trying to avoid in the prevoius chapter.
	double.push(num * 2);
})

//Map, Filter, Reduce
//MAP - loops over all elements in array and return a new array
const mapArrray = array.map(num => num * 2);

console.log('map', mapArrray);

//FILTER -returning a value(s) given a condition
const filterArray = array.filter(num => num > 5/*condition*/);

console.log('filter', filterArray);

//REDUCE - this one can do both filter and map
const reduceArray1 = array.reduce((accumulator /*or acc*/ , num) => {
/*accumulator is something that can store information that happens
 in the body of a function*/	
return accumulator + num; 
//i.e lets say acc = 3 then the reduceArray1 =29
}, 0 /*acc*/);


const reduceArray = array.reduce((accumulator , num) => accumulator + num,3)

console.log('reduce', reduceArray);

//Advanced Objects