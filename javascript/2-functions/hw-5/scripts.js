// Your JS code is here

function mixUp(str1, str2) {
  var subStr1 = str1.substr(0, 2);
  var subStr2 = str2.substr(0, 2);

  var result =
    str1.replace(subStr1, subStr2) + " " + str2.replace(subStr2, subStr1);
  return result;
}

mixUp("mix", "pod");
