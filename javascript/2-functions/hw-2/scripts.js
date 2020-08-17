// Your JS code is here
function whatIsBigger(val1, val2) {
  var outputString = '';
  if ((typeof val1 == 'number') & (typeof val2 == 'number')) {
    if (val1 > val2) {
      outputString = val1 + ' is bigger than ' + val2;
    } else if (val2 > val1) {
      outputString = val2 + ' is bigger than ' + val1;
    } else {
      outputString = 'The values cannot be compared due to being equal!';
    }
  } else {
    outputString = 'Check values! One or both of them are not numbers.';
  }
  console.log(outputString);
}

// testing the function by using whatIsBigger(1, 2)
// the function should return: 2 is bigger than 1
whatIsBigger(1, 2);

// testing the function by using whatIsBigger(5, 1)
// the function should return: 5 is bigger than 1
whatIsBigger(5, 1);

// testing the function by using whatIsBigger(2, 2)
// the function should return: The values cannot be compared due to being equal!
whatIsBigger(2, 2);

// testing the function by using whatIsBigger('5', 1)
// the function should return: Check values! One or both of them are not numbers.
whatIsBigger('5', 1);
