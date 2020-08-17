// Your JS code is here

/**
 * 2. Top Choice
Create an array to hold your top choices (colors, presidents, whatever). 
For each choice, log to the screen a string like: "My #1 choice is blue."

Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", 
picking the right suffix for the number based on what it is. The method slice might be helpful here.
 */




var colors = ['blue', 'yellow', 'orange', 'black', 'red', 'green'];


function colorChoice(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i === 0) {
            console.log("my " + (i+1) + "st choice is " + arr[i]);
        }else if (i === 1) {
            console.log("my " + (i+1) + "nd choice is " + arr[i]);
        }else if (i === 2) {
            console.log("my " + (i+1) + "rd choice is " + arr[i]);
        }else {
            console.log("my " + (i+1) + "th choice is " + arr[i]);
        }
    }
}

colorChoice(colors);






