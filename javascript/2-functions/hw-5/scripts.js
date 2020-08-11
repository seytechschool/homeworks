// Your JS code is here
function mixUp(str1, str2) {
  var firstTwoCharOfStr1 = str1.slice(0, 2);
  var restCharOfStr1 = str1.slice(2);
  var firstTwoCharOfStr2 = str2.slice(0, 2);
  var restCharOfStr2 = str2.slice(2);
  var result1 = firstTwoCharOfStr2 + restCharOfStr1;
  var result2 = firstTwoCharOfStr1 + restCharOfStr2;
  return result1 + ' ' + result2;
}

mixUp('mix', 'pod');
