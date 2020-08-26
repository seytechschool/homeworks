// Your JS code is here
function pluralize (a,b){
    if (b == 'sheep'|| b == 'geese'){
      console.log(a,b+'')
    }else{
      console.log(a,b +'s')
    }
  }
  pluralize(5,'cat');
  pluralize(7,'turtle');
  pluralize(4,'sheep');
  pluralize(2,'geese');
