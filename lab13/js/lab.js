/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Dani Dayao
   Published: 11/18/2024
*/

document.getElementById("runButton").addEventListener("click", fizzBuzzBoom);

function fizzBuzzBoom() {
  const maxNumberInput = document.getElementById("maxNumber");
  const maxNumber = parseInt(maxNumberInput.value, 10);
  const outputDiv = document.getElementById("output");

  outputDiv.innerHTML = ""; // Clear previous output

  // Validate user input
  if (isNaN(maxNumber) || maxNumber <= 0) {
    outputDiv.innerHTML = "<p>Please enter a valid positive number.</p>";
    return;
  }

  for (let i = 1; i <= maxNumber; i++) {
    let result = "";

    if (i % 3 === 0) result += "Fizz";
    if (i % 5 === 0) result += "Buzz";
    if (i % 7 === 0) result += "Boom";

    if (result === "") result = i;

    // Append the result to the output div
    const paragraph = document.createElement("p");
    paragraph.textContent = result;
    outputDiv.appendChild(paragraph);
  }
}
