// 1 task
function evenNumbers(arr) {
  var counter = 0;
  for (var x = 0; x < arr.length; x++) {
    if (arr[x] % 2 === 0) {
      counter++
    }
  }
  return counter;
}
evenNumbers([6,4,500,6,8,89,3,234,6,8,9,6,4,2,12,4,6,8])




// 2 task
function evensBetweens(first, second) {
  var count = 0;
  for (var x = first + 1; x < second; x++) {
    if (x % 2 === 0) {
      count++
    }
  }
  return count;
}
evensBetweens(9, 53)

// 3 task
function highValue(arr) {
  var newArr = [0];
  for (var x in arr) {
    if (newArr < arr[x]) {
      newArr = arr[x]
    }
  }
  return newArr;
}
highValue([23,32,43,43,34,43,64,34,74,888,94,])




// 4 task
function minValue(arr) {
  var newArr = arr[0];
  for (var x in arr) {
    if (arr[x] < newArr) {
      newArr = arr[x]
    }
  }
  return newArr
}
minValue([345,34,63,46,356,346,356,356,3465]);

// 5 task
function calculateSum(arr) {
  var counter = 1;
  for (var x = 0; x < arr.length; x++) {
    counter = counter += arr[x]
  }
  return counter
}
calculateSum([2,3,4,5]);

// 6 task
function power(two,three) {
  return Math.pow(two, three);
}
power(2,3);

// 7 task
 // Create a function to check
 // if all values in an array are same types

 // 8 task
 // Create a function to get the greatest common divisor
 // (gcd) of two integers `gcd(12, 8) // 4`
