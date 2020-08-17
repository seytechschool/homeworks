// Your JS code is here

function mixUp(str, str2){
    if (str.length > 2 && str2.length > 2){
        var tempStr1 = str.substring(0,2);
        str = str.substring(2, str.length);

        var tempStr2 = str2.slice(0, 2);
        str2 = str2.substring(2, str2.length);

        var newStr = tempStr2.concat(str);
        var newStr2 = tempStr1.concat(str2);

        return newStr + " " + newStr2;
        
    }else{
        return 'Please enter more than 2 characters!';
    }
    
    
}

console.log(mixUp('myshyk', 'white'));
console.log(mixUp('mix', 'pod'));
console.log(mixUp('a', 'b'));