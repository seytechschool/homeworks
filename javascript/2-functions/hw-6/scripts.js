// Your JS code is here

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurrences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

// fixStart('babble'): 'ba**le'
// fixStart('turtle'): 'tur*le'

function fixStart(string) {
    var firstChar = string.charAt(0);
    return firstChar + string.slice(1).replace(new RegExp(firstChar, 'g'), '*');
  }
  
  console.log(fixStart('babble')); // --> 'ba**le'
  console.log(fixStart('turtle')); // --> 'tur*le''