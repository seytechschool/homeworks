// Your JS code is here
var celsius = 41;
var fahrenheit = ((celsius * 9) / 5 + 32).toFixed();
var degreeIcon = `\u00B0`;
console.log(celsius + degreeIcon + "C is " + fahrenheit + degreeIcon + "F");

var fahrenheit1 = 98;
var celsius1 = (((fahrenheit1 - 32) * 5) / 9).toFixed();
console.log(fahrenheit1 + degreeIcon + "F is " + celsius1 + degreeIcon + "C");
