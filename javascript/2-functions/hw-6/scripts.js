function fixStart(word){
  var w = word.charAt(0);
  for(var i = 1; i<word.length; i++){
    if(word.charAt(i) === word.charAt(0)){
      w += '*';
    }else{
      w += word.charAt(i);
    }
  }
console.log(w );
}

fixStart("bubble");
fixStart("turtle");