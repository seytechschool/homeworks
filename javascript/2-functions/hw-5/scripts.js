// Your JS code is here
const mixUp = (word1, word2) => word1.substring(0,2).concat(word2.substring(2)).concat(" ").concat(word2.substring(0,2).concat(word1.substring(2)));

console.log(mixUp("dog", "dinner"));
console.log(mixUp("mix", "pod"));
console.log(mixUp("icecream", "cheesecake"));