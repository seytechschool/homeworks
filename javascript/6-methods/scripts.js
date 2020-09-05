// Display the position of the first occurrence of "World" in the variable txt

var txt = 'Hello World';
console.log(txt.indexOf('World'));

// Use the splice() method to remove "Orange" and "Apple" from fruits.

var fruits = ['Banana', 'Orange', 'Apple', 'Kiwi'];
fruits.splice(1, 2);
console.log(fruits);

// Use the concat() method to concatenate girls and boys.

var girls = ['Cecilie', 'Lone'];
var boys = ['Emil', 'Tobias', 'Linus'];

console.log(girls.concat(boys));

// Create an object called "User". Give any 4 properties(key, values) to it.

var user = {
  firstName: 'John',
  lastName: 'Smith',
  age: 25,
  city: 'Los Angeles',
};

var allKeys = Object.keys(user);
var allValues = Object.values(user);
console.log(allKeys);
console.log(allValues);

for (aKey in user) {
  console.log(`${aKey} : ${user[aKey]}`);
}
