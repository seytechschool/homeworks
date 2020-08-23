// Your JS code is here
// Your JS code is here
function pluralize(number,word){
  var zeroPluralWords = ['deer', 'geese', 'moose', 'sheep', 'elk', 'walrus', 'antelope', 'fish', 'buffalo', 'salmon'];
  if(zeroPluralWords.includes(word) || number === 1){
    return number + ' ' + word;
  }
  else {
    return number + ' ' + word + 's'
  }
}
  pluralize(5, 'cat');
  pluralize(7, 'turtle');
  pluralize(10, 'sheep');
  pluralize(4, 'geese');
  