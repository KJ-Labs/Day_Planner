var appointText = "";
var appointTime = "";
var currentDate;
var currentTime;
var currentContainer;
var tempArray = [];
var storedAppointments;
var returnedAppointments;


console.log(new Date().getHours())


$(".textarea").each(function() {
  $(this).addClass("future");
})