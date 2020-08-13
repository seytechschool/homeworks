// Your JS code is here
// #1
function tellFortunes(number, name, location, job) {
    return "You will be a " + job +  " in " + location +  ", and married to " + name + " with " + number + " kids."
  }
  console.log("HW#1: _______________________________________________________")
  console.log(tellFortunes(2, "Angel", "Chicago", "writer"));
  console.log(tellFortunes(4, "Kyrgyz", "planet", "good people"))
  console.log(tellFortunes(1, "AShley", "Moab", "instructor"))
  
  // #2
  
  function compareTwo(num1, num2){
    if(typeof num1 !== "number" || typeof num2 !== "number"){
      return "Error, not a number"
    }
    if (num1 === num2){
      return "Numbers are equal"
    }
     if(num1 > num2){
      return num1
    }else if(num2 > num1){
      return num2
    } 
  }
  console.log("HW#2: _______________________________________________________")
  console.log(compareTwo(3,8))
  console.log(compareTwo(7, 1))
  console.log(compareTwo(1, 1))
  console.log(compareTwo("number", 1))
  
  // #3
  function pluralize(num, string){
    return num + " " + string +"s"
  }
  console.log("HW#3: _________________________________________________")
  console.log(pluralize(5, 'cat')) //'5 cats'
  console.log(pluralize(7, 'turtle')) //: '7 turtles'
  
  // Calculator 
  // #4A square
  
  function squareNumber(num){
    return num*num
  }
  console.log("HW#4A:____________________________________________________")
  console.log(squareNumber(3))
  console.log(squareNumber(2))
  
  // #4B divide
  
  function halfNumber(num){
    var halfOfNum = num/2;
    var resultMsg = "Half of " + num + " is " + halfOfNum + ".";
    return resultMsg
  }
  console.log("HW#4B: ________________________________________________________")
  console.log(halfNumber(7));
  console.log(halfNumber(49));
  
  // #4C count percentage
  
  function percentOf(num1, num2){
    let percentCount = (num1/num2)*100
    return num1 + " is " + percentCount + "% of " + num2
  }
  console.log("HW#4C: _________________________________________________")
  console.log(percentOf(2, 4))
  console.log(percentOf(10, 100))
  console.log(percentOf(100, 10))
  
  //#4D count radius
  
  function areaOfCircle(num){
    var findArea = ((num*Math.PI)*2).toFixed(2)
    return "The area for a circle with radius " + num + " is " + findArea + "."
  }
  console.log("HW#4D: ___________________________________________________")
  console.log(areaOfCircle(2))
  console.log(areaOfCircle(78))
  
  // #4E functions
  
  function calculator(num){
    var halfNum = num/2;
    var squareNum = halfNum*2;
    var radius = (2*(squareNum*3.14)).toFixed(2)
    var percentage = (squareNum/radius)*100
    return "Percentage of " + radius + " is " + percentage +"."
  }
  console.log("HW#4E:_____________________________________________________ ")
  console.log(calculator(2))
  
  // Calculate what percentage that area is of the squared result (#3).
  