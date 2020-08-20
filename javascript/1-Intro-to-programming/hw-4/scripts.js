var randomF = Math.random() * 100;
console.log("Random Farenheit  number is: " + randomF.toFixed(2) + '\u00B0');
var cel = (randomF - 32) * 5 / 9;


console.log("It is going to be: " + cel.toFixed(2) +'\u00B0' + " Celsius " )