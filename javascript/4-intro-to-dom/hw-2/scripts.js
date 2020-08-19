// Your JS code is here
document.body.style.fontFamily = 'Arial, sans-serif';
document.getElementById('nickname').innerHTML = 'Brooklyn';
document.getElementById('favorites').innerHTML = 'Bronx';
document.getElementById('hometown').innerHTML = 'Queens';

var items = document.getElementsByTagName('li');

for (var i = 0; i < items.length; i++) {
   items[i].className = 'listitem';
}

 var image = document.createElement('img');

 image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHQFyHLCS2dlOh_8wqiWfpG-iMbAc20KYOqg&usqp=CAU';

 document.body.appendChild(myPic);
