function multiplyArrayFunction(myArray) {
  var sum = 0;
  var product = 1;

  for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray[i].length; j++) {
      sum = sum + myArray[i][j];
      product = product * myArray[i][j];
    }
  }

  var arr = [product, sum];

  return arr;
}

var myAr = [[2.5, 2], [0.5, 0.2], [8]];

console.log(multiplyArrayFunction(myAr));

module.exports = multiplyArrayFunction;
