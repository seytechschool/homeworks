var arr = [
  {
    title: "Martin Eden ",
    year: 1880,
    alreadyRead: true
  }, 
  {
    title: "Samurai",
    year: 1990,
    alreadyRead:  true
  }, 
  {
    title: "Romeo Julietta",
    year: 1880,
    alreadyRead: false
  }, 
  {
    title: "War and Peace",
    year: 1880,
    alreadyRead: true
  }, 
];

for(var i = 0; i<arr.length; i++){
  if(arr[i].alreadyRead){
    console.log("One of my favorite books: ");
     console.log(arr[i].title + " is from " + " " + arr[i].year);
     console.log("");
  }else{
    console.log("One of my planned books to read: ")
   console.log(arr[i].title + " is from " + " " + arr[i].year)
     console.log("");

  }
}
