// Your JS code is here
function fixStart (a){
    var txt = a;
    console.log (txt.substring(0,2) + '**' + txt.substring(txt.length-2) );
  }
  fixStart('babble');
  fixStart('turtle');