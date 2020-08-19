// Your JS code is here



// Homework 1
function squareNumber (num) {
    var calculateSquare = num * num;
    return "The result of squaring the number " + num + " is " + calculateSquare + "."
  }
  console.log(squareNumber (2))
  console.log(squareNumber (6))
  console.log(squareNumber (12))
  // Homework 2
  function halfNumber (num) {
    var calculateHalf = num / 2;
    return "Half of " + num + " is " + calculateHalf + "."
  }
  console.log(halfNumber (8))
  console.log(halfNumber (14))
  console.log(halfNumber (22))
  // Homework 3
  function percentOf (num1, num2) {
    var calculatePercent = 100 * num1 / num2
    return num1 +  " is " + calculatePercent + " % of " + num2
  }
  console.log(percentOf (8, 10))
  console.log(percentOf (200, 10))
  console.log(percentOf (2, 4))
  // Homework 4
  function areaOfCircle (num) {
    var calculateRadius = (2 * 3.14 * num).toFixed(0)
    return "The area for a circle with radius " + num + " meters is " + calculateRadius + " meters."
  }
  console.log(areaOfCircle (23))
  console.log(areaOfCircle (50))
  console.log(areaOfCircle (167))
  
  // Homework 5
  function number (num) {
    var result = num/2;
    var square = result * result;
    var area = (2 * 3.14 * square).toFixed(0);
    // the percentage of Area remains almost the same number even if parameters are different. please see below
    var percentageOfArea = ((100 * area)/square).toFixed(0);
    console.log(result," result", square, " square", area, " area", percentageOfArea, " percentageOfArea")
    return percentageOfArea
  }
   console.log(number(8));
   console.log(number(100));
   console.log(number(7));