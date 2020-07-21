
var currentContainer;
let currenthour = new Date().getHours();
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
let currentDay = document.getElementById("currentDay").innerHTML = m + "/" + d + "/" + y;


//Clears the current values, so that the user can use the planner the next day. 
$( ".button-xsmall" ).click(function() {
  cleardata();
});
//data starts at 9 am then continues using military hours
function cleardata() {
  for (var i = 9; i <= 17; i++) {
      $("#" + i).val(""); 
  }
}

//Changes the box different colors depending on the current time. 
$(".textarea").each(function () {
  if (currenthour < $(this).attr("id")) {
    $(this).addClass("future");
  } else if (currenthour > $(this).attr("id")) {
    $(this).addClass("past");
  }
  else {
    $(this).addClass("present");
  }
})

//Gets the id and text input and then assigns it to local storage. 
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var textvalue = $(this).siblings('.inputText').find('textarea').val();
    var timevalue = $(this).siblings('.inputText').find('textarea').attr("id");
    localStorage.setItem(timevalue, textvalue);

  });

  //Prints it back to the page, so then you can see it even if you refresh. 


});

//Loop to log text input to local storage to prevent refreshing removing the information. 
function renderText() {
  //data starts at 9 am then continues using military hours
  for (var i = 9; i <= 17; i++) {
      $("#" + i).val(localStorage.getItem(i));
  }
}

renderText();



