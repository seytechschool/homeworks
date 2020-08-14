// Your JS code is here
// Reminder: To convert celsius to fahrenheit, multiply by 9, then divide by 5, then add 32. To convert fahrenheit to celsius, deduct 32, then multiply by 5, then divide by 9.

// Unicode Characters: To print the degrees symbol in JavaScript, we need to use the write \u00B0 to represent the unicode character for the degress symbol.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsius = 38;
var convertToFa = celsius * 9 / 5 + 32;
var outputFa = celsius + "°C is " + convertToFa + "°F"
console.log (outputFa)

var fahrenheit = 90;
var convertToCelsius = ((fahrenheit - 32) * 5 / 9).toFixed(1);
var outputCe = fahrenheit + "°F is " + convertToCelsius + "°C"
console.log (outputCe)

// .toFixed(1 or 2 or more) is a method to shorten reminders after a number exmaple: 32.3333 changes to 32.3
