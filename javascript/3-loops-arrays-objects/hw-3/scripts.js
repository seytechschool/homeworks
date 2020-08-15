function bookTrucker(prop) {
  for (var x=0; x < prop.length; x++) {
    if (prop[x].readed) {
      console.log(`I have already read the book called ${prop[x].title} which written by ${prop[x].author}!`)
    }
  }
}


var books = [
  {author: 'Erik Ambler', title: 'A King Of Anger', readed: true},
  {author: 'David Almond', title: 'Skelling', readed: false},
  {author: 'Kate Atkinson', title: 'Life after Life', readed: true},
  {author: 'Victoria Aveyard', title: 'War Storm', readed: false},
  {author: 'Paul Auster', title: 'The Brooklyn Follies', readed: true},
];

bookTrucker(books);
