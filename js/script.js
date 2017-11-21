$(document).ready(function() {


      console.log("happiness it works");
      console.log("hey there");
$(".nav-bar a").click(function() {
  $('.nav-bar a').removeClass("active");
  $(this).addClass("active");

  console.log("test");
})


$('#close, #hamburger').click(function() {

    $("nav ul").toggleClass(".open-nav");



});

      //id selector
      $("#bulldog").click(function() {
          alert("this was clicked!");


      });
})
