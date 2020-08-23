// Your JS code is here
function pluralize(num,name) {
  if (name=='sheep') {
    return 'sheep';
    }
  else if (name=='goose') {
    return 'geese';
  }
  else {
    return num+' '+name+'s';
  }
}

console.log(pluralize(5,'cat'));
console.log(pluralize(7, 'turtle'));
console.log(pluralize(3,'sheep'));
console.log(pluralize(9,'goose'));