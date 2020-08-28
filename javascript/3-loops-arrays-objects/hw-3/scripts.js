// Your JS code is here
var array = [
    { title:'The Hobbit', 
      author: 'J.R.R. Tolkien',
      alreadyRead: false
    }, 
    { title:'The Prince',
      author: 'Niccolo Machiavelli',
      alreadyRead: true
    },
    { title:'Sapiens: A Brief History of Humankind', 
      author: 'Yuval Noah Harari',
      alreadyRead: true
    },
    { title:'The Kite Runner', 
      author: 'Khaled Hosseini',
      alreadyRead: true
    },
    { title:'The Titan',
      author: 'Theodore Dreiser',
      alreadyRead: false
    }
  ]
  
   for (i = 0; i < array.length; i++) { 
    if (array[i].alreadyRead){
      console.log('You already read: '+ array[i].title + " " + array[i].author);
    }
    else{
      console.log('You still need to read: '+ array[i].title +' '+array[i].author)
    }
    console.log()
   }