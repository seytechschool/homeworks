// fortune
var children = 4;
var partner = "Kyrgyz kyz:)";
var geolocation = "San-Francisco";
var job = "Web Developer";
var final = "You will be a "+ job +" in "+ geolocation +", and married to "+ partner +" with "+ children +" kids.";
console.log (final);

//Age calculator
var birth = 1987;
var current = 2020;
var age = current - birth;
console.log ('You are ' + age + ' old');

//Converter 
var celsius = 37;
var fahrenheit = (celsius*9)/5+32;
console.log (celsius + '\u00B0 Celsuis is ' + fahrenheit + '\u00B0 Fahrenheit.');

var fahrenheit = 92;
var celsius = (fahrenheit-32)/9*5;
console.log (fahrenheit + '\u00B0 Fahrenheit is ' + celsius + '\u00B0 Celsius.');

//Math random
var fahrenheit = Math.random()*100;
var celsius = (fahrenheit-32)/9*5;
console.log ("It is " + fahrenheit.toFixed() + "\u00B0 Fahrenheit today. That's " + celsius.toFixed() + "\u00B0 Cesius.");
