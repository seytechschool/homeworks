// Your JS code is here



/*
3. The Temperature Converter
Let's make a program to convert celsius tempatures to fahrenheit and vice versa, so we can complain about the weather with our friends oversees.

Reminder: To convert celsius to fahrenheit, multiply by 9, then divide by 5, then add 32. To convert fahrenheit to celsius, deduct 32, then multiply by 5, then divide by 9.

Unicode Characters: To print the degrees symbol in JavaScript, we need to use the write \u00B0 to represent the unicode character for the degress symbol.

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
*/


// Celsius to fahrenheit
var temCelsius = 30;
var celToFah = ((temCelsius * 9) / 5) + 32;

console.log(temCelsius + "\u00B0C is " + celToFah + "\u00B0F");

// Fahrenheit to celsius
var temFah = 96;
var fahToCel = ((temFah - 32) * 5) / 9; 

console.log(temFah + "\u00B0F is " + fahToCel + "\u00B0C");