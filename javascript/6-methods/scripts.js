// # JavaScript Homeworks from Class 6

// ### Display the position of the first occurrence of "World" in the variable txt

// ```
var txt = "Hello World";
//     // your answer goes here
// ```
console.log(txt.indexOf('World'))

// ### Use the splice() method to remove "Orange" and "Apple" from fruits.

// ```
var fruits = ["Banana", "Orange", "Apple", "Kiwi"];
//     // your answer goes here
// ```

console.log(fruits.splice(1,2))

// ### Use the concat() method to concatenate girls and boys.

// ```
var girls = ["Cecilie", "Lone"];
var boys = ["Emil", "Tobias", "Linus"];
//     // your answer goes here
// ```
console.log(girls.concat(boys))

// ### Create an object called "User". Give any 4 properties(key, values) to it.

var students = {
    fname: 'Emil',
    lname: 'Muratov',
    country: 'Kyrgyzstan',
    age: 25,
    isMarried: true
}

//     Then use methods or loop to get the keys and values of User object.
// Methods
console.log(Object.keys(students))
console.log(Object.values(students))

// Loop for object keys
var keysArray = []
for(var key in students){
    keysArray.push(key)
}
console.log(keysArray)

// Loop for object values
var valuesArray = []
for(var key in students){
    valuesArray.push(students[key])
}
console.log(valuesArray)

// #### If you stuck please reach out to mentors/instructors

// `// your answer goes here`

