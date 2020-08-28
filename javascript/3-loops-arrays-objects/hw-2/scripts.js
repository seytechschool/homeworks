// Your JS code is here
var array = ['BCG', 'Apple', 'Oracle'];

function topChoice (){
  for (i = 0; i < array.length; i ++){
    if (i === 0 ) {
      console.log ('My 1st choice is '+ array [0]);
    }
    else if (i === 1){
      console.log ('My 2nd choice is '+ array [1]);
    } 
    else {
      console.log ('My 3rd choice is '+ array [2]);
    }
  }
}
topChoice()