/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Dani Dayao
   Published: 11/14/2024
*/

console.log("JavaScript loaded!");

var houseValues = {
  Gryffindor: "Gryffindor! This house values courage.",
  Ravenclaw: "Ravenclaw! This house values knowledge.",
  Slytherin: "Slytherin! This house values ambition",
  Hufflepuff: "Hufflepuff! This house values hard work"
};

var houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];

function sortingHat(str){
  len = str.length;
  mod = len % 4;
  if (mod == 0){
    return "Gryffindor" 
  }
  else if (mod == 1){
    return "Ravenclaw"
  }
  else if (mod == 2){
    return "Slytherin"
  }
  else if (mod == 3){
    return "Hufflepuff"
  }
}

$("#button").click(function(){
  console.log("Name: " + name);
  var name = $("#name").val()
  console.log("House: " + house);
  var house = sortingHat(name);
  $("#output").html("<h1>" + house + "</h1>");
});