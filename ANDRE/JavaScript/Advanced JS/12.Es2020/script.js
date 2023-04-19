ES2020
// BigInt
// Nullish Coalescing OPerator ??
// Optional Chaining Operator ?.
// Promise.allSettled
//globalThis

1. BigInt
//typeof bigInt
Number.MAX_SAFE_INTEGER //9007199254740991

2. Optional Chaining Operator ?.

let will_pokemon = {
	pikachu: {
		species: 'Mouse Pokemon',
		height: 0.4,
		weight: 6
	}
}

let weight = will_pokemon.pikachu.weight;
console.log(weight) // 6


let andrei_pokemon = {
	raichu: {
		species: 'Mouse Pokemon',
		height: 0.8,
		weight: 30,
		power: 0
	}
}

let weight2 = andrei_pokemon.raichu.weight;
console.log(weight2) // 30

2. Optional Chaining Operator ?.

let weight3 = andrei_pokemon?.raichu?.weight
console.log(weight3); //30

let power = andrei_pokemon?.raichu?.power || 'no power'
console.log(power); 
// no power since the power object evaluates to falsy

3.Nullish Coalescing OPerator ??

let power = andrei_pokemon?.raichu?.power ?? 'no power'
console.log(power); // returns 0
// no power since the po