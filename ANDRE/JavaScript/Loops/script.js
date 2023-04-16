var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study JavaScript",
	"eat healthy"
];

console.log(todos);

todos.forEach(function(todo,j){
	console.log(todo,j);
});

//alternatively
function logTodos(todo,j) {
	console.log(todo,j);
	}
todos.forEach(logTodos);

//todosLength= todos.length;
for (var j=0; j< todos.length; j++) {
	todos[j] = (todos[j] + "!");
	//todos.pop();
}
console.log(todos)

var todosImportant = todos[j];
console.log(todosImportant);

todos.forEach(logTodos);
todosImportant.forEach(logTodos);

var counterOne =  0;
while (counterOne < 10) {
	console.log(counterOne);
	counterOne++;
}

//alternatively
var counterOne =  10;
while (counterOne > 0) {
	console.log(counterOne);
	counterOne--;
}

// do while
var counterTwo = 10;
do {
	console.log(counterTwo);
	counterTwo--;
}
while(counterTwo > 0);