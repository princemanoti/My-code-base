//condition ? expr1 : expr2; - ternaryExpression
function isUserValid(bool) {
	return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";

var automatedAnswer = 
"Your account # is " + (isUserValid(false) ? "1234" : "not available");

//alternatively
function condition() {
	if (isUserValid(true)) {
		return "You may enter";
	}else
	return "Access Denied!"
}
var answer2 = condition();

//Switch statement