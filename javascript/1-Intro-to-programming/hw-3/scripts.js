// Your JS code is here

// **Reminder**: To convert celsius to fahrenheit, multiply by 9, then divide by 5, then add 32. 
//               To convert fahrenheit to celsius, deduct 32, then multiply by 5, then divide by 9.

// **Unicode Characters**: To print the degrees symbol in JavaScript, 
//           we need to use the write `\u00B0` to represent the unicode character for the degress symbol.

// - Store a celsius temperature into a variable.
// - Convert it to fahrenheit and output "NN°C is NN°F".
// - Now store a fahrenheit temperature into a variable.
// - Convert it to celsius and output "NN°F is NN°C."

var cORf = window.prompt("If you want to enter Farenheit please enter capital F " +
                                    "and If you want to enter Celsius please enter capital C ")
var userCel;
if(cORf==='C') {
     userCel = window.prompt("Please enter CELSIUS to convert to Farenheit: ");
    document.write(userCel * 9 / 5 + 32 + `\u00B0` + " F Farenheit equals to following celsius: " + userCel)
}

if(cORf==='F') {
     userCel = window.prompt("Please enter FARENHEIT to convert to CELSIUS: ");
    document.write(((userCel - 32) * 5 / 9 ) + `\u00B0` + " C Celsius equals to following Farenheit: " + userCel)

}

else {
    document.write("Please enter valid letters which are capital F or capital C !!!")
}





