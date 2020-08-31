// Your JS code is here
function pluralize(number, noun) {
    if (number != 1 && noun != 'sheep' && noun != 'geese') {
      return number + ' ' + noun + 's';
    } else {
      return number + ' ' + noun;
    }
  }
  console.log('I have ' + pluralize(0, 'cat'));
  console.log('I have ' + pluralize(1, 'cat'));
  console.log('I have ' + pluralize(2, 'cat'));
  console.log('I have ' + pluralize(3, 'geese'));