// Your JS code is here
function biggerNum(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "not a number";
  } else if (num1 === num2) {
    return "numbers are equal";
  } else if (num2 > num1) {
    return num2;
  } else {
    return "Error";
  }
}

biggerNum(3, 1); // 3
biggerNum(3, 3); // numbers are equal
biggerNum(3, 4); // 4
biggerNum("4", 4); // not a number
