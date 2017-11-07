function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    arr1 = arr1.concat(arr2);
    var arrItems = [];
    var arrQty = [];
    var arr = [];
    arr1.map(function(elem, index) {
        var indexSearch = arrItems.indexOf(elem[1]);
        if(indexSearch === -1){
            arrItems.push(elem[1]);
            arrQty.push(elem[0]);
        } else {
            arrQty[indexSearch] += elem[0];
        }
    });

    for (var i = 0; i < arrItems.length; i++){
        arr.push([ arrQty[i], arrItems[i] ]);
    }

    var arrResult = arr.sort(function(a,b) {
        return a[1]>b[1];
    });
    console.log(arrResult);

    return arrResult;
}

// should return
/*[
  [88, "Bowling Ball"],
  [2, "Dirty Sock"],
  [3, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [5, "Microphone"],
  [7, "Toothpaste"]
]
*/
updateInventory(
    [
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"]
    ], [
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [67, "Bowling Ball"],
        [7, "Toothpaste"]
    ]);
// should return
/*

  [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
  ].
*/
updateInventory(
    [
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"]
    ], []);
// should return
// [
//   [67, "Bowling Ball"],
//   [2, "Hair Pin"],
//   [3, "Half-Eaten Apple"],
//   [7, "Toothpaste"]
// ].
updateInventory(
    [], [
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [67, "Bowling Ball"],
        [7, "Toothpaste"]
    ]);
// should return
// [
//   [1, "Bowling Ball"],
//   [0, "Dirty Sock"],
//   [1, "Hair Pin"],
//   [1, "Half-Eaten Apple"],
//   [0, "Microphone"],
//   [1, "Toothpaste"]
//  ].
updateInventory(
    [
        [0, "Bowling Ball"],
        [0, "Dirty Sock"],
        [0, "Hair Pin"],
        [0, "Microphone"]
    ], [
        [1, "Hair Pin"],
        [1, "Half-Eaten Apple"],
        [1, "Bowling Ball"],
        [1, "Toothpaste"]
    ]); //