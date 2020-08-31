var fahrenheitTemp = Math.round(Math.random()*100);
var celsiusFromFahrenheit = ((fahrenheitTemp - 32) * 5 / 9).toFixed(2);
console.log('It\'s', fahrenheitTemp,'\u00B0F today. That\'s', celsiusFromFahrenheit,'\u00B0C.');
