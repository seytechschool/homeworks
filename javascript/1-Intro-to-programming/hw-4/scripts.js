// Your JS code is here
// Your JS code is here
// Convert Celsius temperatures to Fahrenheit
var celsius = Math.floor(Math.random()*101); // Random temperatures between 0-100 degrees in celsius
var fahrenheit = (celsius * 9 / 5) + 32;

console.log(celsius + ' degrees in celsius is equal to ' + fahrenheit.toFixed(0) + ' degrees in fahrenheit');


// Convert Fahrenheit temperatures to Celsius
var fahrenheit = Math.floor(Math.random()*101); // Random temperatures between 0-100 degrees in fahrenheit

var celsius = (fahrenheit - 32) * 5 / 9;

console.log(fahrenheit + ' degrees in fahrenheit is equal to ' + celsius.toFixed(0) + ' degrees in celsius');
