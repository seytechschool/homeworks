// Your JS code is here
function biggerNum(num1, num2) {
  if(num1 > num2) {
    return num1;
  } else if(num1 < num2) {
    return num2;
  } else {
    return 'numbers are equal or cannot be compared.'
  }
}

console.log(biggerNum(0, 0))
