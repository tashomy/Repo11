function myBouncer(arr) {
  var helpArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      if (isNaN(arr[i])) {
        arr[i] = 0;
      }
    }
    if (
      arr[i] != null &&
      arr[i] != false &&
      arr[i] != 0 &&
      arr[i] != "" &&
      arr[i] != undefined
    ) {
      helpArr.push(arr[i]);
    }
  }
  return helpArr;
}

var pom = [7, "ate", "", false, 9];
var pom2 = ["a", "b", "c"];
var pom3 = [false, null, 0, NaN, undefined, ""];
var pom4 = [null, NaN, 1, 2, undefined, 9, "naja", ""];

console.log(myBouncer(pom4));

module.exports = myBouncer;
