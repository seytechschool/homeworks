// Your JS code is here

var obj={goose:'geese',
mouse:'mice',
sheep:'sheep'
}

function pluralize(a,b){
  if (a==1){
    console.log(a,b)
  }
  else if (a>1){
    if (b in obj){
      console.log(a,obj[b])
    }
    else{
      console.log (a,b+'s')
    }
  }
  else{
    console.log('uncountable # of',b)
  }
}
pluralize(2,'goose') >> 2 geese
pluralize(4,'mouse') >> 4 mice
pluralize(1,'goat') >> 1 goat
pluralize(5,'cow') >> 5 cows
// Your JS code is here
