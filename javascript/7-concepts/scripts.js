// Your JS code is here

// Display the position of the first occurrence of "World" in the variable txt
let txt = 'Hello World';
let firstOccurance = (text) => text.indexOf('World');

console.log(firstOccurance(txt));

// Use the splice() method to remove "Orange" and "Apple" from fruits.
let fruits = ['Banana', 'Orange', 'Apple', 'Kiwi'];
let removeAppleOrange = (arr) => {
  fruits.splice(1, 2);
  return fruits;
};

console.log(removeAppleOrange(fruits));

// Use the concat() method to concatenate girls and boys.
let girls = ['Cecilie', 'Lone'];
let boys = ['Emil', 'Tobias', 'Linus'];

let concatStudents = (arr1, arr2) => {
  let students = arr1;
  return students.concat(arr2);
};

console.log(concatStudents(girls, boys));

// Create an object called "User". Give any 4 properties(key, values) to it.
let User = {
  firstName: 'John',
  lastName: 'Smith',
  age: '21',
  printInfo: function () {
    return `${this.firstName} ${this.lastName} is ${this.age} years old.`;
  },
};

console.log(User.printInfo());
