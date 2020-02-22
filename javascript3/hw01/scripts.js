// Your JS code is here
//Loops Even/Odd

for (var i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i + ' is even');
    } else {
      console.log(i + ' is odd');
    }
  }
//Practice1:
// You are given 2 parameters; name(string) and character(string).
// Count how many character in that string.
// For example how many 'a' in 'alibaba' 
function countChar(str, char){
  var count = 0;
  for(var i=0; i<str.length; i++){ // 
      if( str[i] == char ){
        count++;
      }
  }
  return count
}

console.log( countChar('alibaba','b') ) // 2

//Practice2:
// You are given an a string 
// Create a function to convert all 'a' in that string to 'b'
// 'marat' => 'mbrbt'

function convert(str,a,b){
  var result = '';
  for(var i=0; i<str.length;i++){
    if( str[i] == a ){
       result += b
    }
  }
}

convert('marat', 'a','b') // 'mbrbt'
