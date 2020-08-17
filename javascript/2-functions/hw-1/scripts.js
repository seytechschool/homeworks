// Your JS code is here

function tellFortune(jobTitle, location, partnerName, numChildren) {
  var outputString =
    '"You will be a ' +
    jobTitle +
    ' in ' +
    location +
    ', and married to ' +
    partnerName +
    ' with ' +
    numChildren +
    ' kids."';
  console.log(outputString);
}

// testing function tellFortune('X','Y','Z','N')
// should return: "You will be a X in Y, and married to Z with N kids."

tellFortune('X', 'Y', 'Z', 'N');
