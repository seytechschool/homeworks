// Your JS code is here
function squareNumber(num) {
  var square = num * num;
  console.log('The result of squaring the number ' + num + ' is ' + square + '.');
  return square;
}

squareNumber(9);

function halfNumber(num) {
  var half = num / 2;
  console.log('Half of ' +  num + ' is ' + half + '.');
  return  half;
}

halfNumber(45);

function percentOf(num1, num2) {
  var percent = num1 / num2 * 100;
  console.log(num1 + ' is ' + percent + '% of ' + num2);
  return percent;
}

percentOf(44, 100);

function areaOfCircle(radius) {
  var area = (3.14 * (radius * radius)).toFixed(2);
  console.log('The area for a circle with radius ' + radius + ' is ' +  area + '.');
  return area;
}

areaOfCircle(2);

function calculator(num) {
  var half = halfNumber(num);
  var square = squareNumber(half);
  var area = areaOfCircle(square);
  var percentage = percentOf(area, squareNumber(area));
  return percentage;
}

calculator(5);
