// Your JS code is here
function compareNum(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else if (num2 > num1) {
      return num2;
    } else if (num1 === num2) {
      console.log("equal");
    }
    else {
      console.log("Error. Can't be compared!");
      return undefined;
    }
  }
  
  console.log(compareNum(12, 5));
  console.log(compareNum(30, 45));
  console.log(compareNum(18, "twenty"));
  console.log(compareNum(2, 2));