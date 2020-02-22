// Your JS code is here

function squareNumber(num) {
    var square = num * num;
    console.log('The result of squaring the number ' + num + ' is ' + square);
    return square;
  }  
  squareNumber(9);
  

  function halfNumber(num) {
    var half = num / 2;
    console.log('Half of ' + num + ' is ' +  half);
    return half;
  }  
  halfNumber(12);
  

  function percentOf(num1, num2) {
    var percent = (num1/num2) * 100;
    console.log(num1 + ' is ' + percent + '% of ' + num2);
    return percent;
  }  
  percentOf(5, 10);

  
  
  function compareTwo(num1,num2){
    if(typeof num1 != 'number' || typeof num2 != 'number'){
      return 'Error'
    }
    
    if (num1 > num2){
       return num1 + ' is bigger than' + num2
    } else if (num2>num2){     
      return num2  + ' is bigger than' + num1
    } 
      return num1 + ' and ' + num2 + ' are equal numbers'
  }
  console.log(compareTwo(30,30))