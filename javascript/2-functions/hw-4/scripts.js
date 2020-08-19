// // Your JS code is here
function squareNumber (number) {
    console.log("The result of squaring the " + number + " is " + number*number);
    return number * number
}
// squareNumber(8);

function halfNumber (number) {
    console.log ("Half of " + number + " is " +  number/2);
    return number/2
}
// halfNumber(6);

function percentOf (number1, number2) {
    var finalNumber = (number1/number2*100).toFixed(2);
    console.log(number1 + " is "+ finalNumber + "% of " + number2);
    return finalNumber;
}
// percentOf(10,200);

function areaOfCircle (radius) {
    var result = (3.14*radius*radius).toFixed(2);
    console.log("The area for a circle with " + radius + " is "+ result);
    return result;
}   
// areaOfCircle(24);

function operations (number) {
    var result1 = halfNumber(number);
    var result2 = squareNumber(result1);
    var result3 = areaOfCircle(result2);
    var result4 = percentOf(result3,result2);
    console.log(result4);
    return result4;
}
operations(7);




