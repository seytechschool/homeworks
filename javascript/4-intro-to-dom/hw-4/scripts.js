// Your JS code is here
function countTags (tag){
    var tags = document.querySelectorAll('p')
    var count = 0;
    for(i=0; i<tags.length; i++){
      count++
    }
    console.log('There are ' + count + ' tags of type ' + tag + ' on the page')
  } 
  countTags('p')