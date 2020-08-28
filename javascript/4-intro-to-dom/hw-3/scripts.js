// Your JS code is here
var array = [
    { img: 'https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg',
      title:'The Hobbit', 
      author: 'J.R.R. Tolkien',
      alreadyRead: false,
    }, 
    { img: 'https://images-na.ssl-images-amazon.com/images/I/41eOgyh6J0L._SX331_BO1,204,203,200_.jpg',
      title:'The Prince',
      author: 'Niccolo Machiavelli',
      alreadyRead: true,
    },
    { img: 'https://images-na.ssl-images-amazon.com/images/I/41+lolL22gL.jpg',
      title:'Sapiens: A Brief History of Humankind', 
      author: 'Yuval Noah Harari',
      alreadyRead: true,
    },
    { img:'https://images-na.ssl-images-amazon.com/images/I/81RUfP0ZOjL.jpg',
      title:'The Kite Runner', 
      author: 'Khaled Hosseini',
      alreadyRead: true,
    },
    { img:'https://m.media-amazon.com/images/I/51JMzhi2inL.jpg',
      title:'The Titan',
      author: 'Theodore Dreiser',
      alreadyRead: false,
    }
  ];

    var list = document.createElement('ul');
      for (i = 0; i < array.length; i++) {
        var item = document.createElement('li');
        item.style.listStyleType = 'none';
        item.style.backgroundColor = 'lightyellow';
        item.style.padding = '10px';
        item.style.margin = '10px';
        item.style.width = '200px';
        item.style.borderRadius = '10px';
        
          if(array[i].alreadyRead === true){
             //console.log(array[i].alreadyRead)
            var pTag = document.createElement('p'); 
            var description = document.createTextNode('Already read');
            pTag.style.fontSize = '15px';
            pTag.style.fontWeight = 'bold';
            pTag.style.backgroundColor = 'lightgreen';
            pTag.style.width = '90px';
            pTag.style.padding = '5px';
            pTag.style.borderRadius = '10px';
            pTag.appendChild(description);
            item.appendChild(pTag);    
          }else{
            //console.log(array[i].alreadyRead)
            var pTag = document.createElement('p'); 
            var description = document.createTextNode('Want to read');
            pTag.style.fontSize = '15px';
            pTag.style.fontWeight = 'bold';
            pTag.style.backgroundColor = 'red';
            pTag.style.width = '90px';
            pTag.style.padding = '5px';
            pTag.style.borderRadius = '10px';
            pTag.appendChild(description);
            item.appendChild(pTag);    
          }; 
        list.appendChild(item);
    
        var img = document.createElement('img');
        img.src = array[i].img;
        img.style.marginLeft = '33px';
        img.style.height = '200px';
        item.appendChild(img);
        
        var pTag = document.createElement('p'); 
        var description = document.createTextNode(array[i].title +' by ' + array[i].author);
        pTag.style.fontSize = '20px';
        pTag.style.fontWeight = 'bold';
        pTag.appendChild(description);
        item.appendChild(pTag);    
      };

    document.body.appendChild(list);