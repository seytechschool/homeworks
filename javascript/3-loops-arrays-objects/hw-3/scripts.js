// // Your JS code is here

// # JavaScript Homeworks from Class 3

// ## Section - Loops, Arrays & Objects

// ### 3. The Reading List

// Keep track of which books you read and which books you want to read!

// - Create an array of objects, where each object describes a book and has properties for 
// the title (a string), author (a string), and alreadyRead (a boolean indicating if you 
// read it yet).
// - Iterate through the array of books. For each book, log the book title and book author 
// like so: "The Hobbit by J.R.R. Tolkien".
// - Now use an if/else statement to change the output depending on whether you read it yet 
// or not. If you read it, log a string like 'You already read "The Hobbit" 
// by J.R.R. Tolkien', and if not, log a string like 'You still need to read 
// "The Lord of the Rings" by J.R.R. Tolkien.'

var arrayList = [
    {title: 'The Splendid and the Vile', author: 'Erik Larson', alreadyRead: true},
    {title: 'All Adults Here', author: 'Emma Straub', alreadyRead: false},
    {title: 'Malorie', author: 'Josh Malerman', alreadyRead: true},
    {title: 'Death in her hands', author: 'Ottessa Moshfegh', alreadyRead: false},
]

for (var i = 0; i < arrayList.length; i++) {
    // console.log(arrayList[i].title);
    if (arrayList[i].alreadyRead == true) {
        console.log('You already read ' + '"' + arrayList[i].title + '"' + ' by ' + arrayList[i].author);
    }
    else {
      console.log('You still need to read ' + '"' + arrayList[i].title + '"' + ' by ' + arrayList[i].author);
    }
}