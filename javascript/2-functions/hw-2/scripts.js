// Your JS code is here
function compareTwoNumbers (num1,num2) {
    if (num1>num2) {
        return num1;
    } else if (num1<num2) {
        return num2;
    } else if(num1==num2) {
        return "error";
    }
}

console.log(compareTwoNumbers("hi","hi"));
