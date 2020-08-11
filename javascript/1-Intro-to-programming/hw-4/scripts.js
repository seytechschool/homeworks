// Your JS code is here
// Challenge Question: Using Math functions

// JavaScript has a built-in tool that can generate a random number between 0 and 1. This tool is called a method. We'll talk about methods more later in the class. For now, know if you type Math.random(), you'll get a random number between 0 and 1.

// Using this tool, update your fahrenheit to celsius tempature conversion program to do the following:

//     Instead of inputing a value for the Fahrenheit tempature, use Math.random() to generate a random tempature between 0 and 100
//     Have to program output: "It is NN°F today. That's NN°C."

var x = Math.random() * (100 - 10);
document.write('It is ',x.toFixed(2),'\u00B0','F',' today.'," That's ",((x-32)*5/9).toFixed(1),'\u00B0','C.');
