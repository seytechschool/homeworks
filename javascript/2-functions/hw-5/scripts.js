// Your JS code is here
function mixUp(str1,str2) {
    var str1_chars = str1.length; //Calculate the number of characters of a string
    var str2_chars = str2.length; //Calculate the number of characters of a string
    
    var str1_first_slice = str1.slice(0,2); //First 2 characters of string1
    var str1_second_slice = str1.slice(2,str1_chars); //Remaining characters of string1 after first 2 characters
  
  
    var str2_first_slice = str2.slice(0,2); //First 2 characters of string2
    var str2_second_slice = str2.slice(2,str2_chars); //Remaining characters of string2 after first 2 characters
  
    return str2_first_slice + str1_second_slice + ' ' + str1_first_slice + str2_second_slice
  }
  
  console.log(mixUp('mix','pod'));
  console.log(mixUp('dog','dinner'));
  console.log(mixUp('explain','describe'));
  