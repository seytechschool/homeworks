// Your JS code is here
  var word = '';
  var word2 = '';
  var newWord = '';
  var newWord2 = '';

  function mixUp(word,word2){
    for(i=0;i<word.length;i++){
      if(i<2){
        newWord+=word2[i]
      }else{
        newWord+=word[i]
      }
    }
    for(i=0;i<word2.length;i++){
      if(i<2){
        newWord2+=word[i]
      }else{
        newWord2+=word2[i]
      }
    }
  console.log (newWord+ ' ' + newWord2)
  }
mixUp('mix', 'pod'); //: 'pox mid'
mixUp('dog', 'dinner'); //: 'dig donner'


// Version 1 hardcoded
// function mixUp(a,b){
//   var a;
//   var b;
//   var txt = a.concat(' ',b);
//   console.log (txt.substring(txt.length - 2)+ txt.substring(2,4) + txt.substring(0,2)+txt.substring(1,3));
// }
// mixUp('mix','pod');
