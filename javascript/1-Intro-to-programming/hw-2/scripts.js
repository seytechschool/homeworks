// Your JS code is here
var currentYear = 2020;
var yob = 1988;
var ageOption1 = currentYear - yob; // if birthday has occured
var ageOption2 = ageOption1 - 1; // if birthday hasn't occured

var outputSentence =
  'They are either ' + ageOption1 + ' or ' + ageOption2 + ' years old.';

console.log(outputSentence);
