var monitorsListArray = ["Apple", "Peach", "Berry"];
var monitorsList = [];

function myMonitorsFunction(arr) {
  var newMonitorList = [...arr];

  for (var i = 0; i < newMonitorList.length; i++) {
    monitorsList[i] = [newMonitorList[i], i + 1];
  }
  return monitorsList;
}

console.log(myMonitorsFunction(monitorsListArray));

module.exports = myMonitorsFunction;
