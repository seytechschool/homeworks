// Your JS code is here
function fixStart(str) {
  var firstChar = str.slice(0, 1);
  var result = firstChar;
  for (var char of str.slice(1)) {
    if (char === firstChar) {
      result += "*";
    } else {
      result += char;
    }
  }
  return result;
}

fixStart("babble");
fixStart("turtle");
fixStart("aaa");
