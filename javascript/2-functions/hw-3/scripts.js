// Your JS code is here
function pluralize(num, animal) {
  if(num > 1) {
    return num + ' ' + animal + 's';
  } else if(animal === 'goose') {
    return num + ' ' + 'geese';
  } else {
    return num + ' ' + animal;
  }
}

console.log(pluralize(10, 'cat'));
