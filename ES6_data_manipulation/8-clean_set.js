// 8-clean_set.js

/**
 * Returns a string of all set values that start with a specific string
 * @param {Set} set - The Set to process
 * @param {string} startString - The string to check for at the beginning
 * @returns {string} The cleaned string joined with '-'
 */
export default function cleanSet(set, startString) {
  // If startString is empty or not a string, return empty string
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  
  const result = [];
  
  // Iterate through each value in the set
  for (const value of set) {
    // Check if value is a string and starts with startString
    if (typeof value === 'string' && value.startsWith(startString)) {
      // Remove the startString from the beginning
      const remainingPart = value.slice(startString.length);
      // Only add non-empty remaining parts
      if (remainingPart) {
        result.push(remainingPart);
      }
    }
  }
  
  // Join all parts with '-' separator
  return result.join('-');
}
