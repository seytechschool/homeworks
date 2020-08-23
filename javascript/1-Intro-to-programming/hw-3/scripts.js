var cel = 35;
var far = 60;
var inCel; 
var inFar;

inFar = cel * 9 / 5 + 32;
inCel = (far - 32) * 5 / 9;

 console.log(cel + `\u00B0` + "C is " + inFar.toFixed(2) + `\u00B0` + "F ");
 console.log(far + `\u00B0` + "F is " + inCel.toFixed(2) + `\u00B0` + "C");


