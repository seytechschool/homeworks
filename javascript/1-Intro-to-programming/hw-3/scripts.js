var celciusTemp = 17;
var fahrenheitFromCelsius = (celciusTemp * 9 / 5 + 32).toFixed(2);
console.log(celciusTemp,'\u00B0C is', fahrenheitFromCelsius,'\u00B0F');

var fahrenheitTemp = 69;
var celsiusFromFahrenheit = ((fahrenheitTemp - 32) * 5 / 9).toFixed(2);
console.log(fahrenheitTemp,'\u00B0F is', celsiusFromFahrenheit,'\u00B0C');
