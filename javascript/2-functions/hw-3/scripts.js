// Your JS code is here
function pluralize (number, animal){
    if (animal != 'sheep' && animal != 'geese')
       { 
         return number + ' ' + animal + 's';
       }
    else { 
      return number + ' ' + animal;
      }
    }
    
    console.log('I have ' + pluralize(10,'sheep'));
    console.log('I have ' + pluralize(5, 'geese'));
    console.log('I have ' + pluralize(1, 'cat'));
    console.log('I have ' + pluralize(2, 'dog'));

    