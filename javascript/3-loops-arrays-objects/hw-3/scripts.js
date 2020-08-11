// Your JS code is here
var books = [
  {
    title: 'Pinocchio',
    author: 'Carlo Collodi',
    isRead: true,
  },
   {
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupery',
    isRead: true,
  },
   {
    title: 'War and Piece',
    author: 'Leo Tolstoy',
    isRead: false,
  },
   {
    title: 'The Idiot',
    author: 'Fyodor Dostoevsky',
    isRead: false,
  }
]

// Version 1
books.forEach(function(book) {
  if(book.isRead) {
    console.log('You already read ' + '"' + book.title + '"' + ' by ' + book.author)
  } else {
     console.log('You still need to read ' + '"' + book.title + '"' + ' by ' + book.author)
  }
})

// Version 2
books.forEach((book) => {
  if(book.isRead) {
    console.log(`You already read "${book.title}" by ${book.author}`)
  } else {
     console.log(`You still need to read "${book.title}" by ${book.author}`)
  }
})
