// Your JS code is here

// - (In JavaScript) Change the body tag's style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = "Arial, sans-serif";
// - (In JavaScript) Replace the content of each of the spans (nickname, favorites, hometown) with your own information.
document.getElementById("nickname").innerText = "askat";
document.getElementById("favorites").innerText = "js";
document.getElementById("hometown").innerText = "mars";
// - Iterate through each li and add a class of "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
var li = document.querySelectorAll("li");
li.forEach((li) => li.classList.add("listitem"));
var style = document.createElement("style");
style.innerHTML = ".listitem {color:red}";
document.head.appendChild(style);

// - Create a new img element and set its src attribute to a picture of you. Append that element to the body.
var img = document.createElement("img");
img.setAttribute(
  "src",
  "https://i.pinimg.com/originals/20/fa/4b/20fa4b2c22fed070493bdc94423f5c0f.jpg"
);
img.style.width = "250px";
document.body.appendChild(img);
