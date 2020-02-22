// Your JS code is here
// Loop Reading List

var bookList = [
    {title: '10X Rule', author: 'Grant Cardone', alreadyRead: true},
    {title: 'Interstellar', author: 'Chris Nolan', alreadyRead: true},
    {title: 'Harry Potter', author: 'Joanne Rowling', alreadyRead: false}
]
    
    for (i=0; i < bookList.length; i++) {
    if (bookList[i].alreadyRead === true) {
    console.log('You already read ' + bookList[i].title + ' by ' + bookList[i].author)
  } else {
    console.log('You still need to read ' + bookList[i].title + ' by ' + bookList[i].author)
  }
}
  

