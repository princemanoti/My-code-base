var button = document.getElementsByTagName('button')[0];


//developer.mozilla.org
button.addEventListener("mouseEnter", function(){
	console.log("Clicked meeeeeeee!");
})




//code refinement
var button1 = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
}

function addListAfterClick(){
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeyPress() {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button1.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeyPress)
	