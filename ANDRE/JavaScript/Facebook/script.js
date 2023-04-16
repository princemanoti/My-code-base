var database =[
{
	username: "prince",
	password: "secretme"
},
{
	username: "John",
	password: "123"
},
{
	username: "Liam",
	password: "456"
}
];

var newsFeed = [
{
	username: "Bob",
	timeline: "so tired from all that learning!"
},
{
	username: "Janet",
	timeline: " javascript is so cool"
},
{
	username: "Mike",
	timeline: " I am so excited about today"
}
];

function isUserValid(username,password) {
	for (var i=0; i < database.length; i++) {
	  if (username === database[i].username && 
	   password === database[i].password) {
		return true;
		}
	}
	return false;
}

function signIn(username, password){
	if (isUserValid(username,password)) {
		console.log(newsFeed);
		}else{
			alert("Sorry, wrong username and password");
		}
	}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("Enter your password!");

signIn(userNamePrompt, passwordPrompt);
