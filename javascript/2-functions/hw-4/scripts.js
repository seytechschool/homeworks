//hw-2-functions-4
function squareNumber(num) {
    var square = num * num;
    console.log('The result of squaring the number ' + num + ' is ' + square);
    return square;
  }
  squareNumber(3);
  
  function halfNumber(num) {
    var division = num/2;
    console.log('Half of ' + num + ' is ' + division);
    return division
  }
  halfNumber(5);
  
  function percentOf(num1,num2){
    var percent = (num1/num2)*100;
    console.log(num1 + ' is ' + percent + '% of ' + num2)
    return percent
  }
  percentOf(2,4)
  
  function areaOfCircle(radius){
    var area= Math.PI * (radius*radius);
    console.log('The area for a circle with radius ' + radius + ' is ' + area.toFixed(2))
    return area;
  }
  areaOfCircle(2)

  //hw-2-functions-4
function squareNumber(num) {
    var square = num * num;
    console.log('The result of squaring the number ' + num + ' is ' + square);
    return square;
  }
  squareNumber(3);
  
  function halfNumber(num) {
    var division = num/2;
    console.log('Half of ' + num + ' is ' + division);
    return division
  }
  halfNumber(5);
  
  function percentOf(num1,num2){
    var percent = (num1/num2)*100;
    console.log(num1 + ' is ' + percent + '% of ' + num2)
    return percent
  }
  percentOf(2,4)
  
  function areaOfCircle(radius){
    var area= Math.PI * (radius*radius);
    console.log('The area for a circle with radius ' + radius + ' is ' + area.toFixed(2))
    return area;
  }
  areaOfCircle(2)
  
  function bonusTask(num){
   var division = halfNumber(num)
   var square = squareNumber(division)
   var area = areaOfCircle(square)
   var percent = percentOf(square, area)
    
  
  }
  bonusTask(7)
