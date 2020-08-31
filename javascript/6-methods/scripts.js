// ### Display the position of the first occurrence of "World" in the variable txt
var txt = "Hello World";

function changeOrder(){
  var firstSplit = txt.split(" ");
  // console.log(firstSplit)
  var secondReverse = firstSplit.reverse();
  // console.log(secondReverse)
  var thirdJoin = secondReverse.join();
  // console.log(thirdJoin)
  var newOrder = thirdJoin.split(',').join(' ');
  console.log(newOrder)
 }
changeOrder(txt)


// ### Use the splice() method to remove "Orange" and "Apple" from fruits.
var fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.splice(1,2);
console.log(fruits)


// ### Use the concat() method to concatenate girls and boys.
var girls = ["Cecilie", "Lone"];
var boys = ["Emil", "Tobias", "Linus"];
var result = girls.concat(boys);
console.log(result)


// ### Create an object called "User". Give any 4 properties(key, values) to it.
var user = {
    firstName: 'Farkhat',
    lastName: 'Saliyev',
    location: 'San Diego',
    age: '25',
  }

//     Then use methods or loop to get the keys and values of User object.
  for (var data of Object.entries(user)){
    avar join = data.join();
    // console.log(join)
    var newData = join.split(',').join(': ');
    console.log(newData) 
  }