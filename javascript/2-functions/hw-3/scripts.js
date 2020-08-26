// Your JS code is here
function pluralize(num, word) {
    if (num > 1 && word != 'men' && word != 'deer') {
       return num + ' ' + word + 's';
     } else {
       return num + ' ' + word;
     } }
   console.log(pluralize(2, "men"));
   console.log(pluralize(5, "deer"));
   console.log(pluralize(2, 'car'));
   console.log(pluralize(3, 'hat'));