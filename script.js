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




$("container").click(function () {
  console.log((this.attr('value')));
});