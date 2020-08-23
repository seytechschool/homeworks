// Your JS code is here
// Write a function that compares two numbers and returns the larger one. Be sure to try it out with some different numbers. Bonus: add error messages if the numbers are equal or cannot be compared.

// Don't forget to test it!


function compare(a,b){
  if (a>b){
    console.log(a,' is greater than ',b)
  }
  else if (a<b){
    console.log(b,' is greater than ',a)
  }
  else if (a==b){
    console.log('they are equal')
  }
  else{
    console.log('uncomparable')
  }
}
compare(2,3)
compare(3,1)
compare(3,3)
compare(3,'johannessburg')
// Your JS code is here
