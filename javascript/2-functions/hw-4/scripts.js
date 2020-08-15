// Your JS code is here

function squareNumber(num) {
  var result = num ** 2;
  var stringOutput = `The result of squaring the number ${num} is ${result}.`;
  console.log(stringOutput);
  return result;
}

// testing squareNumber(num) by squareNumber(3)
// should return 9 and string - The result of squaring the number 3 is 9.
var checkSquare = squareNumber(3);
console.log(checkSquare);

function halfNumber(num) {
  var result = num / 2;
  var stringOutput = `Half of ${num} is ${result.toFixed(2)}.`;
  console.log(stringOutput);
  return result;
}

// testing halfNumber(num) by halfNumber(5)
// should return 2.5 and string - Half of 5 is 2.50.
var checkHalf = halfNumber(5);
console.log(checkHalf);

function percentOf(num1, num2) {
  var result = (num1 / num2) * 100;
  var stringOutput = `${num1} is ${result.toFixed(2)}% of ${num2}.`;
  console.log(stringOutput);
  return result;
}

// testing percentOf(num1, num2) by percentOf(2, 4)
// should return 2.5 and string - 2 is 50.00% of 4..
var checkPercentage = percentOf(2, 4);
console.log(checkPercentage);

function areaOfCircle(radius) {
  var area = Math.PI * radius ** 2;
  var stringOutput = `The area for a circle with radius ${radius} is ${area.toFixed(2)}.`;
  console.log(stringOutput);
  return area;
}

// testing areaOfCircle(radius) by areaOfCircle(2)
// should return 12.566370614359172 and string - The area for a circle with radius 2 is 12.57.
var checkArea = areaOfCircle(2);
console.log(checkArea);

function tester(num) {
  var halvedNum = halfNumber(num);
  var squaredNum = squareNumber(halvedNum);
  var circleArea = areaOfCircle(squaredNum);
  var percentage = percentOf(circleArea, squaredNum);

  return halvedNum, squaredNum, circleArea, percentage;
}

tester(4);
