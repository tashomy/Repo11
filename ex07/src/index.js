function largestNumFromArr(arr) {
  var maxNumArray = [];
  var temp = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (j == arr[i].length - 1) {
        if (temp < arr[i][j]) {
          temp = arr[i][j];
        }
        maxNumArray.push(temp);
        temp = 0;
        continue;
      }
      if (temp < arr[i][j]) {
        temp = arr[i][j];
      }
    }
  }
  return maxNumArray;
}

var myAr = [
  [13, 27, 18, 26],
  [4, 5, 1, 3],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];

var myAr2 = [
  [4, 9, 1, 3],
  [13, 35, 18, 26],
  [32, 35, 97, 39],
  [10000, 1001, 857, 1],
];

console.log(largestNumFromArr(myAr2));

module.exports = largestNumFromArr;
