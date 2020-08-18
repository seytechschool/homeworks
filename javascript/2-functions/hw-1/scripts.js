// Your JS code is here
function tellFortune(kids,partner,city,job){

    var output = 'You will be a ' + job + ' in ' + city + ' and married to ' + partner +' with '+ kids;
    console.log(output);
    return output;
}

tellFortune( 5 , 'Kaku' , 'Redmond' , 'Software Engineer');
tellFortune( 2 , 'Katya' , 'Seattle' , 'Engineer');
tellFortune( 3 , 'Maria' , 'Italy' , 'Software Engineer');
