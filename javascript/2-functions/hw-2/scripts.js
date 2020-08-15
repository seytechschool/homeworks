// Your JS code is here
function compare(num1, num2) {

    if(typeof(num1) != 'number' || typeof(num2) != 'number') {
        return "inputs should be numbers"
    }
    if(num1 > num2) {
        return num1;
    }
    else if(num2 > num1) {
        return num2;
    }
    else if(num1 == num2){
        return "They are equal"
    }
}