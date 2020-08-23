// Your JS code is here
var books = [
  { title: "red book", author: "tomato", isRead: true },
  { title: "green book", author: "cucumber", isRead: true },
  { title: "orange book", author: "orange", isRead: false },
  { title: "yellow book", author: "lemon", isRead: false },
];

for (var i = 0; i < books.length; i++) {
  if (books[i].isRead) {
    console.log(
      "You already read " +
        '"' +
        books[i].title +
        '"' +
        " by " +
        books[i].author
    );
  } else {
    console.log(
      "You still need to read " +
        '"' +
        books[i].title +
        '"' +
        " by " +
        books[i].author
    );
  }
}
