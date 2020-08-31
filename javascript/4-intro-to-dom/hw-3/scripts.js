// Your JS code is here

var data = [
  {
    id: 1,
    title: 'School Zone',
    author: 'Joan Hoffman',
    url: 'https://images-na.ssl-images-amazon.com/images/I/61xTjuVrwsL._AC_SX368_.jpg',
    statusRead: true,
  },
  {
    id: 2,
    title: 'My First Learn to Write Workbook',
    author: 'Crystal Radke',
    url: 'https://images-na.ssl-images-amazon.com/images/I/516Bwd1ubwL._AC_SX368_.jpg',
    statusRead: true,
  },
  {
    id: 3,
    title: 'Our Class is a Family',
    author: 'Shannon Olsen',
    url: 'https://images-na.ssl-images-amazon.com/images/I/510g8NLbpNL._AC_SX184_.jpg',
    statusRead: false,
  },
  {
    id: 4,
    title: 'If Animals Kiss Good Night',
    author: ['Ann Whitford Paul', 'David Walker'],
    url: 'https://images-na.ssl-images-amazon.com/images/I/51iHM-M+ADL._AC_SX368_.jpg',
    statusRead: false,
  },
  {
    id: 5,
    title: 'I Love You to the Moon and Back',
    author: ['Amelia Hepworth', 'Tim Warnes'],
    url: 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._AC_SX184_.jpg',
    statusRead: false,
  },
  {
    id: 6,
    title: "Giraffes Can't Dance",
    author: ['Giles Andreae', 'Guy Parker-Rees'],
    url: 'https://images-na.ssl-images-amazon.com/images/I/51qvh4MALwL._AC_SX368_.jpg',
    statusRead: false,
  },
  {
    id: 7,
    title: 'Big Kindergarten',
    author: 'Joan Hoffman',
    url: 'https://images-na.ssl-images-amazon.com/images/I/512p5VaJ42L._SX375_BO1,204,203,200_.jpg',
    statusRead: true,
  },
  {
    id: 8,
    title: 'Little Thinkers',
    author: 'Joan Hoffman',
    url: 'https://images-na.ssl-images-amazon.com/images/I/81RTIWY2oBL._AC_UL480_SR345,480_.jpg',
    statusRead: true,
  },
];

body = document.querySelector('body');
body.style.margin = '0px';
body.style.padding = '0px';

var title = document.querySelector('h1');
title.style.textAlign = 'center';

var main = document.createElement('main');
body.appendChild(main);

var backgroundImg = document.createElement('img');
backgroundImg.className = 'background-image';
backgroundImg.src = 'https://cdn.pixabay.com/photo/2015/10/17/09/04/bookshelf-992277_1280.png';
main.appendChild(backgroundImg);
var imgHeight = backgroundImg.clientHeight;
var imgWidth = backgroundImg.clientWidth;
main.style.width = imgWidth + 'px';
main.style.height = imgHeight + 'px';
var vertical_shift_completed = Math.floor((imgHeight * 45) / 425);
var vertical_shift_future = Math.floor((imgHeight * 40) / 425);

var completedTitle = document.createElement('h3');
completedTitle.textContent = 'Completed';
completedTitle.className = 'shelf-title';
var completedBooks = document.createElement('section');
completedBooks.className = 'shelf completed-books-shelf';
completedBooks.style.width = Math.floor((imgWidth * 375) / 430) + 'px';
completedBooks.style.height = Math.floor((imgHeight * 158) / 425) + 'px';
completedBooks.style.marginTop = vertical_shift_completed + 'px';
main.appendChild(completedBooks);
completedBooks.appendChild(completedTitle);

var futureTitle = document.createElement('h3');
futureTitle.textContent = 'For Future Read';
futureTitle.className = 'shelf-title';
var futureBooks = document.createElement('section');
futureBooks.className = 'shelf future-books-shelf';
futureBooks.style.width = Math.floor((imgWidth * 375) / 430) + 'px';
futureBooks.style.height = Math.floor((imgHeight * 148) / 425) + 'px';
futureBooks.style.marginBottom = vertical_shift_future + 'px';
main.appendChild(futureBooks);
futureBooks.appendChild(futureTitle);

var queueCompleted = [];
var hiddenCompleted = [];
var queueFuture = [];
var hiddenFuture = [];

for (var i = 0; i < data.length; i++) {
  if (data[i].statusRead && queueCompleted.length < 3) {
    queueCompleted.push(data[i]);
  } else if (!data[i].statusRead && queueFuture.length < 3) {
    queueFuture.push(data[i]);
  } else if (data[i].statusRead) {
    hiddenCompleted.push(data[i]);
  } else {
    hiddenFuture.push(data[i]);
  }
}

// initial render
renderBooks(queueFuture, 'future');
renderBooks(queueCompleted, 'completed');
addCaruselButtons('completed');
addCaruselButtons('future');

