// Your JS code is here



//1. Display the position of the first occurrence of "World" in the variable txt

var txt = "Hello World"; 
var a = txt.indexOf('World');
console.log(a);


//2. Use the splice() method to remove "Orange" and "Apple" from fruits.

var fruits = ["Banana", "Orange", "Apple", "Kiwi"];
var removeItem = fruits.splice(2, 2);

console.log(fruits);
console.log(removeItem);     


//3. Use the concat() method to concatenate girls and boys.

var girls = ["Cecilie", "Lone"];
var boys = ["Emil", "Tobias", "Linus"];  

var girlsAndBoys = girls.concat(boys);

console.log(girlsAndBoys);
