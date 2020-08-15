// Your JS code is here
var book = [
    { 
    title : "Harry Potter and the Philosopher's Stone",
    author : "J. K. Rowling",
    alreadyRead : true
    },

    { 
    title : "The Hobbit",
    author : "J.R.R. Tolkien",
    alreadyRead : false
    },

    { 
    title : "11/22/63",
    author : "Stephen king",
    alreadyRead : true
    }
];

for(let i = 0; i < book.length; i++) {
    if(book[i].alreadyRead == true) {
        console.log('You already read "' + book[i].title + '" by ' + book[i].author); 
    }
    else {
        console.log('You still need to read "' + book[i].title + '" by ' + book[i].author); 
    }   
}