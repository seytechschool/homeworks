// Your JS code is here
function oddOrEven(n) {
  for (let i = 0; i <= n; i++) {
    i % 2 == 0? console.log(`${i} is even`) : console.log(`${i} is odd`)
  }
}
oddOrEven(20)