// Your JS code is here
function squareNumber(number){
  var result = number**2;
  return result;
}

var a = 10;
console.log('The result of squaring the number',a,'is',squareNumber(a));

// --------------------------------------------------------------------

function halfNumber(number){
  var result = number/2;
  return result
}

var b = 5;
console.log('Half of',b,'is',halfNumber(b));

// --------------------------------------------------------------------

function percentOf(num1,num2){
  var result = num1*100/num2;
  return result;
}

var c = 5;
var d = 20;
console.log(c,'is',percentOf(c,d) + '% of',d);

var c = 2;
var d = 4;
console.log(c,'is',percentOf(c,d) + '% of',d);

// --------------------------------------------------------------------

function areaOfCircle(radius){
  // var pi = Math.PI     ---> OR we can use it directly
  var result = (Math.PI)*radius**2;
  return result.toFixed(2);
}

var e = 2;
console.log('The area for a circle with radius',e,'is',areaOfCircle(e));
var e = 10;
console.log('The area for a circle with radius',e,'is',areaOfCircle(e));

// --------------------------------------------------------------------

function percentOfArea(number){
  var half = number/2; //Take half of the number and store the result.
  var square =  half**2; //Square the result of #1 and store that result.
  var area = (Math.PI)*square**2; //Calculate the area of a circle with the result of #2 as the radius.
  var percent = area*100/square; //Calculate what percentage that area is of the squared result (#3).
  return percent.toFixed(0);
}

var g = 2;
percentOfArea(g);
