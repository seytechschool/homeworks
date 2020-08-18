// Your JS code is here
var book = [
    { 
    title : "Harry Potter and the Philosopher's Stone",
    author : "J. K. Rowling",
    alreadyRead : true
    },

    { 
    title : "The Hobbit",
    author : "J.R.R. Tolkien",
    alreadyRead : false
    },

    { 
    title : "11/22/63",
    author : "Stephen king",
    alreadyRead : true
    }
];

let list = document.createElement('ul');
document.body.appendChild(list);   
let images = document.querySelectorAll('img');
list.style.listStyle = 'none';


for(let i = 0; i < book.length; i++) {   
    let bookItem = document.createElement('li');
    let coverImage = document.createElement('img');
    coverImage.style.width = '200px';
    coverImage.style.height = '300px';
    coverImage.style.display = 'block';
    bookItem.style.fontSize = '30px';
    bookItem.style.lineHeight = '50px';
    bookItem.style.marginBottom = '50px';

    if(book[i].title == "Harry Potter and the Philosopher's Stone") { 
        coverImage.src = "https://vignette.wikia.nocookie.net/harrypotter/images/3/3e/Harry_Potter_and_the_Sorcerer%27s_Stone_cover.jpg/revision/latest/scale-to-width-down/222?cb=20060726180434";
        bookItem.innerHTML = book[i].title;
        bookItem.appendChild(coverImage);     
        list.appendChild(bookItem);
        if(book[i].alreadyRead == true) {
            coverImage.style.opacity = '70%';
        }
    }
    else if(book[i].title == "The Hobbit") {
        coverImage.src = "https://images-na.ssl-images-amazon.com/images/I/419UGp1CsQL._SX331_BO1,204,203,200_.jpg";   
        bookItem.innerHTML = book[i].title;
        bookItem.appendChild(coverImage);     
        list.appendChild(bookItem);
        if(book[i].alreadyRead == true) {
            coverImage.style.opacity = '70%';
        }
    }
    else if(book[i].title == "11/22/63") {

        coverImage.src = "https://images-na.ssl-images-amazon.com/images/I/51xYs7MO0dL._SX273_BO1,204,203,200_.jpg";   
        bookItem.innerHTML = book[i].title;
        bookItem.appendChild(coverImage);     
        list.appendChild(bookItem);
        if(book[i].alreadyRead == true) {
            coverImage.style.opacity = '70%';
        }
    }

}
