// Your JS code is here
function converter(f) {

  console.log(`It is ${f}\u00B0F today, That's ${Math.ceil((f - 32) * 5 / 9)}\u00B0C `)
}
converter( Math.ceil(Math.random()*100) )