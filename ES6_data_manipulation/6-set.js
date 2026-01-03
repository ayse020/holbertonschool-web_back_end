// 6-set.js

/**
 * Creates a Set from an array
 * @param {Array} array - The array to convert to a Set
 * @returns {Set} A new Set containing unique elements from the array
 */
export default function setFromArray(array) {
  // Use the Set constructor to automatically remove duplicates
  return new Set(array);
}
