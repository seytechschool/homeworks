// Your JS code is here
var books=[{name:'war and peace',author:'Leo'},
            {name:'message in a bootle',author:'Nicholas'},
            {name:'delbirim',author:'Aitmatov'},
            {name:'faust',author:'Goethe'}]

for (var i=0;i<books.length;i++){
  console.log('the book ',books[i].name,'written by',books[i].author)
}

var person = prompt("Please enter your book name:");
if (person=='delbirim'){
  console.log('you havent read this yet')
}
else{
  console.log('you ve read it ')
}