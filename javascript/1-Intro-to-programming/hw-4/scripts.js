// Your JS code is here
// All values will be rounded to integers

var currentT = Math.round(Math.random() * 100);

function convertToC(degF) {
  var convertedTemp = Math.round(((degF - 32) * 5) / 9);
  var outputString =
    'It is ' + degF + '°F' + " today. That's " + convertedTemp + '°C.';
  console.log(outputString);
}

convertToC(currentT);
