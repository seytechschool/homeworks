// Your JS code is here

function compareNum(num1, num2){
    if (num1 === num2){
        console.log('Those numbers are equal');
    }else if (num1 > num2){
        return num1;
    }else if (num2> num1){
        return num2;
    }else{
        console.log('These numbers can not be compared!');
        return undefined;
    }
}

console.log(compareNum(9, 5));
console.log(compareNum(9, -7));
console.log(compareNum(6, 8));
console.log(compareNum(9, 'Askar'));
