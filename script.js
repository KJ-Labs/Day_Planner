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
};


if (currenthour > 17) {
  $("#10").addClass("past");
}
  else if (now < 17) {
      $("#10").addClass("future");
}
else {
  $("#10").addClass("present");
};



if (currenthour > 17) {
  $("#11").addClass("past");
}
  else if (now < 17) {
      $("#11").addClass("future");
}
else {
  $("#11").addClass("present");
};




if (currenthour > 17) {
  $("#12").addClass("past");
}
  else if (now < 17) {
      $("#12").addClass("future");
}
else {
  $("#12").addClass("present");
};



if (currenthour > 17) {
  $("#1").addClass("past");
}
  else if (now < 17) {
      $("#1").addClass("future");
}
else {
  $("#1").addClass("present");
};



if (currenthour > 17) {
  $("#2").addClass("past");
}
  else if (now < 17) {
      $("#2").addClass("future");
}
else {
  $("#2").addClass("present");
};



if (currenthour > 17) {
  $("#3").addClass("past");
}
  else if (now < 17) {
      $("#3").addClass("future");
}
else {
  $("#3").addClass("present");
};



if (currenthour > 17) {
  $("#4").addClass("past");
}
  else if (now < 17) {
      $("#4").addClass("future");
}
else {
  $("#4").addClass("present");
};



if (currenthour > 17) {
  $("#5").addClass("past");
}
  else if (now < 17) {
      $("#5").addClass("future");
}
else {
  $("#5").addClass("present");
};



if (currenthour > 17) {
  $("#9").addClass("past");
}
  else if (now < 17) {
      $("#9").addClass("future");
}
else {
  $("#9").addClass("present");
};



if (currenthour > 17) {
  $("#9").addClass("past");
}
  else if (now < 17) {
      $("#9").addClass("future");
}
else {
  $("#9").addClass("present");
};



document.getElementById("saveBtn").addEventListener("click", function ()
    {
        var user = document.getElementById("textarea").value ;
        //localStorage["user"] = user ;
        localStorage.setItem("textarea", user) ;
        alert("gmail id saved") ;
        console.log("gmail id saved")
    } , false);