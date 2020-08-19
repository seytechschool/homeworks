// Your JS code is here
function mixUp (string1, string2){
    var substring1 = string1.substring(2);
    var substring2 = string2.substring(2);
    var substring3 = string1.substring(0,2);
    var substring4 = string2.substring(0,2);
    console.log(substring4+substring1+ ","+ substring3+substring2);
    return substring4+substring1+substring3+substring2;
}
mixUp("Bear" , "Tomato")