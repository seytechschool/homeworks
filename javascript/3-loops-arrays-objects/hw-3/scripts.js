// Your JS code is here
let books = [
  { 
    title: "Sherlock Holmes",
    author: "Conan Doyle",
    alreadyRead: true
  },
  {
    title: "The Messenger of God",
    author: "Fethullah Gulen",
    alreadyRead: true
  },
  {
    title: "The Hobbit",
    author: "R.R.J. Tolkien",
    alreadyRead: false
  },
  {
    title: "Data Structures and Algorithms in C++",
    author: "Michael T. Goodrich",
    alreadyRead: false
  },
  {
    title: "Harry Potter",
    author: "J. Rolling",
    alreadyRead: true
  } 
]
for (let i = 0; i < books.length; i++) {
  if (books[i].alreadyRead) {
    console.log(`You already read ${books[i].title} by ${books[i].author} `)
  }
  else {
    console.log(`You still need to read ${books[i].title} by ${books[i].author} `)
  }
}
