// Your JS code is here

var celsius = Math.floor(Math.random() * 101); 
var celsius_to_fahrenheit = ((celsius * 9) / 5) + 32;
var degreeIcon = `\u00B0`
console.log(celsius + degreeIcon + 'C' + ' ' + 'is now' + ' '+celsius_to_fahrenheit + degreeIcon + 'F');


var fahrenheit = Math.floor(Math.random() * 101); 
var fahrenheit_to_cecelsius = ((fahrenheit - 32) * 5) / 9;
var degreeIcon = `\u00B0`
console.log(fahrenheit + degreeIcon + 'F' + ' ' + 'is now' + ' '+fahrenheit_to_cecelsius + degreeIcon + 'C'); 