// Your JS code is here
function getBiggerNumber(a, b){
    if(a > b){
        console.log(`number ${a} is bigger`)
        return a;
    }else if(a < b ){
        console.log(`number ${b} is bigger`)
        return b;
    }
    else if(a === b ){
        console.log("Error: numbers are equal")
    }else {
        console.log("Error: not a number")
    }

}
getBiggerNumber(40, 30);
getBiggerNumber('a', 30);
