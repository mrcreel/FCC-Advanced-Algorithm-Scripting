function pairwise(arr, arg) {
    var result = 0;
    var arrIndices = [];

    for (var i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === arg) {
                if (arrIndices.indexOf(i) === -1 && arrIndices.indexOf(j) === -1) {
                    arrIndices.push(i, j);
                    result += (i + j);
                }
            }
        }
    }
    return result;
}

pairwise([1, 4, 2, 3, 0, 5], 7, 11); //should return 11.
pairwise([1, 3, 2, 4], 4, 1); //should return 1.
pairwise([1, 1, 1], 2, 1); //should return 1.
pairwise([0, 0, 0, 0, 1, 1], 1, 10); //should return 10.
pairwise([], 100, 0); //should return 0.