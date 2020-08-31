// Your JS code is here
var random = Math.random() * 10;

var f = (random*9)/5+32;
var c = (f-32)*5/9;

var fahrenheit = f.toFixed();
var celsius = c.toFixed();

console.log('it is ' + fahrenheit + '\u0B00 F today and that is ' + celsius + '\u0B00 C');
