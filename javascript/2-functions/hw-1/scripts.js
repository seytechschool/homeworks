// Your JS code is here
// let numberChildren=2;
// let namePartner="John";
// let geoLocation="Manhattan, KS";
// let jobTitle="Manager";



function fortuneTeller ( numberKids, namePartner, geoLocation, jobTitle) {
    let fortune="You will be a " + jobTitle + " in " + geoLocation + " and married to " + namePartner + " with " + numberKids + " kids";
    return fortune
  }
  
  console.log (fortuneTeller ( 3, 'Richard', 'USA', 'Investigator'));
  console.log (fortuneTeller ( 2, 'James', 'Austria', 'Software Engineer'));
  console.log (fortuneTeller ( 1, 'David', 'Germany', 'Professor'))