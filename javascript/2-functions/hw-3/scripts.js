//hw-2-functions-3
function pluralize(num , word){
    if (num > 1 && word != 'sheep' && word != 'geese'){
    return num + ' ' + word + 's';
    } else {
    return num + ' ' + word;
    }
  }
  console.log(pluralize(5,'cat'));
  console.log(pluralize(7,'turtle'));
  console.log(pluralize(1,'cat'));
  console.log(pluralize(5,'sheep'));
  console.log(pluralize(5,'geese'));
