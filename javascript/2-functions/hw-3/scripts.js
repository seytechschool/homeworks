function pluralize(num, word){

	if(num !=1 && num != 0){
      if(word ==='sheep'){
        console.log(num + " " + word);
      } else if(word ==='fish'){
        console.log(num + " " + word);
      }else if(word ==='goose'){
        console.log(num + " geese");
      }else if(word ==='mouse'){
        console.log(num + " mice ");
      }
      else{
        console.log(num + " "+ word+"s");
      } 
  }else if(num ==1){
        console.log(num +" " + word)}
}


pluralize(4, 'sheep');
pluralize(4, 'mouse');
pluralize(4, 'fish');
pluralize(4, 'goose');
pluralize(4, 'apple');
pluralize(1, 'apple');


