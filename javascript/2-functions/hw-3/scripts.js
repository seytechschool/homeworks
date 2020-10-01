function pluralize(number, word){
  if(number, word ){
    return number + ' ' + word;
  } else {
    return number +  word ;
  }
} 
console.log('I have ' + pluralize(0, 'cat'));
console.log('I have ' + pluralize(3, 'dog'));
console.log('I have ' + pluralize(1,'turtle'));

