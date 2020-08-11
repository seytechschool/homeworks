// Your JS code is here
// The Fortune Teller
var x = 'a teacher';
var y = 'New York';
var z = 'Lucy';
var n = 2;
var fortune= 'You will be' + ' ' + x + ' ' + 'in' + ' ' + y + ',' 
+ 'and married to'+ ' ' + z + ' ' + 'with' + ' ' + n + ' kids.';
console.log(fortune);

// The Temperature Calculator
var a= 32;
var b = a * 9/5 + 32 + '\u00B0';
console.log(b);

var farenheit = 76;
var celcius = (farenheit - 32)*5/9+'\u00B0';
console.log(celcius);

// Age calculator

var currentYear = 2020;
var birthYearA= 1989;
var birthYearB = 1995;
var possibleAge = 'They are either' + ' ' + (currentYear - 
birthYearA) + ' ' + 'or' + ' ' + (currentYear - birthYearB);
console.log(possibleAge);

// Challenge question

var a= Math.random();
var b = 'It is' + ' ' + a + '\u00B0 Farenheit today.' + 'That is' + ' '+ (a * 9/5 + 32 + '\u00B0');
console.log(b);