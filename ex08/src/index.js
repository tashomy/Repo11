function myMutation(arr) {
  var bool = true;
  var lowerCaseArr = [];

  for (var i = 0; i < arr.length; i++) {
    lowerCaseArr.push(arr[i].toLowerCase());
  }

  var including = lowerCaseArr[0];
  var provides = lowerCaseArr[1];

  for (var i = 0; i < provides.length; i++) {
    if (!including.includes(provides[i])) {
      bool = false;
      break;
    }
  }

  return bool;
}

var str = ["Neoel", "Zoe"];

console.log(myMutation(str));

module.exports = myMutation;
