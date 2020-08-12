// Your JS code is here
// Task #1
var arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// option 1
function countEvenNums(arr) {
  var evenNums = arr.filter((num) => num % 2 === 0);
  return evenNums.length;
}

countEvenNums(arr)

// option 2
function countEvenNums2(arr) {
  var evenNums = [];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0 ) {
      evenNums.push(arr[i]);
    }
  }
  return evenNums.length;
}

countEvenNums2(arr);

// Task #2
function countEvenNums3(num1, num2) {
  var arr = [];
  for(i = num1; i <= num2; i++) {
    if(i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr.length;
}

countEvenNums3(1, 1);


// Task #3
function highValue(arr) {
  var maxValue = 0;
  for(var i = 0; i < arr.length; i++) {
    if(maxValue > arr[i]) {
      maxValue = maxValue
    } else {
      maxValue = arr[i];
    }
  }
  return maxValue;
}

highValue(arr);

// Task #4
function minValue(arr) {
  var minValue = arr[0];
  for(var i = 0; i < arr.length; i++) {
    if(minValue < arr[i]) {
      minValue = minValue
    } else {
      minValue = arr[i];
    }
  }
  return minValue;
}

minValue(arr);

// Task #5
function totalSum(arr) {
  var totalSum = 0;
  for(var i = 0; i < arr.length; i++) {
    totalSum += arr[i]
  }
  return totalSum;
}

totalSum(arr);

// Task #6
function power(num1, num2) {
  var total = 1;
  for(i = 1; i <= num2; i++) {
    total *= num1; 
  }
  return total;
}

power(3,5);


// Task #7
var arr1 = [null, null, null, undefined];

function typeCheck(arr) {
  var type = typeof arr[0];
  var isEqual;
  for(var i = 0; i < arr.length; i++) {
     if(type === typeof arr[i]) {
       isEqual = true;
    } else {
      isEqual = false;
      break;
    }
  }
  return isEqual;
}

typeCheck(arr1);

// Task #8
function gcd(num1, num2) {

  while(num1) {
    var div = num1;
    num1 = num2 % num1;
    num2 = div;
  }
  return num2;

}

gcd(12, 18)
