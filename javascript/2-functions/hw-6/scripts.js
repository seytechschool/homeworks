// Your JS code is here
function fixStart(str) {
  var firstChar = str.slice(0,1);
  var restChar = str.slice(1)
  var newStr = restChar;
  for(var i = 0; i < restChar.length; i++) {
    newStr = newStr.replace(firstChar, '*');
  }
   
  return firstChar + newStr;
}

fixStart('gugguggguggguggg')
