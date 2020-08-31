// Your JS code is here
function greaterNum(num1, num2) {
    if (num1 === num2) {
      console.log('Those numbers are equal');
    } else if (num1 > num2) {
      return num1;
    } else if (num2 > num1) {
      return num2;
    } else {
      console.log('Those are simply incomparable!');
      return undefined;
    }
  }
  
  console.log(greaterNum(3, 3));
  console.log(greaterNum(7, -2));
  console.log(greaterNum(5, 9));
  console.log(greaterNum(5, 'dog'));