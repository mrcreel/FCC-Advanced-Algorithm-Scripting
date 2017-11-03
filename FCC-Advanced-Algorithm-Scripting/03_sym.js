function sym (args) {
  var arrResult = []
  for (var i = 0; i < arguments.length; i++) {
    var arrInput = arguments[i]
    for (var number in arrInput) {
      var arrTemp = []
      console.log(arrTemp.indexOf(arrInput[number]))
    }
    console.log(arrInput)
    // arrResult = arrResult.concat(arrInput)
  }
  console.log(arrResult)
  console.log('--------------------')
  return arrResult
}
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])// should return [1, 4, 5]
/*
sym([1, 2, 3], [5, 2, 1, 4])// should return [3, 4, 5]
sym([1, 2, 5], [2, 3, 5], [3, 4, 5])// should return [1, 4, 5]
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])// should return [2, 3, 4, 6, 7]
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])// should return [1, 2, 4, 5, 6, 7, 8, 9]
*/
