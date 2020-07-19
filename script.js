var appointText = "";
var appointTime = "";
var currentContainer;
let currenthour = new Date().getHours();
var timeblock9am = document.getElementById('.textarea#9');
var timeblock10am = document.getElementById('.textarea#10');
var timeblock11am = document.getElementById('.textarea#11');
var timeblock12pm = document.getElementById('.textarea#12');
var timeblock1pm = document.getElementById('.textarea#13');
var timeblock2pm = document.getElementById('.textarea#14');
var timeblock3pm = document.getElementById('.textarea#15');
var timeblock4pm = document.getElementById('.textarea#16');
var timeblock5pm = document.getElementById('.textarea#17');

window.onbeforeunload = function(e) {
  // Turning off the event
  e.preventDefault();
}


var containervalue = document.getElementById('.ininputTextput');
var containertime = $(".id").val();


console.log(currenthour);
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

localStorage.clear();
$(document).ready(function () {
  $(".saveBtn").on("click", function() {
    var textvalue = $(this).siblings('.inputText').find('textarea').val();
    var timevalue =  $(this).siblings('.inputText').find('textarea').attr("id");
    localStorage.setItem(timevalue, textvalue);

    console.log(localStorage.getItem('9'));
    console.log(localStorage.getItem('10'));
    console.log(localStorage.getItem('11'));
    console.log(localStorage.getItem('12'));
    console.log(localStorage.getItem('13'));
    console.log(localStorage.getItem('14'));
    console.log(localStorage.getItem('15'));
    console.log(localStorage.getItem('16'));
    console.log(localStorage.getItem('17'));

    timeblock9am = localStorage.getItem('9');

    $(textvalue).each(function () {
      if (textvalue.length = 0) {
        0
      }else {
        textvalue = (localStorage.getItem($(this).siblings('.inputText').find('textarea').attr("id")))
      }
  });

});

});



