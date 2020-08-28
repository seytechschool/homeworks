// Your JS code is here

/**
 * Create a function which returns number of even numbers from a given array of numbers

 */

 var numbers = [1, 2, 10, 13, 99, 21, 24];

 function getEvenNumber(num) {
     var a = 0;
     var even = [];
    for (var i=0; i<num.length; i++) {
        if (num[i]%2 === 0) {
            a++;
            even.push(num[i]);
        }
    }return even;
 }

 getEvenNumber(numbers);



 /**
 * Create a function to find how many even numbers between given 2 numbers
 */

function findEvenNum(num1, num2) {
    var b = 0;
    for (var i=num1; i<num2; i++) { 
      if (i%2 === 0) {
        b++;
     
      }
    }
    return b;
  }
  
  console.log(findEvenNum(1, 20));



  /**
 * Create a function to find the highest value in an array
 */
var c = [1, 12, 17, 11, 50, 6];

function highestNum(arr) {
  var init = arr[0];
  for (var i=0; i<arr.length; i++) {
    if(init < arr[i]) {
      init = arr[i];
    }
  }
  return init;
}

console.log(highestNum(c));


/**
 * Create a function to find the lowest value in an array
 */
var d = [133, 12, 17, 11, 50, 60];

function lowerNum(arr) {
  var init = arr[0];
  for (var i=0; i<arr.length; i++) {
    if(init > arr[i]) {
      init = arr[i];
    }
  }
  return init;
}

console.log(lowerNum(d));


/**
 * Create a function to calculate sum all numbers from a given array
 */
var w = [133, 12, 17, 11, 50, 60];

function calculateSum(arr) {
  var sum = 0;
  for (var i=0; i<arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(calculateSum(w));


/**
 * Create a function to calculate power of a number power(2, 3)
 */
function calcPower(num1, num2) {
    var v = 1;
    for (var i=1; i<=num2; i++) {
      v = v * num1;
    }
    return v;
  }
  
  console.log(calcPower(2, 3));


  /**
 * Create a function to check if all values in an array are same types
 */

var abc = [1, 'phone', false, 'kanybek', 1212];

function checkArrayType(arr) {
  for (var i=0; i<arr.length; i++) {
    if(i === arr[i]) {
      return true;
    }else {
      return false
    }
  }
}

checkArrayType(abc);


/**
 * Create a function to get the greatest common divisor (gcd) of two integers gcd(12, 8) // 4
 */

function gcd(a, b) {
    var min = a;
    if(a>b) {
      min = b;
    }
    for (var i = min; i>0; i--) {
      var aRem = a % i;
      var bRem = b % i;
      if(aRem === 0 && bRem === 0) {
        return i;
      }
    } 
  }
  
  console.log(gcd(12, 8));


  