//hw-2-functions-2
function compareNum(num1,num2){
    if(num1==num2) {
      return('Equal numbers');
    } else if (num1>num2) {
      return num1;
    } else if (num2>num1) {
      return num2;
    } else {
      return ('Error, cannot be compared');
    }
  }
  console.log (compareNum(9,5));
  console.log (compareNum(5,5));
  console.log (compareNum(9,11));
  console.log (compareNum(9,'ten'));