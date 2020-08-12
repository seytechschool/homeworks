// Your JS code is here
function fixStart(str){
  var num_chars = str.length;
  var first_char = str.slice(0,1);
  var second_part = str.slice(1,num_chars);

  var new_repl_str = second_part.replace(/first_char/g, '*');
  console.log(first_char + new_repl_str);
}

fixStart('babble');
