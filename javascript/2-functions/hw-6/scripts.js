// Your JS code is here
function fixStart(str) {
  let first = str.charAt(0)
  let arr = str.split('')
  for (let i = 1; i < arr.length; i++) {
     arr[i] == first? arr[i] = '*' : arr[i]
    
  }
  str = arr.join('')
  return str
}
fixStart('babble')