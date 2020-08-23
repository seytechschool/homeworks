// Your JS code is here
var celsius = Math.round(Math.random() * 41);
var fahrenheit = ((celsius * 9) / 5 + 32).toFixed();
var degreeIcon = `\u00B0`;
console.log(
  "It is " +
    celsius +
    degreeIcon +
    "C today. That's " +
    fahrenheit +
    degreeIcon +
    "F"
);

var fahrenheit1 = Math.round(Math.random() * 101);
var celsius1 = (((fahrenheit1 - 32) * 5) / 9).toFixed();
console.log(
  "It is " +
    fahrenheit1 +
    degreeIcon +
    "F today. That's " +
    celsius1 +
    degreeIcon +
    "C"
);
