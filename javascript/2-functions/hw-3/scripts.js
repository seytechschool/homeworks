// Your JS code is here

function pluralize(a,b){
  if (a==1){
    console.log(a,b)
  }
  else if (a>1){
    console.log (a,b+'s')
  }

  else{
    console.log('uncountable # of',b)
  }
}

pluralize(2,'horse')
pluralize(1,'turtle')
pluralize(0,'goat')
