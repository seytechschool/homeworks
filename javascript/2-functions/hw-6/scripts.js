// Your JS code is here
function fixStart(str) {
  var firstLetter = str[0];
  var result = firstLetter;
  var letter;

  for (var i = 1; i < str.length; i++) {
    if (str[i] == firstLetter) {
      letter = '*';
    } else {
      letter = str[i];
    }
    result += letter;
  }

  console.log(result);

  return result;
}

// testing function
fixStart('babble');
fixStart('turtle');
fixStart('abcaaacba');
