// Your JS code is here

function squareNumber(number){
    var result = Math.sqrt(number);
    if(number % Math.sqrt(number) ===0 ){
        console.log(`The result of squaring the number ${result} is ${number}`);
        
    }else{
        console.log('The result is not a perfect square');
    } 
    return number;
}

squareNumber(9);

//task2

function halfNumber(number){
var result = number / 2;
console.log(`Half of ${number} is ${result}`);
return result;
}

halfNumber(5);


//task 3

function percentOf(a, b){
    var temp = (a / b) * 100
    console.log(`${a} is ${temp}% of ${b}`);
    return temp;

}

percentOf(4, 40);


//task 4

function areaOfCircle(radius){
    const pi = 3.14159265359;
    let circle = (radius * radius * pi).toFixed(2);
    console.log(`The area for a circle with radius ${radius} is ${circle}`);
    return circle;
}
    areaOfCircle(2);
    areaOfCircle(10);
    areaOfCircle(100);


    //task 5


function getAllResults(number){
    var tempNumber = number / 2;
    var tempSquare = tempNumber * tempNumber;
    const pi = 3.14159265359;
    var tempCircle = (tempSquare * tempSquare * pi).toFixed(2);
    var tempPercentage = tempCircle / tempSquare * 100;
    
    console.log(tempNumber);
    console.log(tempSquare);
    console.log(tempCircle);
    console.log(tempPercentage);
}

getAllResults(50);