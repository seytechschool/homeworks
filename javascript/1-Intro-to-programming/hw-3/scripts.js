// Your JS code is here
var celsius = 24;
var celsiusToFarenheit = (celsius * 9 / 5 + 32).toFixed(0);
var degreeIcon = '\u00B0';
console.log(celsius + degreeIcon + 'C is ' + celsiusToFarenheit + degreeIcon + 'F');

var farenheit = 81;
var farenheitToCelsius = ((farenheit - 32) * 5 / 9).toFixed(0);
console.log(farenheit + degreeIcon + 'F is ' + farenheitToCelsius + degreeIcon + 'C');
