// Your JS code is here
function convertToF(degC) {
  var convertedTemp = (degC * 9) / 5 + 32;
  var outputString = degC + '°C' + ' is ' + convertedTemp + '°F';
  console.log(outputString);
}

// testing functions fromToC
// convertToF(20) should return 20°C is 68°F
convertToF(20);

function convertToC(degF) {
  var convertedTemp = ((degF - 32) * 5) / 9;
  var outputString = degF + '°F' + ' is ' + convertedTemp + '°C';
  console.log(outputString);
}

// testing functions fromToC
// convertToF(20) should return 68°C is 20°C
convertToC(68);
