// Degrees in Kelvin
const kelvin = 293;
//Degrees in celcius
const celcius = (kelvin - 273);
//Degrees in fahrenheit
let fahrenheit = celcius * (9/5) + 32;
//changing degrees in fahrenheit to a whole number
fahrenheit = Math.floor(fahrenheit);
console.log(`the temperature is &{fahrenheit} degrees Fahreinheit.`);