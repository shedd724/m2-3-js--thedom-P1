// We import (require) the function that we want to test.
const firstLetter = require("../fundamentals-3.1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", function () {
  expect(firstLetter("max")).toBe("m");
  expect(firstLetter("")).toBe(undefined);
  // add more tests here...
  expect(firstLetter("trust")).toBe("t");
  expect(firstLetter("doubt")).toBe("d");
  expect(firstLetter("freedom")).toBe("f");
});

// Run your test by typing yarn test fundamentals-3.1 in the terminal.

// More info on jest expect: https://jestjs.io/docs/en/expect
