// Your JS code is here
function tecllFortune(numOfKids, partnerName, geoLocation, jobTitle) {
  var p = document.createElement("p");
  p.innerHTML =
    "You will be a " +
    jobTitle +
    " in " +
    geoLocation +
    ", and married to " +
    partnerName +
    " with " +
    numOfKids +
    " kids.";
  document.body.appendChild(p);
}

tecllFortune(2, "Joe", "Italy", "teacher");
tecllFortune(3, "Jane", "Paris", "dancer");
tecllFortune(1, "Mary", "Miami", "singer");
tecllFortune(4, "Bill", "Texas", "actor");
