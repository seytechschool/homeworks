// - Add a script tag to the bottom.
// - (In JavaScript) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// - (In JavaScript) Replace the content of each of the spans (nickname, favorites, hometown) with your own information.
// - Iterate through each li and add a class of "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// - Create a new img element and set its src attribute to a picture of you. Append that element to the body.

    // Your JS code is here
var bodyPage = document.querySelector('body');
var nickName = document.querySelector('#nickname');
var myFavorites = document.querySelector('#favorites');
var homeTown = document.querySelector('#hometown');
var liLists = document.getElementsByTagName('li');

var myImg = document.createElement('img');
myImg.src = 'https://amp.insider.com/images/5d5579e44afbf940be1130d2-750-562.jpg';
myImg.style.width = '300px';

bodyPage.appendChild(myImg);
bodyPage.style.fontFamily = "Arial, sans-serif";
nickName.textContent = 'Aza';
myFavorites.textContent = "Ferrari, Chicago, Pilav, Table Tennis";
homeTown.textContent = "Batken, KYRGYZSTAN";

for(var i=0;i<liLists.length;i++){
    liLists[i].setAttribute('class','listitem');
    document.getElementsByClassName('listitem')[i].style.color = 'red';
}