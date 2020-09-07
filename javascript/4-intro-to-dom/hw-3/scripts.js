// Your JS code is here

    //Header
   var pageBody = document.getElementsByTagName('body')[0];
   var header = document.createElement('h1')
   var text = document.createTextNode('My Book List')
   header.appendChild(text); 
   pageBody.appendChild(header);
   header.style.textAlign = 'center';
    
    
    var books = [ 
    { 
      title :  "Crime and Punishment" ,
      author : "Fyodor Dostoevsky",
      alreadyRead : true,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSh88Bi2nqwm7V5BJO3xUhVu6mhyOUWfohUzA&usqp=CAU'
    },
    
    {
      title :  "War and Peace" ,
      author : "Leo Tolstoy",
      alreadyRead : true,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtbfxNaCIKMet7NJzvuhnf0cEnwAb1njFx4Q&usqp=CAU'
    },
    
    {
      title :  "Shantaram" ,
      author : "Gregory David Roberts",
      alreadyRead : false,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmNIzFhG1IbDX4RuMAGuAqKJBUS8etLgtf5Yf0zwy-snoCD4i0t9Ize9ltDA&usqp=CAc'
    }
    
    ]
    
   
    //List ; Paragraph ; AlreadyRead ; Img
    for ( var i = 0; i < books.length; i++) {
      var book = books[i];
      var bookList = document.createElement('ul');
      var list = document.createElement('li')
      var par = document.createElement('p');
      var bookImg = document.createElement('img');
      list.appendChild(bookImg);
      list.style.listStyleType = "none";
      bookImg.src = books[i].img;
      bookImg.style.height = '150px'
      bookImg.style.width = '150px'
      list.style.padding = '10px'
      bookImg.style.paddingRight = '10px';
      var parText = document.createTextNode(book.title + ' by ' + book.author);
      
       pageBody.appendChild(bookList)
       bookList.appendChild(list)
       pageBody.appendChild(par);
       list.appendChild(parText);
      
      
      
      if (book.alreadyRead == true) {
        list.style.fontWeight = 'bold'
        list.style.color = 'green'
      }
      
      else {
        list.style.color = 'red'
      }
      
    }   
    
    
 