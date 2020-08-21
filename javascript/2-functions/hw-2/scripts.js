function compareTwo(num1, num2){
  if(typeof(num1) != 'number' || typeof(num2) != 'number'){
    console.log(`Impossible to compare ${num1} and ${num2}`)
  }else if(num1 === num2){
    console.log('Both numbers are equal')
  }else if(num1>num2){
    console.log(`${num1} is bigger than ${num2}`)
  }else{
    console.log(`${num2} is  bigger than ${num1}`)
  }
}

compareTwo(4, 20);
compareTwo(14, 14);
compareTwo('apple', 20);

