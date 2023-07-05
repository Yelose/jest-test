import { sum } from "../src/example";
// const sum = require("../src/example").sum;

describe("Just an example to testing jest installation", () => {
  test("should be two", () => {
    expect(sum(1, 1)).toBe(2);
  });
});
