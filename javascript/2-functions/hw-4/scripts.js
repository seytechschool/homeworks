// Your JS code is here
function squareNumber(num) {
  var square = num * num;
  console.log(
    "The result of squaring the number " + num + " is " + square + "."
  );
  return square;
}

// squareNumber(3);

function halfNumber(num) {
  var half = num / 2;
  console.log("Half of " + num + " is " + half + ".");
  return half;
}

// halfNumber(40);

function percentOf(num1, num2) {
  var percent = ((num1 / num2) * 100).toFixed(2);
  console.log(num1 + " is " + percent + "% of " + num2);
  return percent;
}

// percentOf(10, 100);

function areaOfCircle(radius) {
  var area = (radius * radius * Math.PI).toFixed(2);
  console.log(
    "The area for a circle with radius " + radius + " is " + area + "."
  );
  return area;
}

// areaOfCircle(2)

function calc(num) {
  var halfNum = halfNumber(num);
  var squareNum = squareNumber(halfNum);
  var areaCircle = areaOfCircle(squareNum);
  var percentage = percentOf(areaCircle, squareNumber(areaCircle));
  return percentage;
}

// calc(3);
