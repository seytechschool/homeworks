// Your JS code is here
var companies = ['Nasa', 'SpaceX','Tesla Motors','Nasa', 'SpaceX','Tesla Motors','Nasa', 'SpaceX','Tesla Motors','Nasa', 'SpaceX', 'Twitter'];
function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}
function topChoice1(companies) {
    for(let i = 0; i < companies.length; i++) {
        console.log(`My ${ordinal_suffix_of(i+1)} company is ${companies[i]}`)
    }
}
topChoice1(companies);