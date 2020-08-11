// Your JS code is here
// Version 1
var array = ['blue', 'Lincoln', 'Watermelon', 'tarhun'];
array.forEach((choice, index) => {
  console.log('My #' + (index+1) + ' choice is ' + choice);
})

// Version 2 
var fisrt = array.slice(0,1);
var second = array.slice(1,2);
var third = array.slice(2,3);
var fourth = array.slice(3)

console.log('My 1st choice ' + fisrt[0])
console.log('My 2nd choice ' + second[0])
console.log('My 3d choice ' + third[0])
console.log('My 4th choice ' + fourth[0])
