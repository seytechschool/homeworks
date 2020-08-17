// Your JS code is here
var topChoices = ["blue", "bike", "apple", "tiger", "pepsi", "summer"];

for (var i = 0; i < topChoices.length; i++) {
  if (i + 1 === 1) {
    console.log("My " + (i + 1) + "st choice is " + topChoices[i]);
  } else if (i + 1 === 2) {
    console.log("My " + (i + 1) + "nd choice is " + topChoices[i]);
  } else if (i + 1 === 3) {
    console.log("My " + (i + 1) + "rd choice is " + topChoices[i]);
  } else if (i + 1 > 3) {
    console.log("My " + (i + 1) + "th choice is " + topChoices[i]);
  }
}
