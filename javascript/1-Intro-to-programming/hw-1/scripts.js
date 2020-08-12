// Your JS code is here
// Task #1
var numberOfChildren = 3;
var partnerName = 'Jason Derulo'
var geoLocation = 'Bora-Bora'
var jobTitle = 'fashion influencer'

var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' +
   partnerName + ' ' + ' with ' + numberOfChildren + ' kids.';
console.log(future);

// Task #2
var currentYear = 2020;
var birthYear = 1995;
var age = currentYear - birthYear;
console.log('I will be either ' + age + ' or ' + (age - 1));

// Task #3
var celsius = 29;
var celciusInFahrenheit = (celsius*9) /5 + 32;
console.log(celsius + '°C is ' + celciusInFahrenheit + '°F');
var fahrenheit = 95;
var fahrenheitInCelsius = ((fahrenheit-32) *5) /9;
console.log(fahrenheit + '°F is ' + fahrenheitInCelsius + '°C');

// Task #4
var fahrenheit = (Math.random() * 100 + 0);
var fahrenheitInCelsius = ((fahrenheit-32) *5) /9;
console.log( 'It is ' + fahrenheit + '°F today. That is ' + fahrenheitInCelsius + '°C' )
