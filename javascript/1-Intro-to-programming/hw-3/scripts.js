// Your JS code is here
let c = 40;
let f = c * 9 / 5 + 32;
console.log(`${c}\u00B0C is ${f}\u00B0F `)
console.log(`${f}\u00B0F is ${(f - 32) * 5 / 9}\u00B0C `)




function converter(c, f) {
  console.log(`${c}\u00B0C is ${c*9/5+32}\u00B0F `)  

  console.log(`${f}\u00B0F is ${(f - 32) * 5 / 9}\u00B0C `)
}
converter(40, 103)