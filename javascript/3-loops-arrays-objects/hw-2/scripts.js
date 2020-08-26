// Your JS code is here
var topChoices = ['gray', 'John F Kennedy', 'Arsenal F.C.', 'Abraham Lincoln' ];
for(var i = 0; i<topChoices.length; i++){
  firstLog = `My # ${i+1} choice is ${topChoices[i]}`
  console.log(firstLog);
  if(i==0){
    console.log(`My ${i+1}st ${firstLog.slice(6)}`);
  }
  else if(i==1){
    console.log(`My ${i+1}nd ${firstLog.slice(6)}`);
  }
  else if(i==2){
    console.log(`My ${i+1}rd ${firstLog.slice(6)}`);
  }
  else if(i==3){
    console.log(`My ${i+1}th ${firstLog.slice(6)}`);
  }
} ;


