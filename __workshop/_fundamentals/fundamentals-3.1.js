// Exercise 1
//
// Part 1 - Write
// ---------------
// Write a function that returns the first character
// of the string that is passed to it.
//
// - If it's an empty string (''), return undefined.

function firstLetter(str) {
  // Your code here
  if (str === "") {
    return undefined;
  }
  return str[0];
}	


// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = firstLetter;
