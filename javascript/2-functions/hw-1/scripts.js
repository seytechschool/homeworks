// Your JS code is here


// Let's turn one of the "Intro To Programming" Exercises into a function.

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.


function tellFortune(childNum, name, geoLoc, job) {
    console.log("You will be a " + job + " in " + geoLoc + ", and married to " + name + " with " + childNum + " kids.");
}

tellFortune(3, 'Kim Kardashyan)', 'California', 'engineer');
tellFortune(2, 'Beyonce', 'New York', 'Actor');
tellFortune(4, 'Rihanna', 'Barbados', 'farmer');



