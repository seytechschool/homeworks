// Your JS code is here
// Version 1
var jobTitle = "engineer";
var location = "Chicago";
var partnerName = "Ann";
var numOfChildren = 1;
console.log(`You will be an ${jobTitle} in ${location}, and married to ${partnerName} with ${numOfChildren} kid/s`);


// Version 2. Function. 
const fortuneTeller = (jobTitle, location, partnerName, numOfChildren) => `You will be an ${jobTitle} in ${location}, and married to ${partnerName} with ${numOfChildren} kid/s`;
// Test
console.log(fortuneTeller("engineer", "Chicago", "Ann", 1));