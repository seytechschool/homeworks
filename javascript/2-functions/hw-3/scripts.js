// Your JS code is here


// 3. Pluralize
// Write a function pluralize that takes in two arguments, a number and a word, and returns the plural. For example:

// pluralize(5, 'cat'): '5 cats'
// pluralize(7, 'turtle'): '7 turtles'
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".




function pluralize(num, animal) {
    return num + " " + animal;
}

pluralize(5, 'cats');
// pluralize(20, 'sheeps');
// pluralize(12, 'gees');
// pluralize(7, 'turtle');