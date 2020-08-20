function mixUp(word1, word2){
	var a1 = word1.substring(0, 2);
	var a2 = word2.substring(0, 2);

	console.log(a2 + word1.substring(2 , word1.length) + " " + a1 + word2.substring(2, word2.length));
}

mixUp('dog' ,'dinner');

mixUp('mix' , 'pod');
