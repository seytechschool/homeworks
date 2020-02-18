// Start to write your  code bellow

// JS intro hw1
var jobTitle= "Software Engineer";
var place = "Palo Alto";
var partner = "Daulet";
var kids = 4;
var future = 'I will be a' + ' ' + jobTitle +  ' ' + 'in' + ' ' + place + ' ' + 'and married to' + ' ' + partner + ' ' +  'and have' + ' ' +  kids + ' ' + 'kids';
console.log (future); 
// JS intro hw1 ends 
// JS intro hw2 starts
var currentYear= 2020;
var birthYear = 1960;
var age = currentYear - birthYear;


console.log ('She is either' + ' ' + age + ' ' + 'or' + ' ' + (age - 1)); 
// JS intro hw2 ends
// JS intro hw3 starts
var tempCel= 20;
var convCelFahr = (tempCel * 9)/ 5 + 32;
console.log (tempCel + '\u00B0 Celsius is ' + convCelFahr + '\u00B0 Fahrenheit'); 

var tempFahr = 68;
var convFahrCel = (tempFahr - 32) /9*5;
console.log (tempFahr + '\u00B0 Fahrenheit is ' + convFahrCel + '\u00B0 Celsius'); 
// JS intro hw3 ends
// JS intro hw4 starts
var tempCel= Math.random();
var convCelFahr = (tempCel * 9)/ 5 + 32;
console.log ('it is ' + tempCel + '\u00B0 Celsius is ' + 'That is ' + convCelFahr + '\u00B0 Fahrenheit');

var tempFahr = Math.random();
var convFahrCel = (tempFahr - 32) /9*5;
console.log ('it is ' + tempFahr + '\u00B0 Fahrenheit is ' + 'That is ' + convFahrCel + '\u00B0 Celsius'); 
// JS intro hw4 ends
// JS Functions hw1 starts
function tellFortune(job,geolocation, partner,children ) {
    var fort='She will be ' + job + ' in ' + geolocation + ' ,married to ' + partner + ' and have ' + children + ' kids.';
    console.log(fort);
    }
    tellFortune('designer', 'Paris', 'Pierre', '2')
    tellFortune('Model', 'New York', 'Zack', '1')
    tellFortune('Teacher', 'Keniya', 'Andrew', '3')
// JS Functions hw1 ends
// JS Functions hw2 starts
function biggerNumber (number1, number2) {
    if (number1 === number2) { 
    console.log ('These numbers are equal.');
    }
    else if (number1 > number2) {
      console.log (number1);}
    else {
      console.log('Attributes are not comparable');
    }
  }
   console.log(biggerNumber(5, 5));
   console.log(biggerNumber(7, 5));
   console.log(biggerNumber(5, 'apple'));
// JS Functions hw2 ends
// JS Functions hw3 starts

function pluralize(numeral, noun) {
    if (numeral != 1 && noun != 'sheep') {
    return numeral + ' ' + noun + 's';
  }
  else {
    return numeral + ' ' + noun;
  }
  }
  console.log (pluralize(2,'cat'));
  console.log (pluralize(1, 'dog'));
  console.log (pluralize(5, 'sheep'));
  console.log (pluralize(10, 'apple'));
    
// JS Functions hw3 ends
// JS Functions hw4 starts
function squareNumber(number) {
    var squaredNumber = number * number;
    console.log('The result of squaring the number ' + number + ' is ' + squaredNumber);
    return squaredNumber;
  }
    squareNumber(3);
    
  function halfNumber(number) {
    var halfedNumber = number / 2;
    console.log('Half of ' + number + ' is ' + halfedNumber);
    return halfedNumber;
  }
    halfNumber(5);
  
  function percentOf(number1, number2) {
    var percentage = (number1/number2)* 100;
    console.log(number1 + ' is ' + percentage + '% of ' + number2);
    return percentage;
  }
    percentOf(2,4);
  
  
  function areaOfCircle(radius) {
    var percentage = (number1/number2)* 100;
    console.log(number1 + ' is ' + percentage + '% of ' + number2);
    return percentage;
  }
    percentOf(2,4);
  // JS Functions hw4 ends
//   JS loop,array,objects hw1 starts
for (var i = 0; i <= 20; i++) {
    if (i% 2 === 0){
      console.log(i + ' is even');
  }
    else {
      console.log(i + ' is odd');
    }
  }
//   JS loop,array,objects hw1 ends
//   JS loop,array,objects hw2 start
var colors = ['white','pink', 'yellow', 'black'];
for (var i = 0; i< colors.length; i++) {
  console.log('My # ' + (i+1) + ' choice is ' + colors[i]);
}

//   JS loop,array,objects hw2 ends