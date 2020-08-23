// Your JS code is here

const squareNumber = number => `The result of squaring the number ${number} is ${number * number}`;
const halfNumber = number => `Half of ${number} is ${number / 2}`;
const percentOf = (number1, number2) => `${number1} is ${((number1 / number2)*100)}% of ${number2}`;
const areaOfCircle = radius => `The area for a circle with radius ${radius} is ${3.14159265359*(radius * radius)}`;

function calculate (num)  {
    let half = halfNumber(num);
    let square = squareNumber(half);
    let area = areaOfCircle(square);
    let percentage = percentOf(area, square);
}