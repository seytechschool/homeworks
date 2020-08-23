// Your JS code is here



/**
 * Challenge Question: String Manipulation
If you feel comfortable with the other exercises, it's time to expand your knowledge! 
These puzzles involve manipulating strings; to try them out, you'll need to use some of the built-in JavaScript methods for strings. 
Methods are pre-written functions that are built into the language.

These questions are not as straightforward as the others. They challenge you to really think like a programmer. 
Really try to solve them before you peek at the answer.

MixUp
Create a function called mixUp. It should take in two strings, 
and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. 
You can assume that the strings are at least 2 characters long. For example:

mixUp('mix', 'pod'): 'pox mid'
mixUp('dog', 'dinner'): 'dig donner'
 */


function mixUp(stri1, stri2) {
    var mixStr = stri1.substring(0,2).concat(stri2.substring(2)).concat(" ").concat(stri2.substring(0,2).concat(stri1.substring(2)));
    return mixStr;
  }
  
  mixUp('mix', 'pod');
  mixUp('phone', 'computer');




