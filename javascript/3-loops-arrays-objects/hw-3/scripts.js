// Your JS code is here
var books = [
  {title: 'To Kill a Mockingbird', author: 'Harper Lee', alreadyRead:true},
  {title: 'The Remains of the Day', author: 'Kazuo Ishiguro', alreadyRead:true},
  {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', alreadyRead:false}
];
for (var i=0; i<books.length; i++){
  var book = books[i];
  var firstLog = (book.title + ' by ' + book.author);
  console.log(firstLog);
  if(book.alreadyRead==true){
    console.log('You already read '+firstLog);
  }
  else if(book.alreadyRead==false) {
  console.log('You still need to read '+ firstLog);
  }
}
