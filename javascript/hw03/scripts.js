// Your JS code is here
for (var i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i + ' is even');
    } else {
      console.log(i + ' is odd');
    }
  }
  
  
  var choices = ['red', 'orange', 'pink', 'yellow'];
  function findLast (inputNum) {
    tmpSlice = String(inputNum);
    var lastDigit = (tmpSlice.slice(-1));
    return lastDigit;
  }
  
  for (var i = 0; i < choices.length; i++) {
    var choiceNum = i + 1;
    var choiceNumSuffix = 0;
    var choiceNumLast = findLast(choiceNum);
    if (choiceNumLast == 1) {
      choiceNumSuffix = 'st';
    } else if (choiceNumLast == 2) {
      choiceNumSuffix = 'nd';
    } else if (choiceNumLast == 3) {
      choiceNumSuffix = 'rd';
    } else {
      choiceNumSuffix = 'th';
    }
    console.log('My ' + choiceNum + choiceNumSuffix + ' choice is ' + choices[i]);
  }
  
  