// action functions
function renderBooks(arr, shelf) {
  clearAllBooks(shelf);
  for (var i = 0; i < arr.length; i++) {
    var book = document.createElement('div');
    book.className = 'books';
    book.addEventListener('click', function () {});
    book.id = arr[i].id;
    book.style.width = imgWidth * 0.25 + 'px';
    book.addEventListener('click', changeStatus);
    if (arr[i].statusRead) {
      completedBooks.append(book);
    } else {
      futureBooks.append(book);
    }
    var bookCover = document.createElement('img');
    bookCover.src = arr[i].url;
    bookCover.className = 'book-cover';
    book.appendChild(bookCover);
  }
}

function clearAllBooks(shelf) {
  var allBooksOnShelf;

  if (shelf === 'completed') {
    allBooksOnShelf = completedBooks.querySelectorAll('.books');
  } else if (shelf === 'future') {
    allBooksOnShelf = futureBooks.querySelectorAll('.books');
  }

  for (var i = 0; i < allBooksOnShelf.length; i++) {
    allBooksOnShelf[i].remove();
  }
}

function changeStatus() {
  var targetId = event.path[1].id;
  var bookStatus = data[targetId - 1].statusRead;
  var selectedBook;
  if (bookStatus) {
    for (var i = 0; i < queueCompleted.length; i++) {
      if (queueCompleted[i].id.toString() === targetId) {
        queueCompleted[i].statusRead = false;
        selectedBook = queueCompleted[i];
        queueCompleted.splice(i, 1);
        if (queueFuture.length === 3) {
          queueFuture.unshift(selectedBook);
          hiddenFuture.unshift(queueFuture.pop());
        } else {
          queueFuture.unshift(selectedBook);
        }
        if (hiddenCompleted.length > 0) {
          queueCompleted.push(hiddenCompleted.pop());
        }
      }
    }
  } else {
    for (var i = 0; i < queueFuture.length; i++) {
      if (queueFuture[i].id.toString() === targetId) {
        queueFuture[i].statusRead = true;
        selectedBook = queueFuture[i];
        queueFuture.splice(i, 1);
        if (queueCompleted.length === 3) {
          queueCompleted.unshift(selectedBook);
          hiddenCompleted.unshift(queueCompleted.pop());
        } else {
          queueCompleted.push(selectedBook);
        }
        if (hiddenFuture.length > 0) {
          queueFuture.push(hiddenFuture.pop());
        }
      }
    }
  }
  renderBooks(queueFuture, 'future');
  renderBooks(queueCompleted, 'completed');
}

function addCaruselButtons() {
  if (hiddenCompleted.length > 0) {
    var buttonLeftCompleted = document.createElement('div');
    buttonLeftCompleted.className = 'scroll-button left';
    buttonLeftCompleted.innerHTML = "<div class='left-div'> </div>";
    completedBooks.appendChild(buttonLeftCompleted);
    var buttonRightCompleted = document.createElement('div');
    buttonRightCompleted.className = 'scroll-button right';
    buttonRightCompleted.innerHTML = "<div class='right-div'> </div>";
    completedBooks.appendChild(buttonRightCompleted);
    buttonLeftCompleted.addEventListener('click', function (event) {
      rotateBooks(event, 'completed', 'left');
    });
    buttonRightCompleted.addEventListener('click', function (event) {
      rotateBooks(event, 'completed', 'right');
    });
  }

  if (hiddenFuture.length > 0) {
    var buttonLeftFuture = document.createElement('div');
    buttonLeftFuture.className = 'scroll-button left';
    buttonLeftFuture.innerHTML = "<div class='left-div'> </div>";
    futureBooks.appendChild(buttonLeftFuture);
    var buttonRightFuture = document.createElement('div');
    buttonRightFuture.className = 'scroll-button right';
    buttonRightFuture.innerHTML = "<div class='right-div'> </div>";
    futureBooks.appendChild(buttonRightFuture);
    buttonLeftFuture.addEventListener('click', function (event) {
      rotateBooks(event, 'future', 'left');
    });

    buttonRightFuture.addEventListener('click', function (event) {
      rotateBooks(event, 'future', 'right');
    });
  }
}

function rotateBooks(event, shelf, direction) {
  if (shelf === 'completed') {
    if (direction === 'left') {
      hiddenCompleted.push(queueCompleted.pop());
      queueCompleted.unshift(hiddenCompleted.shift());
    } else if (direction === 'right') {
      hiddenCompleted.unshift(queueCompleted.shift());
      queueCompleted.push(hiddenCompleted.pop());
    }
    renderBooks(queueCompleted, 'completed');
  } else if (shelf === 'future') {
    if (direction === 'left') {
      hiddenFuture.push(queueFuture.pop());
      queueFuture.unshift(hiddenFuture.shift());
    } else if (direction === 'right') {
      hiddenFuture.unshift(queueFuture.shift());
      queueFuture.push(hiddenFuture.pop());
    }
    renderBooks(queueFuture, 'future');
  }
}
