// Your JS code is here


// task 1
function squareNumber(num) {
  var san = num * num
  return 'The result of squaring the number ' + num + ' is ' + san)
};
var temp = Math.random() * 10 +10;
squareNumber(temp.toFixed());






// task 2
function halfNumber(num) {
  return num / 2
};
var number = Math.random() * 10
var nums = halfNumber(number.toFixed())
console.log('half of ' + number + ' is ' + nums);







// task 3
var percentOf = function(small, larg) {
  var percent = (small / 100) * larg;
  return small + ' is ' + percent +  '% of ' + larg;
}
console.log(percentOf(6, 7));






// task 4
function areaOfCircle(radius) {
  return 'the area for Circle with radius ' + radius + ' is ' + 2 * radius
};
var result = areaOfCircle(546));
console.log(result);







// task 5

function areaOfCircle(radius) {
  return 2 * radius
};
var result = areaOfCircle(Math.random() * 10));
var res = result.toFixed(2);






// task 6
// 1. Take half of the number and store the result.
function halfNumber(num) {
  return num / 2
};
var random = Math.random() * 10;
var HALF_NUMBER = halfNumber(random.toFixed())



// 2. Square the result of #1 and store that result.
function squareNumber(num) {
  return  num * num
};
var SQUARE_NUMBER = squareNumber(HALF_NUMBER);



// 3. Calculate the area of a circle with the result of #2 as the radius
function areaOfCircle(radius) {
  return  2 * radius;
};
var AREA_OF_CIRCLE = areaOfCircle(SQUARE_NUMBER);



// 4. Calculate what percentage that area is of the squared result (#3).
function last(small, larg) {
  var percent = (small / 100) * larg;
  return small + ' is ' + percent +  '% of ' + larg;
}
console.log(last(AREA_OF_CIRCLE, 6));
