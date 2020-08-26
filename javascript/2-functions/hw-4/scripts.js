// Your JS code is here
function squareNumber(num) {
    var squaredNumber = num * num;
    console.log('The result of squaring the number ' + num + ' is ' + squaredNumber);
  return squaredNumber;
  }
  
  squareNumber(9);
  
  function halfNumber(num) {
    var half = num / 2;
    console.log('Half of ' + num + ' is ' +  half);
    return half;
  }
  
  halfNumber(55);
  
  function percentOf(num, num2) {
    var percent = (num/num2) * 100;
    console.log(num + ' is ' + percent + '% of ' + num2);
  }
  percentOf(18, 180);
  
  function areaOfCircle(radius) {
    var area = Math.PI * squareNumber(radius);
    console.log('The area for a circle with radius ' + radius + ' is ' + area.toFixed(2));
    return area;
  }
  areaOfCircle(5);
  
  function calc(num) {
    var half    = halfNumber(num);
    var squared = squareNumber(half);
    var area    = areaOfCircle(squared);
    var resul = percentOf(squared.toFixed(0), area.toFixed(0));
  }
  
  calc(4);