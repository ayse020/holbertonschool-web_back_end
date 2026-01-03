// 7-has_array_values.js

/**
 * Checks if all elements in an array exist within a set
 * @param {Set} set - The Set to check against
 * @param {Array} array - Array of values to check
 * @returns {boolean} True if all elements exist in the set, false otherwise
 */
export default function hasValuesFromArray(set, array) {
  // Use the every() method to check all elements
  return array.every((element) => set.has(element));
}
