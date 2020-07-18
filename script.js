var appointText = "";
var appointTime = "";
var currentContainer;
let currenthour = new Date().getHours();


console.log(currenthour);



if (currenthour > 17) {
  $("#9").addClass("past");
}
  else if (now < 17) {
      $("#9").addClass("future");
}
else {
  $("#9").addClass("present");
}
