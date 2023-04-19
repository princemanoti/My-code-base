1 == '1'
/*returns true..the string is converted into a number..
type coercion is the changing of a certain 
type to a reqired one*/
1 === '1'
/*returns false this tells the engine not to coerce the values*/
if (1) {
	console.log(5);
}
/* 1 is coerced to true thus printing 5 to the console 
if it was 0 then it is coerced to false*/

//check this in Js Comparison Table website

-0 === +0 //returns true although they are different
Object.is(-0,+0);// returns false 
Object.is(NaN, NaN); //returns true