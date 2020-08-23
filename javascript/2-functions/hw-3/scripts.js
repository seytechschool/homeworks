// Your JS code is here
function pluralize(num, word) {
  if (num === 1 || word === "sheep" || word === "geese") {
    return num + " " + word;
  }
  if (typeof num !== "number" || typeof word !== "string") {
    return "Oopa, please check your parameteres";
  } else if (num === 0) {
    return "there is " + num + " " + word;
  } else if (num > 1) {
    return num + " " + word + "s";
  }
}

pluralize(1, "cat");
pluralize(2, "dog");
pluralize(2, "sheep");
