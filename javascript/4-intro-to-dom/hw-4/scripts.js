// Your JS code is here
function tagCount(all) {
  var erei = 0;
  for (var x = 0; x < all.length; x++) {
    var p = document.createElement('p')
    if (all[x].tagName === p.tagName) {
      erei++
    }
  }
  return "There are " + erei + " tags of type " + p.tagName + " tag on the page"
}

var one = document.createElement('p')
var two = document.createElement('div')
var three = document.createElement('p')
var four = document.createElement('li')
var five = document.createElement('p')
var six = document.createElement('li')
var seven = document.createElement('h1')
var eight = document.createElement('p')
var tags = [one, two, three, four,five, six, seven, eight];

var result = tagCount(tags)
console.log(result)
