// Your JS code is here

function countTags(tag) {
    var getTags = document.querySelectorAll(tag);
  console.log('There are '  + getTags.length + ' tags of type ' + tag + ' on the page.');
  
  }
  
  countTags('p');