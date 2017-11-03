function sym (args) {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  var arrResult = [];
  for (var i = 0; i < arguments.length; i++) {
    var arrArg = arguments[i];
    var arrayTemp = arrArg.filter(onlyUnique);
    arrResult=arrResult.concat(arrayTemp);
    arrResult = arrResult.filter(function(numNumber){
      return arrResult.indexOf(numNumber) === arrResult.lastIndexOf(numNumber);
    });
  }
  arrResult.sort();
  console.log(arrResult);
  console.log();
  return arrResult;
}

// should return [3, 4, 5]
sym([1, 2, 3], [5, 2, 1, 4]);
// should return [1, 4, 5]
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
// should return [1, 4, 5]
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
// should return [2, 3, 4, 6, 7]
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
// should return [1, 2, 4, 5, 6, 7, 8, 9]
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);

