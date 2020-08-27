// Your JS code is here

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
function squareNumber(num){
    console.log('The result of squaring the number ' + num + ' is ' + num*num);
    }
    
    squareNumber(3);
    
    // Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
    function halfNumber(num){
    console.log('Half of ' + num + ' is ' + num/2)
    }
    
    halfNumber (5);
    // Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
    
    function percentOf(num1,num2) {
      console.log (num1 + ' is ' + num1/num2*100 + '% of ' + num2);
    }
    
    percentOf(2,4);
    
    // Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
    // Bonus: Round the result so there are only two digits after the decimal.
    
    function areaOfCircle(radius) {
      var formula = 2 * Math.PI * radius;
      console.log('The area for a circle with radius ' + radius + ' is ' + formula.toFixed(2))
    }
    
    areaOfCircle(2)
    
    // Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier:
    // Take half of the number and store the result.
    // Square the result of #1 and store that result.
    // Calculate the area of a circle with the result of #2 as the radius.
    // Calculate what percentage that area is of the squared result (#3).
    
    function num(num){
     var halvedNum = num/2;
     var square = num*num;
     var circle = square*2*Math.PI;
     var percent = circle/square*100; 
    
    console.log (halvedNum);
    console.log (square);
    console.log (circle);
    console.log (percent);
    }
    
    num(2);
    