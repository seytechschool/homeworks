document.body.style.fontFamily='Arial, san-serif';

document.getElementById('nickname').innerText = 'Ulan';
document.getElementById('favorites').innerText = 'Soccer';
document.getElementById('hometown').innerText = 'Bishkek';

var list = document.getElementsByTagName('li');
for(var i = 0; i<list.length; i++){
  list[i].className = 'listitem';
  list[i].style.color = 'red';
};

var image = document.createElement('img');
document.body.appendChild(image);
image.setAttribute('src', '#');


