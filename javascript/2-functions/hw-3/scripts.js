// Your JS code is here
function pluralize(number,word){
  if(word == 'sheep' || word == 'geese'){
    return number + ' ' + word
  }
  else {
    return number + ' ' + word + 's'
  }
}

pluralize(5, 'cat');
pluralize(7, 'turtle');
pluralize(10, 'sheep');
pluralize(4, 'geese');
