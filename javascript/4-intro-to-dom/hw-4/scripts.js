function countTags(tag) {
  var numberOfTags = document.querySelectorAll(tag);
console.log(`There are ${numberOfTags.length}  tags of type ${tag} on the page`);

}

countTags('p');
