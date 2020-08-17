// Your JS code is here

function mixUp(stringOne, stringTwo) {
  var lengthOne = stringOne.length;
  var lengthTwo = stringTwo.length;
  var result =
    stringTwo.substr(0, 2) +
    stringOne.substring(2, lengthOne) +
    ' ' +
    stringOne.substr(0, 2) +
    stringTwo.substring(2, lengthTwo);
  var outputString = `mixUp(${stringOne},${stringTwo}): '${result}'`;
  console.log(outputString);
  return result;
}

mixUp('mix', 'pod');
mixUp('dog', 'dinner');

// // Testing string.methods()
// console.log("\n\n\n\n\nTesting string's methods:");

// var testStringOne = 'Hello World';
// var testStringTwo = 'John Smith';

// // 1. charat()
// console.log('\ntesting charat()');
// console.log(testStringOne.charAt(0)); // first letter H
// console.log(testStringTwo.charAt(0)); // first letter J

// // 2. charCodeAt()
// console.log('\ncharCodeAt()');
// console.log(testStringOne.charCodeAt(0)); // unicode of first letter H = 72
// console.log(testStringTwo.charCodeAt(0)); // unicode of first letter J = 74

// // 3. concat()
// console.log('\ntesting concat()');
// console.log(testStringOne.concat(' from ', 'New Zealand!')); // results in Hello World from New Zealand!
// console.log(testStringTwo.concat(' is the only suspect.')); // John Smith is the only suspect.

// // 4. endsWith()
// console.log('\ntesting endsWidth()');
// console.log(testStringOne.endsWith('World')); // returns true
// console.log(testStringOne.endsWith('world')); // returns false

// // 5. fromCharCode()
// console.log('\ntesting fromCharCode()');
// var stringFromUnicode = String.fromCharCode(65, 66, 67, 68);
// console.log(stringFromUnicode); // returns ABCD

// // 6. includes()
// console.log('\ntesting includes()');
// console.log(testStringOne.endsWith('llo World')); // returns true
// console.log(testStringOne.endsWith('llo world')); // returns false

// // 7. indexOf()
// console.log('\ntesting indexOf()');
// console.log(testStringOne.indexOf('World')); // returns 6
// console.log(testStringOne.indexOf('Hello World')); // returns 0

// // 8. lastIndexOf()
// console.log('\ntesting lastIndexOf()');
// console.log(testStringOne.lastIndexOf('l')); // returns 9
// console.log(testStringTwo.lastIndexOf('j')); // returns -1 as there is no letter j

// // 9. localeCompare()
// // The localeCompare method returns a number indicating whether str1 comes before, after or is the same as str2 in sort order.
// console.log('\ntesting localeCompare()');
// var testOne = 'bcad';
// var testTwo = 'wyxz';
// var testThree = 'cbad';
// console.log(testOne.localeCompare('gfde')); // returns -1
// console.log(testTwo.localeCompare('adfs')); // returns 1
// console.log(testThree.localeCompare('cbad')); // returns 0

// // 10. match()
// console.log('\ntesting match()');
// var testMatch = testStringTwo.match('hn');
// console.log(testStringOne.match('l')); // [ 'l', index: 2, input: 'Hello World', groups: undefined ]
// console.log(testStringTwo.match('h')); // [ 'h', index: 2, input: 'John Smith', groups: undefined ]
// console.log('Test match output index: ' + testMatch['index']);
// console.log('Test match output input: ' + testMatch['input']);
// console.log('Test match output search parameter: ' + testMatch[0]);
// console.log('Test match output groups: ' + testMatch['groups']);

// // 11. repeat()
// console.log('\ntesting repeat()');
// console.log(testStringOne.concat(' - ').repeat(3).concat(testStringOne)); // Hello World - Hello World - Hello World - Hello World

// // 12. replace()
// console.log('\ntesting replace()');
// console.log(testStringOne.replace('World', 'Planet!!!')); // replaces from World to Planet!!!

// // 13. search()
// console.log('\ntesting search()');
// console.log(testStringOne.search('ll')); // returns 2
// console.log(testStringOne.search('o')); // returns 4

// // 14. slice()
// console.log('\ntesting slice()');
// console.log(testStringOne.slice(7)); // returns orld

// // 15. split()
// console.log('\ntesting split()');
// var splitTest = testStringOne.split(' ');
// console.log(splitTest[0]); // returns Hello
// console.log(splitTest[1]); // returns World

// // 16. startsWith()
// console.log('\ntesting startsWith()');
// console.log(testStringOne.match('H'));

// // 17. substr()
// console.log('\ntesting substr()');
// var substrTest = testStringOne.substr(0, 2);
// console.log(substrTest); // returns He
// var substrTest = testStringOne.substr(0, 5);
// console.log(substrTest); // returns Hello

// // 17. substring()
// console.log('\ntesting substring()');
// var substringTestOne = testStringOne.substring(6, 11);
// console.log(substringTestOne); // returns World
// var substringTestTwo = testStringOne.substring(0, 5);
// console.log(substringTestTwo); // returns Hello
