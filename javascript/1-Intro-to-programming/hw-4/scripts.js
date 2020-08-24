// Your JS code is here
//using 'Math.round(Math.random()' 
var fahrenheit = Math.round(Math.random() * 101);
var fahrenheitToC =(fahrenheit - 32) *5 /9;
console.log('It is ' + fahrenheit + `\u00B0F`+' today. ' + "That's " + fahrenheitToC + `\u00B0C` );