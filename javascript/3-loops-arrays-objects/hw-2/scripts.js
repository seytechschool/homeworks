// Your JS code is here
function topChoice(arr) {
  let st = 'st';
  let nd = 'nd';
  let rd = 'rd';
  let th = 'th';
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    

    if (count % 10 == 1 && count !== 11) {
      console.log(`My ${count+st} choice is ${arr[i]}`)
    
    }
    else if (count%10 == 2 && count !==12) {
      console.log(`My ${count+nd} choice is ${arr[i]}`)
    } 
    else if (count%10 == 3 && count !==13) {
      console.log(`My ${count+rd} choice is ${arr[i]}`)
    } 
    else {
      console.log(`My ${count+th} choice is ${arr[i]}`)
    }

    count++

  }
}
topChoice(
  ['Google', 'Facebook', 'Microsoft', 'Amazon', 'Netflix', 'Apple','Google', 'Facebook', 'Microsoft', 'Amazon', 'Netflix', 'Apple','Google', 'Facebook', 'Microsoft', 'Amazon', 'Netflix', 'Apple','Google', 'Facebook', 'Microsoft', 'Amazon', 'Netflix', 'Apple','Google', 'Facebook', 'Microsoft', 'Amazon', 'Netflix', 'Apple','Google', 'Facebook', 'Microsoft', 'Amazon', 'Netflix', 'Apple','Google', 'Facebook', 'Microsoft', 'Amazon', 'Netflix', 'Apple','Google', 'Facebook', 'Microsoft', 'Amazon', 'Netflix', 'Apple','Google', 'Facebook', 'Microsoft', 'Amazon', 'Netflix', 'Apple']
)