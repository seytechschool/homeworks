// Your JS code is here
function squareNumber(num) {
  var product=num*num;
  return product;
}
console.log('The result of squaring the number 3 is '+squareNumber(3));

function halfNumber(num) {
  var quotient=num/2;
  return quotient;
}
console.log('Half of 5 is '+halfNumber(5));

function percentOf(num1,num2) {
  var result=num1/num2*100;
  return result;
}
console.log('2 is '+percentOf(2,4)+'% of 4');


function areaOfCircle(radius) {
  var area= Math.PI*Math.pow(radius,2);
  return area.toFixed(2);
}
console.log('The area for a circle with radius 2 is '+areaOfCircle(2));

function all(number) {
  var one=halfNumber(number);
  var two=squareNumber(one);
  var three=areaOfCircle(two);
  var four=percentOf(three,two);
  return four;
}
console.log(all(2));
