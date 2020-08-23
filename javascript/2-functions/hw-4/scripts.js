// Your JS code is here


/**
 * Write a function called squareNumberthat will take one argument (a number), square that number, and return the result. 
 * It should also log a string like "The result of squaring the number 3 is 9."
 * 
Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. 
It should also log a string like "Half of 5 is 2.5.".

Write a function called percentOf that will take two numbers, 
figure out what percent the first number represents of the second number, and return the result. 
It should also log a string like "2 is 50% of 4."

Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. 
It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
Bonus: Round the result so there are only two digits after the decimal.

Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier:
Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).
 */


// 1

function squareNumber(num) {
    var square = num * num;
    console.log("The result of squaring " + num + " is " + square);
    return square;
}

//  squareNumber(3);



// 2
function halfNumber(num1) {
   var divide = num1 / 2;
   console.log("Half of " + num1 + " is " + divide)
   return divide;
}

// halfNumber(150);


// 3
function percentOf(num2, num3) {
   var calcPercent = (num2 / num3) * 100;
   console.log(num2 + " is " + calcPercent + "% of " + num3);
   return calcPercent;
}

// percentOf(12, 200);



// 4 
function areaOfCircle(radius) {
   var calcArea = Math.round(Math.PI * (radius * radius));
   console.log("The area of a circle with " + radius + " is " + calcArea);
   return calcArea;
}

// areaOfCircle(2);


/*********************** */

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier:
// 01. Take half of the number and store the result.
// 02. Square the result of #1 and store that result.
// 03. Calculate the area of a circle with the result of #2 as the radius.
// 04. Calculate what percentage that area is of the squared result (#3).

function perOfSquare(num4) { 
   var halfNum = halfNumber(num4);                                                        
   var squareNum = squareNumber(halfNum);                                              
   var calcCircleArea = areaOfCircle(squareNum);            
   var calcPer = percentOf( squareNum,calcCircleArea);
   return  calcPer;
                                                                                   
}

perOfSquare(2);

