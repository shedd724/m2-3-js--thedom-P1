// We import (require) the function that we want to test.
const repeat = require("../fundamentals-3.7");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 7", () => {
  expect(repeat(["foo", 3])).toBe("foofoofoo");
  // add more tests here...
  expect(repeat(["fo", 3])).toBe("fofofo");
  expect(repeat(["foo", 2])).toBe("foofoo");
  expect(repeat(["foo", 4])).toBe("foofoofoofoo");
});

// More info on jest expect: https://jestjs.io/docs/en/expect
