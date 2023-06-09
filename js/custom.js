$(function () {
  window.scrollReveal = new scrollReveal();
  ("use strict");

  // PreLoader
  $(window).load(function () {
    $(".loader").fadeOut(400);
  });

  // Backstretchs
  $("#header").backstretch("images/3.jpg");
  $("#services").backstretch("images/3.jpg");

  // Countdown
  $(".countdown").downCount({
    date: "01/01/2024 12:00:00",
    offset: +10,
  });
});
