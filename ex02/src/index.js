var temps = [
  [31, 32, 19, 37],
  [29, 27, 55, 36],
  [17, 27, 42, 46],
  [29, 52, 21, 64],
  [91, 27, 31, 61],
];

function myArrayFunction(arr) {
  var newTemps = [...arr];
  var averageDayTemp = [];
  var sum = 0;
  for (var i = 0; i < newTemps.length; i++) {
    for (var j = 0; j < newTemps[i].length; j++) {
      if (j == 3) {
        sum += newTemps[i][j];
        averageDayTemp.push(sum / 4);
        sum = 0;
        continue;
      }
      sum += newTemps[i][j];
    }
  }

  return averageDayTemp;
}

console.log(myArrayFunction(temps));

module.exports = myArrayFunction;
