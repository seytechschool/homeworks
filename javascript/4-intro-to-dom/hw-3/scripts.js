var books = [
  {title: 'To Kill a Mockingbird', author: 'Harper Lee', alreadyRead:true},
  {title: 'The Remains of the Day', author: 'Kazuo Ishiguro', alreadyRead:true},
  {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', alreadyRead:false}
];
for(var i = 0; i<books.length; i++){
  var bookTitle = books[i].title;
  var newParagraph = document.createElement('p')
  newParagraph.appendChild(document.createTextNode(books[i].title));
  document.body.appendChild(newParagraph);
  console.log(bookTitle[0]);
  }
  
