// Your JS code is here
function compareNumbers (num1, num2) {
    // edge case 
      if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "error, not a number"
      }
      if (num1 > num2) {
        return num1
    } else if (num1 < num2) {
        if (num2 % 2 === 0) {
          return "this number is even"
        } else {
          return "this number is odd"
        }
    } else if (num1 == num2)  {
      return "numbers are equal"
    } 
  }
  console.log (compareNumbers ("seven", 12))
  console.log (compareNumbers (10, 8))
  console.log (compareNumbers (22, 22))
  console.log (compareNumbers (100, 131))