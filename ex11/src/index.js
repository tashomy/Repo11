function splitArrayInGroups(arr, n) {
  var result = [];
  for (var i = 0; i < arr.length; i += n) {
    var substring = [];
    for (var j = i; j < i + n; j++) {
      substring.push(arr[j]);
    }
    result.push(substring);
  }

  for (var i = 0; i < result[result.length - 1].length; i++) {
    if (result[result.length - 1].includes(undefined)) {
      result[result.length - 1].pop();
    }
  }

  return result;
}

var pom1 = [0, 1, 2, 3, 4, 5, 6];

console.log(splitArrayInGroups(pom1, 2));
module.exports = splitArrayInGroups;
