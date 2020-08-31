// Your JS code is here

// Change the body tag's style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = 'Arial, sans-serif';

// eplace the content of each of the spans (nickname, favorites, hometown) with your own information.
var nickname = document.querySelector('#nickname');
var favorites = document.querySelector('#favorites');
var hometown = document.querySelector('#hometown');
nickname.innerHTML = 'Nur';
favorites.innerHTML = 'sports, coding, tramping';
hometown.innerHTML = 'Almaty';

// Iterate through each li and add a class of "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
var listElements = document.querySelectorAll('li');
for (var i = 0; i < listElements.length; i++) {
  listElements[i].className = 'listitem';
  listElements[i].style.color = 'red';
}

// Create a new img element and set its src attribute to a picture of you. Append that element to the bod
var myPhoto = document.createElement('img');
myPhoto.src = 'https://www.canterbury.ac.nz/epecentre/people/people/1525922811390_Nurzhan-Nursultanov-photo-low.jpg';
var myPhotoStyle = myPhoto.style;
myPhotoStyle.width = '100px';
myPhotoStyle.position = 'absolute';
myPhotoStyle.margin = '20px';
myPhotoStyle.top = 0;
myPhotoStyle.right = 0;

document.body.appendChild(myPhoto);
