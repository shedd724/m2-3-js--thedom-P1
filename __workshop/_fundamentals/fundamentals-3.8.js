// Exercise 8
//
// Part 1 - Write
// ---------------
// Write a function that accepts a string and returns the string, reversed.
// For example "hello" would return "olleh" and "how are you" would return "uoy era woh".

function reverseIt(str) {
  // Your code here
  let splitString = str.split("");
  let reverseString = splitString.reverse();
  let joinString = reverseString.join("");
  return joinString;
}	

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = reverseIt;
