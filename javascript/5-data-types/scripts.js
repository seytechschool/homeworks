// Your JS code is here
// # JavaScript Homeworks from Class 5

// ### Create these functions

// - Create a function which returns number of even numbers from a given array of numbers
// var arrayList1 = [2, 10, 7, 3, 14, 25, 33];

// function arrayOfEvenNumbers(arr) {
//     var newArray = [];
//     for(var i=0;i<arr.length;i++) {
//         if (arr[i] % 2 === 0){
//             newArray.push(arr[i]);
//         }
//     }
//     return newArray;
// }

// var output = arrayOfEvenNumbers(arrayList1);
// console.log(output); // --> [2, 10, 14]

// - Create a function to find how many even numbers between given 2 numbers
// function howManyEvenNumbers(num1, num2){
//     if (num1 % 2 === 0 && num2 % 2 === 0){
//         return 2;
//     }
//     else if(num1 % 2 === 0 || num2 % 2 === 0){
//         return 1;
//     }
//     else {
//         return 0;
//     }
// }

// console.log(howManyEvenNumbers(2, 5)); // --> 1
// console.log(howManyEvenNumbers(4, 4)); // --> 2
// console.log(howManyEvenNumbers(7, 7)); // --> 0

// - Create a function to find the highest value in an array
var arrayList2 = [2, 10, 45, 3, 14, 25, 33];
function highestValueInArray(arr){
    var result = Math.max.apply(null, arr);
    return result;
}

var output = highestValueInArray(arrayList2);
console.log(output); // --> 33

// - Create a function to find the lowest value in an array
// - Create a function to calculate sum all numbers from a given array
// - Create a function to calculate power of a number `power(2, 3)`
// - Create a function to check if all values in an array are same types
// - Create a function to get the greatest common divisor (gcd) of two integers `gcd(12, 8) // 4`

// #### If you stuck please reach out to mentors/instructors
