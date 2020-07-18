var appointText = "";
var appointTime = "";
var currentContainer;
let currenthour = new Date().getHours();
var ID = $(".container").attr("id");




var today = new Date().getHours();
$(".textarea").each(function () {
  if (currenthour < 17 ) {
    $(this).addClass("past");
    console.log(ID);
  }else if (currenthour = ID) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
})




$("container").click(function () {
  console.log((this.attr('value')));
});