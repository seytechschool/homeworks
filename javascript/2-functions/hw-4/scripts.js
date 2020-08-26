// Your JS code is here

//squareNumber
function squareNumber (a){
    return('The result of squaring the number '+ a + ' is '+ a*a)
  }
  squareNumber(4)

//halfNumber
function halfNumber (a){
   return('Half of '+ a + ' is '+ a/2)
 }
 halfNumber(7)

//percentOf
function percentOf(percentage,initialnumber){
    var number = (percentage / 100) * initialnumber;
    return(number +' is '+ percentage +'% of '+ initialnumber);
 }
  percentOf(20, 200)

//areaOfCircle
function areaOfCircle(a){
    var number = (a*Math.PI*a);
    return('The area for a circle with radius '+ a + ' is '+ Math.round(number*100)/100); //Bonus
}
  areaOfCircle(2)

//calculator
//calculator
function calculator(a,b){
  
    var squareNumber = ('The result of squaring the number '+ a + ' is '+ a * a);
    var halfNumber = ('Half of '+ a + ' is '+ a / 2);
    var percentOf = (((a / 100) * b) + ' is '+ a +'% of '+ b);
    var areaOfCircle = ('The area for a circle with radius '+ a + ' is '+ Math.round(a * Math.PI * a * 100) / 100);
    
    return [squareNumber, halfNumber, percentOf, areaOfCircle]
    }
  
    calculator(4,8)
