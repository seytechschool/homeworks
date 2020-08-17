// Your JS code is here


/**
 * Challenge Question: String Manipulation
If you feel comfortable with the other exercises, it's time to expand your knowledge! 
These puzzles involve manipulating strings; to try them out, you'll need to use some of the built-in JavaScript methods for strings. 
Methods are pre-written functions that are built into the language.

These questions are not as straightforward as the others. 
They challenge you to really think like a programmer. Really try to solve them before you peek at the answer.

FixStart
Create a function called fixStart. It should take a single argument, 
a string, and return a version where all occurrences of its first character have been replaced with '*', 
except for the first character itself. You can assume that the string is at least one character long. For example:

fixStart('babble'): 'ba**le'
fixStart('turtle'): 'tur*le'
 */

function fixStart(word) {
    var a = word.charAt(0);
    return a + word.slice(1).replace(new RegExp(a, 'g'), '*');
  } 

  fixStart('babble');
//   fixStart('turtle');


