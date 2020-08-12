// Your JS code is here
function mixUp(str1, str2) {
  let a = str1.substring(0,2)+ str2.substring(2)
  let b = str2.substring(0,2)+str1.substring(2)
  return `${a} ${b}`
}
