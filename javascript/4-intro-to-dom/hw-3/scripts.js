// Your JS code is here
// Create a webpage with an `h1` of "My Book List".
var h1 = document.createElement("h1");
h1.style.textAlign = "center";
h1.innerText = "My Book List";
document.body.appendChild(h1);

// Copy the array of books from the previous exercise.
var books = [
  { title: "red book", author: "tomato", isRead: true },
  { title: "green book", author: "cucumber", isRead: true },
  { title: "orange book", author: "orange", isRead: false },
  { title: "yellow book", author: "lemon", isRead: false },
];
// Iterate through the array of books. For each book, create a `p` element with the book title and author and append it to the page.

var divContainer = document.createElement("div");
var ul = document.createElement("ul");

// MAIN DIV style
divContainer.style.display = "flex";
divContainer.style.flexDirection = "column";
divContainer.style.height = "80vh";
divContainer.style.fontSize = "20px";

for (var i = 0; i < books.length; i++) {
  var divBook = document.createElement("div");
  var img = document.createElement("img");
  var p1 = document.createElement("p");
  var ul = document.createElement("ul");
  var p2 = document.createElement("p");
  var li1 = document.createElement("li");
  var li2 = document.createElement("li");

  // have read already or not check
  if (books[i].isRead) {
    p1.style.background = "green";
    p1.style.color = "white";
    p2.style.background = "green";
    p2.style.color = "white";
  } else {
    p1.style.background = "yellow";
    p2.style.background = "yellow";
  }

  // IMG STYLES
  img.src =
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-poster-template-d0003e2ab393fa2c982a0de15a607486.jpg?ts=1563365780";
  img.style.minWidth = "10%";
  img.style.height = "100%";

  // UL STYLES
  ul.style.listStyle = "none";
  ul.style.width = "70%";
  ul.style.boxSizing = "border-box";

  // LI STYLES
  li1.style.margin = "0";
  li2.style.padding = "0";

  // Paragraph STYLES
  p1.style.display = "inline-block";
  p1.style.borderRadius = "10px";
  p2.style.borderRadius = "10px";
  p1.style.padding = "10px";
  p2.style.padding = "10px";
  p1.style.marginBottom = "5px";
  p2.style.margin = "0";
  p2.style.display = "inline-block";

  // BOOK WRAPPER DIV STYLES
  divBook.style.display = "flex";
  divBook.style.justifyContent = "center";
  divBook.style.alignItems = "center";
  divBook.style.width = "100%";
  divBook.style.height = "50%";
  divBook.style.margin = "5px 0";
  divBook.style.padding = "5px 0";
  divBook.style.boxSizing = "border-box";
  divBook.style.background = "#888";

  li1.innerText = "Title: ";
  li2.innerText = "Author: ";
  p1.innerText = books[i].title;
  p2.innerText = books[i].author;
  li1.appendChild(p1);
  li2.appendChild(p2);
  ul.appendChild(li1);
  ul.appendChild(li2);

  divBook.appendChild(img);
  divBook.appendChild(ul);
  divContainer.appendChild(divBook);
}

var textNote = document.createTextNode(
  "GREEN - already have read. YELLOW - will read soon"
);
document.body.appendChild(divContainer);
document.body.appendChild(textNote);
