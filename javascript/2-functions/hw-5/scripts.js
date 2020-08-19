// Your JS code is here
// ### MixUp

// Create a function called `mixUp`. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

// ```
// mixUp('mix', 'pod'): 'pox mid'
// mixUp('dog', 'dinner'): 'dig donner'

function mixUp(word1, word2) {
    return word2.slice(0, 2) + word1.slice(2) + " " + word1.slice(0, 2) + word2.slice(2);
  }
  console.log(mixUp('mix', 'pod'));
  console.log(mixUp('dog', 'dinner'));