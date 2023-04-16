function moveCommand(direction) {
	var whatHappens;
	switch (direction) {
	case "forward":
		whatHapppens = "you encouter a monster";
		break;
	case "back":
		whatHapppens = "you arrived home";
		break;
	case "right":
		whatHapppens = "you found a river";
		break;
	case "left":
		whatHapppens = "you run into a troll";
		break;
	default:
		whatHapppens = "please enter a valid direction"
	}
	return whatHappens;
}
//Ecma script====letConst