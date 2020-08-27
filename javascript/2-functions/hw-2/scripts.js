// Your JS code is here

// Write a function that compares two numbers and returns the larger one. Be sure to try it out with some different numbers. Bonus: add error messages if the numbers are equal or cannot be compared.

// Don't forget to test it!

function compareNum (num1,num2) {
    if (num1>num2) {
    return num1;
    }else if (num2>num1) {
      return num2;
    } 
    else if (num1===num2) {
      return('NUMBERS ARE EQUAL!!!');
    }
    } 
    
    // test
    compareNum(10,2) //--> 10
    compareNum(2,10) //--> 10
    compareNum(10,10) //--> NUMBERS ARE EQUAL!!!