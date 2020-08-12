// Your JS code is here
function countTags(tag) {
  var arrOfTag = document.querySelectorAll(tag);
  console.log('There are ' + arrOfTag.length +  ' tags of type ' + tag + ' on the page');
}

countTags('p');
