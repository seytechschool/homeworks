// Your JS code is here
function pluralize(num, word){
    if(word ==='sheep' || word === 'fish'){
        console.log(num + " " + word);
    }else if(word==='goose'){
        console.log(num + " geese");
    }else if(word==='mouse'){
        console.log(num + 'mice');
    }else{
        console.log(num + " " + word + "s");
    }
}
console.log("Exceptions:");
pluralize(3, "sheep");

console.log();

console.log("Regular:");
pluralize(5, "apple");
