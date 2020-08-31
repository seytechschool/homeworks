// Your JS code is here
function countTags(tagName) {
  var allTags = document.querySelectorAll(tagName);
  var result = `There are ${allTags.length} tags of type ${tagName} on the page`;
  return result;
}

console.log(countTags('div'));
