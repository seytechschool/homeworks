// Grocery List
var counter = 0;
var groceryList = []

function onClick(){
  var val = document.querySelector('#text').value; 
  //var lis = document.querySelectorAll('li');
  if(val ==''){
    return //do nothing
  }  
  for(var i=0; i<groceryList.length; i++){
    if(groceryList[i].toLowerCase() == val.toLowerCase()){
      return
    }
  }  
 groceryList.push(val)
 var li = document.createElement('li');
  li.innerHTML = val;
 document.getElementById('list').appendChild(li); 
 document.querySelector('#text').value = ''   
  counter++; 
 document.querySelector('#count').innerHTML = 'How Many ' + counter; 
  
}

document.getElementById('btn').addEventListener("click", onClick)

function onEnter(event){
  if (event.keyCode == 13){
    onClick()
  }
}
document.addEventListener('keyup', onEnter) 




