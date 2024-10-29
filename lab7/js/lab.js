// index.js - purpose and description here
// Author: Dani Dayao
// Date: 28 October, 2024

//

function doTheThing() {
  var userName = window.prompt("Hi. Please give me your name:");
  console.log("User Name =", userName);
  
  var nameArray = userName.split('');
  console.log("Name Array =", nameArray);
  
  nameArray.sort();
  console.log("Name Array Sort =", nameArray);
  
  var nameSorted = nameArray.join('');
  console.log("Name Sorted =", nameSorted);
  
  return nameSorted;
}

document.writeln("Oh hey, I've fixed your name: " + doTheThing() + "<br>");
