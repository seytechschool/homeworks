// Your JS code is here

function CompareTwo (number1, number2) {
    if (number1 > number2) { 
       return number1 + ' ' +  'is larger'; 
       }
  
    if (number1 < number2){ 
       return number2 + ' ' + 'is larger'; 
       }
    if (number1 == number2){ 
       return 'Numbers are equal'; 
       }  
    else if (number1 !== "number"){
      return "Error, not a number"
    }   
  } 
  
  console.log(CompareTwo(5,3));
  console.log(CompareTwo(3,6));
  console.log(CompareTwo(3,3));
  console.log(CompareTwo(3,"number"));
  
  