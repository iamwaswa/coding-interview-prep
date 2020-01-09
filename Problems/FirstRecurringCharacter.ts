/*
 * Given an array of characters,
 * find the first repeated character
 */

/*
 * Input: Unsorted array of characters
 *
 * Problem: Find first recurring character
 *
 * Constraints: Most optimal time and space solution
 *
 * Output: First recurring character or undefined
 */

// * Brute Force Solution
// * Time Complexity: O(n^2)
// * Space Complexity: O(1)
/*const firstRecurringCharacter = <T extends any>(
  array: T[]
): T | undefined => {
  for (let i = 0; i < array.length - 1; i++) {
    const value = array[i];

    for (let j = i + 1; j < array.length; j++) {
      const possibleMatch = array[j];

      if (value === possibleMatch) {
        return value;
      }
    }
  }

  return undefined;
};*/

// * Optimal solution
// * Time Complexity: O(n)
// * Space Complexity: O(n)
const firstRecurringCharacter = <T extends any> (
  array: T[]
): T | undefined => {
  const characterSet = new Set<T>();

  for (let i = 0; i < array.length; i++) {
    if (characterSet.has(array[i])) {
      return array[i];
    }

    characterSet.add(array[i]);
  }

  return undefined;
};