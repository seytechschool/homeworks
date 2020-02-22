//Create an array to hold your top choices (colors, presidents, whatever). For each choice, log to the screen a string like: "My #1 choice is blue."
//LOOPS Top Choice

var footballClub = ["Real Madrid", "Arsenal", "Juventus", "Borussia Dortmund", "Galatasaray", "PSG"];

for(i=0; i<= footballClub.length-1; i++) {
  if( i == 0 ){ 
    console.log("My #"+ (i+1) + " choice is " + footballClub[i]); 
          }
  else if (i == 1) {
    console.log("My #"+ (i+1) + " choice is " + footballClub[i]); 
  }
  else if (i == 2) {
    console.log("My #"+ (i+1) + " choice is " + footballClub[i]); 
  }
  else {
    console.log("My #"+ (i+1) + " choice is " + footballClub[i]); 
  }
}


// My Peers

var students = [
 {
  name: 'Aibek',
  location: 'Chicago',
  alreadyMet: true
},
{
  name: 'Asel',
  location: 'Warsaw',
  alreadyMet: fasle 
},
{
  name: 'Ainura',
  location: 'New York',
  alreadyMet: fasle 
}
]
function meetPeers(arr){
  var met = 0;
  var notMet = 0;
  for(var i=0;i<arr.length; i++){
    if(arr[i].alreadyMet == true){
      met++;
      console.log('You already met ' + arr[i].name + ' from ' + arr[i].location)
    }else{
      notMet++;
      console.log('You still need to meet ' + arr[i].name + ' from ' + arr[i].location)
    }

  }
  return 'I met' +met + ' friends and need to meet ' + notMet + 'more'
}
meetPeers(students)


//Top companies

var companies = [ 'Amazon', 'Microsoft', 'Apple', 'Google', 'Tesla', 'Facebook', 'Starbucks', 'Walmart', 'Palantir', 'SpaceX', 'Paypal', 'Linkedin', 'Oracel','Instragram' ]

function topChoice(arr){
  for(var i=0; i<arr.length;i++){
    var suffix = 'th';
    var num = i+1;
    if(num==1){ // first
      suffix = 'st';
    } else if(num==2){ //second
      suffix = 'nd';
    } else if(num==3){ // third
      suffix = 'rd';
    }

    console.log('My ' +num+suffix + ' choice is ' + arr[i])
  }

}

topChoice(companies)
