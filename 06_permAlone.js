function permAlone(str) {
	var permutations = []; //generated permutations stored here
	var nextWord = []; //next word builds up in here
  var chars = str.split(''); //collection for each recursion level

  function permutate(chars){
  	if(chars.length === 0) {
  		permutations.push(nextWord.join(''));
  	}
  	for (var i=0; i < chars.length; i++){
  		chars.push(chars.shift());  //rotate the characters
  		nextWord.push(chars[0]);    //use the first char in the array
  		permutate(chars.slice(1));  //Recurse: array-less-one-char
  		nextWord.pop();             //clear for nextWord (multiple pops)
  	}
  }

  permutate(chars);

  var results = permutations.filter(function(elem) {
  	var dupe = elem.replace(/[^\w\s]|(.)\1/gi, "");
  	return elem === dupe;
  });

  console.log(results.length);

  return results.length;
}

permAlone("aab"); // should return a number.
permAlone("aab"); // should return 2.
permAlone("aaa"); // should return 0.
permAlone("aabb"); // should return 8.
permAlone("abcdefa"); // should return 3600.
permAlone("abfdefa"); // should return 2640.
permAlone("zzzzzzzz"); // should return 0.
permAlone("a"); // should return 1.
permAlone("aaab"); // should return 0.
permAlone("aaabb"); // should return 12.
