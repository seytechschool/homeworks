// Your JS code is here

/**
 * 1. Logo Hijack
Open up www.google.com in Chrome or Firefox, and open up the console.
Find the Google logo and store it in a variable.
Modify the source of the logo IMG so that it's a Yahoo logo instead. (http://www.logostage.com/logos/yahoo.GIF)
 */

var google =
'<img alt="Google" height="92" id="hplogo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" width="272" data-iml="1597637072196" data-atf="1">';

document.body.innerHTML = google;

var img = document.getElementById("hplogo");
img.setAttribute(
"src",
"https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_p_205x58_frontpage_2x.png"
);