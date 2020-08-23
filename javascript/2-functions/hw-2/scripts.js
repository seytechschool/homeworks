// Your JS code is here

/**
 * 2. What number is bigger?
Write a function that compares two numbers and returns the larger one.
Be sure to try it out with some different numbers. 
Bonus: add error messages if the numbers are equal or cannot be compared.

Don't forget to test it!
 */

function compareNum(num1, num2) {
    if (num1 > num2) {
        return num1 + " is bigger then " + num2;
    }else if (num1 < num2) {
        return num1 + " smaller then " + num2;
    }else if (num1 === num2) {
        return num1 + " and " + num2 + " is equal.";
    }else {
        return "error: " + num1 + " and " + num2 + " can not be compared.";
    }
  }
  
  compareNum(20, 15);
  //  compareNum(20, 25);
  //  compareNum(20, 20);
  //  compareNum('orange', 15);