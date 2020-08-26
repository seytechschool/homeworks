// Your JS code is here
function fixStart(str){
  var firstChar = str.charAt(0);
  return firstChar + str.slice(1).split(firstChar).join('*');
}
console.log(fixStart('babble'));
console.log(fixStart('turtle'));