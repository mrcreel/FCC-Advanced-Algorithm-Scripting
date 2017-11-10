function pairwise(arr, arg, ans) {
	console.log('');
	console.log("([" + arr + "]," + arg + ") " + ans);
	console.log("====================");

	var arrNumbers = [];
	var arrIndices = [];
	var objResults = [];

	for (var i = 0; i < arr.length; i ++){
		for ( j = i + 1; j < arr.length; j ++){
			var varSum = arr[i] + arr[j];
			if (varSum === arg){
				arrNumbers.push([arr[i], arr[j]]);
				arrIndices.push([[i, j], i + j]);
				objResults.push(
					{'numbers' : [arr[i], arr[j]]}
				);
			}
		}
	}
	console.log(arrNumbers);
	console.log(arrIndices);
	console.log(objResults);
	console.log('-------');
  return arg;
}

pairwise([1, 4, 2, 3, 0, 5], 7, 11); //should return 11.
pairwise([1, 3, 2, 4], 4, 1); //should return 1.
pairwise([1, 1, 1], 2, 1); //should return 1.
pairwise([0, 0, 0, 0, 1, 1], 1, 10); //should return 10.
pairwise([], 100, 0); //should return 0.
