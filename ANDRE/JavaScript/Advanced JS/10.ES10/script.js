ES 10 -Released 2019 latest

1. .flat() --used to clean data

const array = [1,2,3,4,5];
array.flat();
// Returns the exact same array (5) [1, 2, 3, 4, 5]

const array2 = [1,[2,3],[4,5]]; //nested array
array2.flat(); 
// removes the nest and returns (5) [1, 2, 3, 4, 5]

const array3 = [1,2,[3,4,[5]]] //5 is nested more deeper
array3.flat();
/*returns (5) [1, 2, 3, 4, Array(1)] --Array(0)
where Array(1) is [5] */


default flat is 1 but we can change
const array3 = [1,2,[3,4,[5]]] //5 is nested more deeper
array3.flat(2);
//flat(2) completely unnest the array (5) [1, 2, 3, 4, 5]

const entries = ['Bob','Sally',,,,,,'Cindy'];
entries.flat();
//Returns (3) ['Bob', 'Sally', 'Cindy']

2. flatMap()

3. trimStart and trimEnd
const userEmail = '                  eddytheeagle@gmail.com';
const userEmail2 = 'jonnydanger@gmail.com                 ';

console.log(userEmail.trimStart());//eddytheeagle@gmail.com
console.log(userEmail2.trimEnd()); //jonnydanger@gmail.com

4. fromEntries - changes an array to Object BUT 
in ES8 entries returned an array.

userProfiles = [['commanderTom', 23], ['derekZalneggd', 40]];

Object.fromEntries(userProfiles);
//Returns an object with a key of username and value age

5. Try...catch block
//try a piece of code and catch an error if there

try {
	Bob + 'hi'
}
catch(error){
	console.log('you messed up' + error)
}
//you messed upReferenceError: Bob is not defined