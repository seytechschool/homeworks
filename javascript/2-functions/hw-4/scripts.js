// Your JS code is here

function squareNum(num){
    console.log("The result of squaring number of " + num + " is " + num*num);
}

function halfNum(num){
    console.log("Half of " + num + " is " + num/2);

}

function percentOf(num1, num2){
    var percent = num1 / num2 * 100;
    console.log(num1 + " is " + percent + "% of " + num2);

}

function areaOfCircle(num){
    var radius = Math.PI * num * num;
    console.log("The area of circle with radius " + num + " is " + radius);
}

console.log("Square:");
squareNum(5);
console.log();

console.log("Half:")
halfNum(5);
console.log();

console.log("Percent:");
percentOf(5, 50);
console.log();

console.log("Circle Area:");
areaOfCircle(2);
console.log()