// Your JS code is here
var random = Math.floor(Math.random()*101);
var degreeIcon = '\u00B0';
var farenheit = random;
var farenheitToCelsius = ((farenheit - 32) * 5 / 9).toFixed(0);

console.log('It is ' + farenheit + degreeIcon + 'F today. That"s '  + farenheitToCelsius + degreeIcon + 'C');
