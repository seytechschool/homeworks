// Your JS code is here
function squareNumber(a){
  console.log('The result of squaring the number',a,'is', (a**2).toFixed(2))
  return (a**2).toFixed(2)
}
squareNumber(5)

function halfNumber(a){
  console.log('The result of halfing the number',a,'is', a/2)
  return a/2
}
halfNumber(5)

function percentOf(a,b){
  console.log(a,'is',(a*100/b).toFixed(2),'% percent of',b)
  return (a*100/b).toFixed(2)
}
percentOf(2,4)

function areaofcircle(radius){
  console.log('area of circle is',(radius**2*Math.PI).toFixed(2),'of given radius',radius)
  return (radius**2*Math.PI).toFixed(2)
}
areaofcircle(3)

function allinOne(a){
  var d=squareNumber(a)
  var e=halfNumber(d)
  var f=areaofcircle(e)
  var g=percentOf(f,squareNumber(f))
}
allinOne(3)

output>>:

The result of squaring the number 5 is 25.00 
The result of halfing the number 5 is 2.5 
2 is 50.00 % percent of 4 
area of circle is 28.27 of given radius 3 
The result of squaring the number 3 is 9.00 
The result of halfing the number 9.00 is 4.5 
area of circle is 63.62 of given radius 4.5 
The result of squaring the number 63.62 is 4047.50 
63.62 is 1.57 % percent of 4047.50
