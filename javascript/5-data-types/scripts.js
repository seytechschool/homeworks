var array = [1,2,3,4,5,6,7,8,9];
var count = 0;

// Task1 
function evenNumber(){  
    for (var i=1; i<=array.length; i++){ 
      if(i % 2 === 0){
      count++
       }
  }
  console.log(count)
}
evenNumber()

// Task2
 function howManyEven(){
  for (var i=1; i<=100; i++){ 
       if(i % 2 === 0){
         count++  
        }
     }
   console.log(count)
  }
 howManyEven()

// Task3
function greatestNumber (){
  var greatest = array[0];
  for (var i=0; i<array.length; i++){
    if (greatest < array[i]){
      greatest = array[i]
    }
  }
  console.log(greatest)  
}
greatestNumber()

// Task4
 function lowestNumber(){
  var lowest = array[0];
  for (var i=0; i<array.length; i++){
    if (lowest > array[i]){
      lowest = array[i]
    }
  }
  console.log(lowest)
}
lowestNumber()

// Task5
function sumNumber(){
  for (var i=0; i<array.length; i++){
    count += array[i]
  }
  console.log(count)
}
sumNumber()

// Task6
 function powerNumber(a){
  var power = a*a
  console.log(power)
}
powerNumber(array[1])
powerNumber(array[2])

// Task7
 function valueTypes(){
  for (var i=0; i<array.length; i++){ 
      if (typeof array[i] == 'number'){
        console.log(true)
      } else{
        console.log(false)
      }
   }
} 
valueTypes() 

//Task8 NEED ADITIONAL EXPLANATION ON THIS TASK DONE WITH GOOGLING 
function commonDivisor(a,b){
   while(b){
      var result = b; 
      b = a % b;
      a = result; 
      }
  return a;
}
commonDivisor(12,8)


// Create a function which returns number of even numbers from a given array of numbers
// Create a function to find how many even numbers between given 2 numbers
// Create a function to find the highest value in an array
// Create a function to find the lowest value in an array
// Create a function to calculate sum all numbers from a given array
// Create a function to calculate power of a number power(2, 3)
// Create a function to check if all values in an array are same types
// Create a function to get the greatest common divisor (gcd) of two integers gcd(12, 8) // 4


