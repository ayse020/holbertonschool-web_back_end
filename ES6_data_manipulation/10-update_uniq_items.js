// 10-update_uniq_items.js

/**
 * Updates all items in a map that have quantity of 1 to 100
 * @param {Map} map - The map to update
 * @returns {Map} The updated map
 * @throws {Error} If argument is not a Map
 */
export default function updateUniqueItems(map) {
  // Check if the argument is a Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  
  // Update items with quantity 1
  map.forEach((quantity, item) => {
    if (quantity === 1) {
      map.set(item, 100);
    }
  });
  
  return map;
}
