// Your JS code is here

var choices = {
  colours: ['green', 'brown', 'orange'],
  pets: ['cat', 'dog', 'horse'],
  city: ['LA', 'NY', 'Seattle'],
};

function whatIsYourChoice(chosenParameter) {
  var result = '';
  var parameterLength = chosenParameter.length;
  for (var i = 0; i < choices[chosenParameter].length; i++) {
    var orderNumber = i + 1;
    if ((orderNumber % 10 === 1) & (orderNumber !== 11)) {
      result += `My ${orderNumber}st favourite ${chosenParameter.substring(0, parameterLength - 1)} is ${
        choices[chosenParameter][i]
      }\n`;
    } else if ((orderNumber % 10 === 2) & (orderNumber !== 12)) {
      result += `My ${orderNumber}nd favourite ${chosenParameter.substring(0, parameterLength - 1)} is ${
        choices[chosenParameter][i]
      }\n`;
    } else if ((orderNumber % 10 === 3) & (orderNumber !== 13)) {
      result += `My ${orderNumber}d favourite ${chosenParameter.substring(0, parameterLength - 1)} is ${
        choices[chosenParameter][i]
      }\n`;
    } else {
      result += `My ${orderNumber}th favourite ${chosenParameter.substring(0, parameterLength - 1)} is ${
        choices[chosenParameter][i]
      }\n`;
    }
  }
  return result;
}

console.log(whatIsYourChoice('colours'));
console.log(whatIsYourChoice('pets'));
console.log(whatIsYourChoice('city'));
