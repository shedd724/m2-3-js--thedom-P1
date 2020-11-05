// We import (require) the function that we want to test.
const getLetterAtIndex = require("../fundamentals-3.5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(getLetterAtIndex("bacon", 2)).toBe("c");
  // add more tests here...
  expect(getLetterAtIndex("egg", 1)).toBe("g");
  expect(getLetterAtIndex("bread", 2)).toBe("e");
  expect(getLetterAtIndex("ketchup", 4)).toBe("h");
});

// More info on jest expect: https://jestjs.io/docs/en/expect
