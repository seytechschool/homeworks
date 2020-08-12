// Your JS code is here
function Num(idOne,idTwo) {
  if (idOne > idTwo) {
    return (
      idOne
    )
  } else {
    return (
      idTwo
    )
  }
}
var number = Num(Math.random(), Math.random());
console.log(number)
