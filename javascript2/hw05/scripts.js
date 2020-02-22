// Your JS code is here
//mixUp

function mixUp(str1, str2) {
    return str2.slice(0, 2) + str1.slice(2) + " " + str1.slice(0, 2) + str2.slice(2);
  }
  console.log(mixUp('mix', 'pod'));
  console.log(mixUp('dog', 'dinner'));

//fixStart 1st option

function fixStart(text){
  var result = text[0];
  for( var i=1; i < text.length; i++ ){
    if(text[i] == text[0]){
      result += '*'
    } else {
      result += text[i]
    }
  }
  return result
}
//fixStart('alibaba') // alib*b*
console.log(fixStart('bubble'))

//2nd option to fixStart

function fixStart(word) {
  var len = word.length;
  var first_letter = word.charAt(0);
  for (i=1;i<len;i++) {
    var word = word.replace(first_letter, "*");
  }
  console.log(word.replace(word[0], first_letter));
}
fixStart("alibaba");


//3th option to fixStart almost same as 1st option

function fixStart(text){
  var first = text[0]; //'a'
  var result = first;
  for( var i=1; i<text.length; i++ ){
    var curr = text[i];
    if(curr == first){
      result += '*'
    }else{
      result += text[i]
    }
  }
 return result 
}
//fixStart('lalalalalalla')
console.log(fixStart('bubble'))


