// Your JS code is here

function replace(x){
var result = '';
    for (var i of x) {
        if (i==x.slice(0,1)){
          result += '*'
        }
        else{
          result=result+i
        }
    }
    console.log(x.slice(0,1)+result.slice(1,))
}

replace('babble') >> ba**le
replace('google') >> goo*le
replace('booble') >> boo*le
