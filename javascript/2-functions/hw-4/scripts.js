function squareNumber(i) {
  return i**2
}
function halfNumber(a) {
  return a / 2;
  console.log(`Half of ${a} is ${a/2}`)
}
function percent (one,two) {
  return two*one/100;
  console.log(`${one} is ${two*one/100}% of ${two}`) 
}
function areaCircle(r) {
  let res =  Math.PI *r*r
  return res.toFixed(2)
}
function total(tot) {
  let resHalf = halfNumber(tot)  
  let sq = squareNumber(resHalf)
  let circ = areaCircle(sq)
  let percentage = percent(circ, sq)
  return percentage
}
 total(6)
