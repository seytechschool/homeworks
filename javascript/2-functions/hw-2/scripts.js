// Your JS code is here
function compare_numbers(num1, num2) {
  if(num1 > num2) {
    console.log(num1,'is bigger than',num2);
  }
  else if(num1 < num2) {
    console.log(num2,'is bigger than',num1);
  }
  else if(num1 == num2) {
    console.log('Numbers are equal to ech other');
  }
  else {
    console.log('Can not be compared. Please enter a number');
  }
}

compare_numbers(5,7) // num2,'is bigger than',num1
compare_numbers(15,10) // num1,'is bigger than',num2
compare_numbers(11,11) //Numbers are equal to ech other
compare_numbers('hello', 7); // Can not be compared. Please enter a number
