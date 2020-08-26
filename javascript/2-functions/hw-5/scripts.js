// Your JS code is here
function mixUp(str1,str2){
 var mix = str2.slice(0,2) + str1.slice(2) +
 ' ' + str1.slice(0,2)+str2.slice(2) ;
  console.log(mix);
}
mixUp('mix', 'pod');
mixUp('dog','dinner');