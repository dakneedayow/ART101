// index.js - purpose and description here
// Author: Dani Dayao
// Date: 22 October, 2024

//Define Variables
myTransport = ["VANessa", "Ravioli", "Kona", "The Bus"];

//object for main ride
myMainRide = {
  carName: "VANessa",
  make: "Toyota",
  model: "Sienna",
  color: "Tan",
  year: "1999",
  age: function() {
    return 2024 - this.year;
  }
}

//Output
document.writeln("Names of transportation I use ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
