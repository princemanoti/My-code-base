//1 .scope - variable access

//Root Scope(window)
var fun = 5;

function funFunction() {
	//child Scope
	var fun = "helooo";
	console.log(1, fun);
}

function funerFunction() {
	//child scope
	var fun = "Byeee";
	console.log(2, fun);
}

function funestFunction(){
	//child scope
	fun = "AHHHHHHHH";
	console.log(3, fun);
}
console.log("window", fun);
funFunction();
funerFunction();
funestFunction();

//TernaryOPerator