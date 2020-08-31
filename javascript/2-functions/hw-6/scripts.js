// Your JS code is here
function fixStart(inputString) {
    var firstChar = inputString.charAt(0);
    return firstChar + inputString.slice(1).replace(new RegExp(firstChar, 'g'), '*');
  }
  console.log(fixStart('babble'));
  console.log(fixStart('turtle'));
