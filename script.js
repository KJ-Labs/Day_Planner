var appointText = "";
var appointTime = "";
var currentContainer;
let currenthour = new Date().getHours();


console.log(currenthour);

//past = grey, current = mint, future = blue

$(".textarea").each(function () {
  if (currenthour < $(this).attr("id") ) {
    $(this).addClass("future");
  }else if (currenthour > $(this).attr("id")) {
    $(this).addClass("past");
  }
    else {
    $(this).addClass("present");
  }
})



$(document).ready(function () {
  var savesnotesbtn = document.getElementById("savebutton");

  //FILL TEXT AREAS WITH NOTES
  for (var i = 9; i <= 17; i++) {
    $("#textarea" + i + "inputText").val(localStorage.getItem("textarea" + i));
    console.log('button clicked?')
  }

  function saveNotes() {
    for (var i = 1; i < 11; i++) {
      localStorage.setItem("textarea" + i, $("#textarea" + i + "inputText").val());
    }
  };
  savesnotesbtn.addEventListener("click", saveNotes);
});