// Your JS code is here
function pluralize (num,word) {
    if (word == "sheep") {
        return num + " " + word;
    } else if (num>1 && word=="mouse") {
        return num + " mice";
    } else if (num>1 && word=="child"){
        return num + " children";
    } else if (num>1 && word=="goose") {
        return num + " geese";
    } else if (num>1) {
        return num + " " + word + "s"
    } else if (num==1) {
        return num + " " + word
    } else if (num<=0) {
        return "You should provive valid number of animals."
    }
}
console.log(pluralize(7,"child"));