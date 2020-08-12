// Your JS code is here
// Task #1
var txt = "Hello World";
var index = txt.indexOf('World'); 
console.log(index)

// Task #2
var fruits = ["Banana", "Orange", "Apple", "Kiwi"];
var newArr = fruits.splice(1,2);
console.log(fruits)

// Task #3
var girls = ["Cecilie", "Lone"];
var boys = ["Emil", "Tobias", "Linus"];
var boysAndGirls = girls.concat(boys);
console.log(boysAndGirls);

// Task #4
var user = {
  fistname: 'John',
  lastname: 'Doe',
  age: 29,
  location: 'NY'
}

for(value in user) {
  console.log(value + ' : ' + user[value])
}
