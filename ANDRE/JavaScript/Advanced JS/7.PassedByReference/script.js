//variables are passed by value
//objects are passed by reference
var a = 5;
var b = a;
//b references to the value a -it copies what's in a

/*a has the address of where the primitive value 5 sits in 
memory also b has address where 5 sits*/
b++;// incremented by 1

console.log(a);
console.log(b);
/* passed by value, the value of b is incremented but the 
value of a isn't changed*/

let obj1 = {name:'Yao', password:'123'};
let obj2 = obj1;

obj2.password = 'easypeasy';


console.log(obj1);
console.log(obj2);

console.log(obj1.password);
console.log(obj2.password);

/*obj passwords are changed to 'easypeasy' for both obj1 and
 obj2 --this is because objects are passed by reference.
 obj1 and obj2 points to the same storage space in  memory*/


var c = [1,2,3,4,5];
var d = c;
d.push(43241152);
console.log(d)//[1, 2, 3, 4, 5, 43241152]
console.log(c)//[1, 2, 3, 4, 5, 43241152]

//to avoid modifying the array we can
//1.
var c = [1,2,3,4,5];
var d = [].concat(c);
d.push(43241152);
console.log(d)//[1, 2, 3, 4, 5, 43241152]
console.log(c)

//2.Shallow cloning
let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj);
let clone2 = {...obj};
//new feature in Javascript used instead of line 50

obj.c = 5;
console.log(obj); //{a: 'a', b: 'b', c: 5}
console.log(clone); //{a: 'a', b: 'b', c: 'c'}
console.log(clone2); //{a: 'a', b: 'b', c: 'c'}
//the object isn't affected it just changes c to 5 


//3.Shallow Cloning 2
let obj = {a: 'a',
 	b: 'b', 
 	c: {
 		deep: "try and clone me"
 	}
 };
let clone = Object.assign({}, obj);
let clone2 = {...obj};////new feature in Javascript used instead of line 67

//shallow cloning
obj.c.deep = 'hahaha';

console.log(obj);// {a: "a",b: "b",c: {deep: 'hahaha'}}
console.log(clone); // {a: "a",b: "b",c: {deep: 'hahaha'}}
console.log(clone2); //{a: "a",b: "b",c: {deep: 'hahaha'}}


//the need for a deep clone.
let obj = {a: 'a',
    b: 'b', 
    c: {
        deep: "try and clone me"
    }
 };
let clone = Object.assign({}, obj);
let clone2 = {...obj};////new feature in Javascript used instead of line 87


//deep cloning
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = 'hahaha';
console.log(obj);//{a: "a",b: "b",c: {deep: 'hahaha'}}
console.log(clone); //{a: "a",b: "b",c: {deep: 'hahaha'}}
console.log(clone2); //{a: "a",b: "b",c: {deep: 'hahaha'}}
console.log(superClone);//{a: "a",b: "b",c: {deep: 'try and clone me'}}
// superClone clones the entire reference.
//carefulness though is required when using deep cloning.