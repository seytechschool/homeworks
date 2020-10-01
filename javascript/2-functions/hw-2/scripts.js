function largerNum(num1, num2){
 if(num1 === num2){
   console.log('Equal numbers');
 } else if(num1>num2){
   return num1;
 } else if(num2>num1){
   return num2;
 }
}

console.log(largerNum(5,5));
console.log(largerNum(10,-50));
console.log(largerNum(3,8));

