// index.js - purpose and description here
// Author: Dani Dayao
// Date: 31 October, 2024

//

function isEven(x) {
  return (x % 2 == 0);
}

// Test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

var array = [100, 81, 4, 16, 42, 144, 10000];
console.log("My array: ", array);

var result = array.map(isEven);
console.log("Test evenness of array: ", result);

result = array.map(function(x) {
  return x ** 0.5;
});

console.log("Squareroot of array: ", result);