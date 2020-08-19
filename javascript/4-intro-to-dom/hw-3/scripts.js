
// Your JS code is here
function bookTrucker(prop) {
  for (var x=0; x < prop.length; x++) {

    var author = document.createElement('li')
    var title = document.createElement('li')
    var image = document.createElement('li')
    var ul = document.querySelector('ul')

    var img = document.createElement("IMG");
      img.setAttribute("src", prop[x].image);
      img.setAttribute("width", "50px");
      img.setAttribute("height", "70");
      img.setAttribute("alt", "book");


    title.innerHTML = prop[x].title;
    author.innerHTML = prop[x].author;
    image.appendChild(img)
    if (prop[x].readed) {
      author.style.color = 'grey';
      title.style.color = 'grey';
    }

    ul.appendChild(author).style.listStyle = 'none';
    ul.appendChild(title).style.listStyle = 'none';
    ul.appendChild(image).style.listStyle = 'none';

  }
}


var books = [
  {author: 'Dick Bremer', title: 'Game Used', readed: true, image: 'https://prodimage.images-bn.com/pimages/9781629376974_p0_v3_s550x406.jpg'},
  {author: 'Michael Obama', title: 'Becoming', readed: false, image: 'https://prodimage.images-bn.com/pimages/9781524763152_p0_v7_s550x406.jpg'},
  {author: 'Julie Andrews', title: 'Home Works', readed: true, image: 'https://prodimage.images-bn.com/pimages/9780316349253_p0_v3_s550x406.jpg'},
  {author: 'Mary Elison', title: 'Too Much and Never Enough', readed: false, image: 'https://prodimage.images-bn.com/pimages/9781982141462_p0_v4_s550x406.jpg'},
  {author: 'Alex Trebek', title: 'The Answer is', readed: true, image: 'https://prodimage.images-bn.com/pimages/9781982157999_p0_v5_s550x406.jpg'},
];

bookTrucker(books);
