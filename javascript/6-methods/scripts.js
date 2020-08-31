// Your JS code is here
// Task 1
var world = 'world';
console.log(world[0])

// Task 2

var fruits = ['Banana', 'Orange', 'Apple', 'Kiwi'];
var res = fruits.splice(1,1)

console.log(fruits)
// Task 3
var girls = ['Max', 'John', 'Erik'];
var boys = ['Jane', 'Anna', 'Elya'];

var trans = boys.concat(girls)
console.log(trans)

// Task 4
const obj = {
  sport: 'voleyball',
  travel: 12
}

for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
