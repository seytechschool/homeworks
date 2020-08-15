// Your JS code is here
function compare(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number") {
        console.log("It is impossible to compare these numbers")
    } else if (num1 > num2) {
        console.log(num1 + " is bigger than " + num2)
    } else if (num2 > num1) {
        console.log(num2 + " is bigger than " + num1)
    }else{
        console.log(num1 + " and " + num2 + " are equal")
    }
}
console.log("When num1 is bigger")
compare(4,2)

console.log("When num2 is bigger")
compare(1,2)

console.log("When both are equal")
compare(4,4)

console.log("When text")
compare("apple",2)
