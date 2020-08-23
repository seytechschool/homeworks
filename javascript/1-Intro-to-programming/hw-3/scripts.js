// Your JS code is here
var celcius = 35;
var celciusToF = celcius * 9 / 5 + 32;
// used 'option+shift+8' keyboard shortcut degrees symbol
console.log(celcius + '°C is ' + celciusToF + '°F');
var fahrenheit = 95;
var fahrenheitToC =(fahrenheit - 32) *5 /9;
// used `\u00B0` unicode character degrees symbol
console.log(fahrenheit + `\u00B0F`+' is ' + fahrenheitToC + `\u00B0C` );