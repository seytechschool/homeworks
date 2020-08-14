// Your JS code is here

var celsius = 15;
var fahrenheit = 20; 
var celsiusToFahrenheit = celsius * 9 / 5 + 32;

var fahrenheitToCelsius = (fahrenheit - 32) * 5 / 9;

console.log(celsius + '\u00B0C' + ' is ' + celsiusToFahrenheit.toFixed(2) + '\u00B0F');

console.log(fahrenheit + '\u00B0F' + ' is ' + fahrenheitToCelsius.toFixed(2) + '\u00B0C');