const basket = ['apples', 'grapes','oranges'];

//1
for (let i=0;i < basket.length; i++) {
	console.log(basket[i]);
}

//2
basket.forEach(item => {
	console.log(item);
})

1. for of //doesn't work in objects
//iterating - arrays, strings
for (item of basket) {
	console.log(item);//apples, grapes, oranges
}

for (item of 'bask') {
	console.log(item);// b,a,s,k
}

2. for in -- allows us to see object properties
//enumerating- objects
const basket = ['apples', 'grapes','oranges'];
const detailedBasket = { //non iterable
	apples: 5,
	grapes: 1000,
	oranges: 10
}

for (item in detailedBasket) {
	console.log(item); //apples, grapes, oranges
}