// Your JS code is here
let goose = 'goose';
let sheep = 'sheep';

let s = 's';

function pluralize(number, word){
    if(number > 1 && word !== sheep && word !== goose){
        console.log(`${number} ${word}${s}`);
    }else if(number > 1 && word === sheep){
        console.log(`${number} ${sheep}`);
    }else if(number > 1 && word === goose){
        goose = 'geese';
        console.log(`${number} ${goose}`);
    } else{
        console.log(`${number} ${word}`);
    } 
}

pluralize(1, 'cat');

pluralize(101, 'sheep');

pluralize(199, 'goose');