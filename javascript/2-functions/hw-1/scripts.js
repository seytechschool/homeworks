// Your JS code is here

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(numChildren,partName,geoLocation,jobTitle) {
    console.log('You will be a ' + jobTitle + ' in ' + geoLocation + ' ,and married to ' + partName + ' with ' + numChildren + ' kids ')
}

tellFortune(2,'Jacob','Los Angeles','Doctor')
tellFortune(5,'Alan','Chicago','DJ')
tellFortune(7,'Peter','New York','Lawyer')
