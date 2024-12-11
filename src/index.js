/**
 * Increment a number by one.
 * @param {number} num - The number to increment.
 * @returns {number} - The incremented number.
 */
function plusOne(num) {
  if (typeof num !== "number") {
    throw new TypeError("Input must be a number");
  }

  if (num >= 0) {
    return num + 1;
  }
}

module.exports = plusOne;
