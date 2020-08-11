// Your JS code is here

var celsius;
var fahrenheit;
var temp;
var cToF;
var fToC;
var unicode= "\u00B0";
var fahrenheitSymbol = "F";
var celsiusSymbol = "C";

function enterCelsius(celsius){
temp = celsius;
cToF = temp * 9 / 5 + 32;
console.log()
console.log(`${celsius}${unicode}${celsiusSymbol} is ${cToF}${unicode}${fahrenheitSymbol}`);
}

function enterFahrenheit(fahrenheit){
temp = fahrenheit;
fToC = (temp - 32) * 5 / 9;
console.log(`${fahrenheit}${unicode}${fahrenheitSymbol} is ${fToC}${unicode}${celsiusSymbol}`);
}

// random numbers from 1 -10
enterCelsius(Math.floor((Math.random() * 10) + 1));
enterFahrenheit(Math.floor((Math.random() * 10) + 1));
