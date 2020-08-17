// Your JS code is here
function pluralize(quantity, animalType) {
  var singularForm = ['mouse', 'goose', 'sheep', 'fish'];
  var plularForm = ['mice', 'geese', 'sheep', 'fish'];
  var outputString = '';
  if ((typeof quantity == 'number') & (quantity > 0)) {
    if (quantity == 1) {
      outputString = quantity + ' ' + animalType;
    } else {
      outputString = quantity;
      if (singularForm.includes(animalType)) {
        for (var i = 0; i < singularForm.length; i++) {
          if (singularForm[i] == animalType) {
            outputString += ' ' + plularForm[i];
            break;
          }
        }
      } else {
        outputString += ' ' + animalType + 's';
      }
    }
  } else {
    outputString = 'The first parameter must be a number and higher than 0!';
  }
  console.log(outputString);
}

// testing the function using pluralize(1, 'mouse')
// should output: 1 mouse
pluralize(1, 'mouse');
// testing the function using pluralize(2, 'mouse')
// should output: 12 mice
pluralize(2, 'mouse');
// testing the function using pluralize(0, 'mouse')
// should output: The first parameter must be a number and higher than 0!
pluralize(0, 'mouse');
// testing the function using pluralize(1, 'goose')
// should output: 10 geese
pluralize(1, 'goose');
// testing the function using pluralize(10, 'goose')
// should output: 10 geese
pluralize(10, 'goose');
