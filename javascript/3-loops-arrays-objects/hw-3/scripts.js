// Your JS code is here
var myLibrary = [
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    yearPublished: '2008',
    publisher: 'Vintage',
    language: 'Russian',
    availableToBorrow: true,
    alreadyRead: true,
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoyevsky',
    yearPublished: '2001',
    publisher: 'Dover Publications',
    language: 'Russian',
    availableToBorrow: false,
    alreadyRead: false,
  },
  {
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupery',
    yearPublished: '2000',
    publisher: 'Mariner Books',
    language: 'English',
    availableToBorrow: true,
    alreadyRead: false,
  },
];

function libraryChecker() {
  var result = '';
  for (var i = 0; i < myLibrary.length; i++) {
    title = myLibrary[i].title;
    author = myLibrary[i].author;
    alreadyRead = myLibrary[i].alreadyRead;
    if (alreadyRead) {
      result += `'${title}' written by ${author} has been read\n`;
    } else {
      result += `'${title}' written by ${author} hasn't been read yet\n`;
    }
  }
  return result;
}

console.log(libraryChecker());

// expected output:
// 'War and Peace' written by Leo Tolstoy has been read
// 'Crime and Punishment' written by Fyodor Dostoyevsky hasn't been read yet
// 'The Little Prince' written by Antoine de Saint-Exupery hasn't been read yet
