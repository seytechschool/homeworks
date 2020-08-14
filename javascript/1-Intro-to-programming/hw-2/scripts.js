// Your JS code is here

var currentYear=2020;
var birthYear=1978;
// var possibleAge1= currentYear - birthYear;
// var possibleAge2= possibleAge1 - 1;

function ageCalculator (num1, num2) {
  var possibleAge1= num1 - num2;
  var possibleAge2= possibleAge1 - 1;
  return "They are either " + possibleAge1 + " or " + possibleAge2 + ". "
}
ageCalculator (currentYear, birthYear)
