/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Dani Dayao
   Date: 11/3/2024
*/

console.log("JavaScript loaded!");

$(document).ready(function() {
  $("#myButton").click(function() {
      $("#textElement").text("If you're reading this, Dani finally figured it out.");
  });
});


$(document).ready(function() {
  $('#myButton1').click(function() {
      alert('Look the buttons are still working! This is a special thanks to WesBot, ChatGPT, and Kimberly from group 11 for the extra help');
  });
});

$(document).ready(function() {
  $('#myButton2').click(function() {
    $("#results").toggleClass("special");
  });
});