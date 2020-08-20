function squareNumber(num){
	return num * num;
}

function halfNumber(num){
	return num / 2;
}

function percentOf(num1, num2){
	return (num1 / num2 * 100).toFixed(2);
}

function areaOfCircle(r){
	return Math.PI.toFixed(2) * r * r ;
}


console.log(squareNumber(1) + " is a squared number");
console.log(halfNumber(4) + " is a half of " + 4);
console.log(areaOfCircle(2) + " is a square of circle with radius of 2");
console.log(percentOf(3, areaOfCircle(2)) + " is a percentage of 3 out of area of circle");



