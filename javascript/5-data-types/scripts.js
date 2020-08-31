// Create a function which returns number of even numbers from a given array of numbers
function countEvenNumbers(arr) {
  return arr.reduce((accum, value) => {
    value % 2 === 0 ? accum++ : accum;
    return accum;
  }, 0);
}

var testArray = [1, 2, 4, 5, 3, 2, 7];
console.log(countEvenNumbers(testArray)); // 3

// Create a function to find how many even numbers between given 2 numbers
// assume num2 is included
function countEvenNumbersBetweenTwoNumbers(num1, num2) {
  var result = 0;
  for (var i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
      result++;
    }
  }
  return result;
}

console.log(countEvenNumbersBetweenTwoNumbers(1, 10)); // 5

// Create a function to find the highest value in an array
function findMax(arr) {
  return arr.reduce((accum, value) => {
    accum > value ? accum : (accum = value);
    return accum;
  });
}

var testArray = [1, 2, 4, 5, 3, 2, 7, 2, 3];
console.log(findMax(testArray)); // 7

// Create a function to find the lowest value in an array
function findMin(arr) {
  return arr.reduce((accum, value) => {
    accum < value ? accum : (accum = value);
    return accum;
  });
}

var testArray = [1, 2, 4, 5, -5, 2, 7, 2, 3];
console.log(findMin(testArray)); // -5

// Create a function to calculate sum all numbers from a given array
function getSum(arr) {
  return arr.reduce((accum, value) => {
    accum += value;
    return accum;
  });
}

var testArray = [1, 2, 4, 5, -5, 2];
console.log(getSum(testArray)); // 9

// Create a function to calculate power of a number `power(2, 3)`
function power(value, exponent) {
  if (exponent === 1) return value;
  return value * power(value, exponent - 1);
}

console.log(power(2, 3)); // 8

// Create a function to check if all values in an array are same types
function checkIfSame(arr) {
  var firstElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (typeof firstElement !== typeof arr[i]) {
      return false;
    }
  }
  return true;
}

var testArray = [1, 2, 4, 5, -5, 2];
console.log(checkIfSame(testArray)); // true
var testArray = [1, 2, 4, 5, '-5', 2];
console.log(checkIfSame(testArray)); // false

// Create a function to get the greatest common divisor (gcd) of two integers `gcd(12, 8) // 4`
function gcd(num1, num2) {
  if (num2 === 0) return num1;
  return gcd(num2, num1 % num2);
}

console.log(gcd(14, 12)); // 2
