// Your JS code is here
var books = [ 
    { 
      title :  "Crime and Punishment" ,
      author : "Fyodor Dostoevsky",
      alreadyRead : true
    },
    
    {
      title :  "War and Peace" ,
      author : "Leo Tolstoy",
      alreadyRead : true
    },
    
    {
      title :  "The Hobbit" ,
      author : "J.R.R. Tolkien",
      alreadyRead : false
    }
    
    ]
    
    for (var i=0; i < books.length; i++) {
    if(books[i].alreadyRead == true) {
    console.log("I already read " + books[i]["title"]+ ' by '+books[i]["author"])
    }
    else {
      console.log("I still need to read " + books[i]["title"]+ ' by '+books[i]["author"])
    }
    }