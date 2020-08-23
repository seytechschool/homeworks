// Your JS code is here
function compareTwo(num1,num2) {
  if(num1>num2) {
    return num1;
  }
  else if(num1<num2) {
    return num2;
  }
  else if (num1==num2) {
    return 'Numbers are equal'
  }
  else {
    return 'Cannot be compared.'
  }
}
console.log(compareTwo(1,5));
console.log(compareTwo(7,4));
console.log(compareTwo(5,5));
console.log(compareTwo('one',5));
console.log(compareTwo(8,'six'));