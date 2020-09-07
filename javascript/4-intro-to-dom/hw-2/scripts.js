// Your JS code is here
  var body = document.querySelector('body');
  var list = document.getElementsByTagName('li')  
  var nickname = document.getElementById('nickname');
  var favorites = document.getElementById('favorites');
  var hometown = document.getElementById('hometown')  
  
  nickname.textContent = 'Atonya';
  favorites.textContent = 'Judo';
  hometown.textContent = 'Bishkek';
 
  
 var pageBody = document.getElementsByTagName('body')[0];

 pageBody.style.fontFamily = "Arial, sans-serif";
 pageBody.style.backgroundColor = 'lightgrey';  
    
 var img = document.createElement('img');
 img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaS29JLWTV6_WwQeDgYPrM-EFYlOQAUXPNLA&usqp=CAU';   
 document.body.appendChild(img);
    
 for (var i = 0; i<list.length; i++) {
    list[i].setAttribute('class', 'listitem');
    document.querySelectorAll('.listitem')[i].style.color ='blue';
  }
    
    

  
   

  

