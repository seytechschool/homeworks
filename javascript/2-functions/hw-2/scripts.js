// Your JS code is here

<<<<<<< HEAD
function tellFortune(numbOfChildren, partnerName, location, jobTitle){
    console.log(`You will be a ${jobTitle} in ${location}, and married to a ${partnerName}  with ${numbOfChildren} kids.`);
}

tellFortune(3, "Handsome", "Chicago", "Founder");
tellFortune(4, "Man", "USA", "CTO");
tellFortune(5, "Human", "California", "business woman");

=======
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
>>>>>>> intro-to-js-AidanaKhankeldieva
