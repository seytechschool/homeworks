// Your JS code is here



/**
 * Challenge Question: Using Math functions
JavaScript has a built-in tool that can generate a random number between 0 and 1. This tool is called a method. We'll talk about methods more later in the class. For now, know if you type Math.random(), you'll get a random number between 0 and 1.

Using this tool, update your fahrenheit to celsius tempature conversion program to do the following:

Instead of inputing a value for the Fahrenheit tempature, use Math.random() to generate a random tempature between 0 and 100
Have to program output: "It is NN°F today. That's NN°C."
 */



// Fahrenheit to celsius
var temFah = Math.random()*100;
var fahToCel = ((temFah - 32) * 5) / 9; 

console.log("It is " + temFah + "\u00B0F today. That's " + fahToCel + "\u00B0C");