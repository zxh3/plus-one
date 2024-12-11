const assert = require("assert");
const plusOne = require("../src/index");

describe("plusOne Function Tests", () => {
  it("should return 2 when input is 1", () => {
    assert.strictEqual(plusOne(1), 2);
  });

  it("should return 1 when input is 0", () => {
    assert.strictEqual(plusOne(0), 1);
  });

  it("should return 0 when input is -1", () => {
    assert.strictEqual(plusOne(-1), 0);
  });

  it("should throw an error when input is not a number", () => {
    assert.throws(() => plusOne("string"), {
      name: "TypeError",
      message: "Input must be a number",
    });
  });
});
