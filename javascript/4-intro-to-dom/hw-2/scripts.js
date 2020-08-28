// Your JS code is here
      document.body.style.fontFamily = "Arial, sans-serif";

      var nickname = document.querySelector('#nickname');
      nickname.textContent = "Farkhat";

      var favorites = document.querySelector('#favorites');
      favorites.textContent = "Travel";

      var hometown = document.querySelector('#hometown');
      hometown.textContent = "Almaty";

      var item = document.querySelectorAll('li')
        for (i = 0; i < item.length; i++) {
          item[i].className = 'listitem'
        }
        for(i = 0; i < document.querySelectorAll('.listitem').length; i++){
          document.querySelectorAll('.listitem')[i].style.color = 'red';
        }

      var img = document.createElement('img');
      img.src = 'https://cdn.civitatis.com/kazajstan/almaty/almaty.jpg';
      document.body.appendChild(img);