// Your JS code is here

function fixStart(str){
    var temp; 
    
        temp = str.substring(0,1);
        // console.log(temp);
        for (var i = 1; i < str.length; i++){
            if(str[i] === temp){
                str = str.replace(str[i], '\*');
                console.log(str);
                console.log(temp);
           }
        
    }
}

fixStart('mymmshyk');
