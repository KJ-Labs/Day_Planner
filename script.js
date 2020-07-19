var appointText = "";
var appointTime = "";
var currentContainer;
let currenthour = new Date().getHours();

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


    var timearray = ['9', '10', '11', '12', '13', '14', '15', '16', '17']

  });

});

