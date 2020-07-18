var appointText = "";
var appointTime = "";
var currentContainer;
let currenthour = new Date().getHours();

var containervalue = document.getElementById('.ininputTextput');
var containertime = $(".id").val();


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
  $(".saveBtn").on("click", function() {
    var textvalue = $(this).siblings('.inputText').find('textarea').val();
    var timevalue =  $(this).siblings('.inputText').find('textarea').attr("id");
    console.log(textvalue);
    console.log(timevalue);
  });
});

