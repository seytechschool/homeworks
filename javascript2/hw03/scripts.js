function pluralize(number, word) {
    if (number != 1) {
      return number +' ' + word + 's';
    } else {
      return number + word + ' ';
    }
  }
  console.log(pluralize(7, 'Turtle'));
  console.log(pluralize(99, 'Cat'));

//2nd option

function pluralize(num, animal){
  if(num === 0){
    return "no " + animal;
  }
  if(num ===1){
    return num + " " + animal;
  }
  return num + " " + animal + "s";
}
console.log( pluralize(3, beer)) //'3 beers'