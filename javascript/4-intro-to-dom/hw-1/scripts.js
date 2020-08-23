// Your JS code is here
var googeLogo =
  '<img alt="Google" height="92" id="hplogo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" width="272" data-iml="1597637072196" data-atf="1">';

document.body.innerHTML = googeLogo;

var img = document.getElementById("hplogo");
img.setAttribute(
  "src",
  "https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_p_205x58_frontpage_2x.png"
);
