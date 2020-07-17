var appointText = "";
var appointTime = "";
var currentDate;
var currentTime;
var currentContainer;
var tempArray = [];
var storedAppointments;
var returnedAppointments;
var textarea = document.getElementById("textarea");

console.log(new Date().getHours())


var t = new Date().getHours();
if (t < 10) {
  document.getElementById("textarea").style.backgroundColor = "lightblue";
} else if (t < 20) {
  document.getElementById("textarea").style.backgroundColor = "green";
} else {
    document.getElementById("textarea").style.backgroundColor = "red";
}