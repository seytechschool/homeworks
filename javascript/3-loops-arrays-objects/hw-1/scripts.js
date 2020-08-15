// Your JS code is here
for(var x=0; x<=20; x++) {
  if(x % 2 === 0) {
    console.log(x + ' Is Even Nmber')
    document.getElementById('h1-id').innerHTML = x + ' Is Even Nmber';
  } else {
    console.log(x + ' Is Odd Nmber')
    document.getElementById('h1-id').innerHTML = x + ' Is Odd Nmber';
  }
}
