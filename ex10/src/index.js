function mySplice(arr1, arr2, n) {
  var firstArr = [...arr1];
  var secondArr = [...arr2];
  var newLength = firstArr.length + secondArr.length;

  for (var i = 0; i < newLength; i++) {
    if (i < n) continue;
    var temp = secondArr[i];
    secondArr[i] = firstArr.splice(firstArr.length - 1, 1)[0];
    secondArr[i + 1] = temp;
  }

  for (var i = 0; i < secondArr.length; i++) {
    if (secondArr[i] == undefined) {
      secondArr.splice(i, 1);
      break;
    }
  }

  return secondArr;
}

var pom = [1, 2, 3];
var pom2 = [4, 5];
var pom3 = ["b", "c"];
var pom4 = ["a", "d"];

console.log(mySplice(pom, pom2, 2));
module.exports = mySplice;
