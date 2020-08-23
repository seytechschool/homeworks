// Your JS code is here
function fixStart(str){
    var numChars = str.length;
    var firstChar = str.slice(0,1);
    var secondPart = str.slice(1);

    var counter = ''
    for(var i=0;i<secondPart.length;i++){
      if(firstChar === secondPart[i]){
        counter += '\*'
      }
      else {
        counter+=secondPart[i]
      }
    }
    console.log(firstChar + counter);
  }
  
  fixStart('babble');
  fixStart('turtle');