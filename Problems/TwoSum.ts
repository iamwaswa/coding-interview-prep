/*
 * Given an array of integers, 
 * return indices of the two numbers 
 * such that they add up to a specific target.
 * 
 * You may assume that each input 
 * would have exactly one solution, 
 * and you may not use the same element twice.
 */

/*
 * Key Points
 * Input: nums is unsorted
 * Input: nums contains only integers
 * Input: target is an integer
 *
 * Problem: Find a matching pair that
 *          adds up to the given sum
 *
 * Constraints: most optimal solution for
 *              time and space complexity
 *
 * Output: return value is the indices of the pair
 */

// * Brute Force Solution
// * Time Complexity: O(n^2)
// * Space Complexity: O(1)
/*const twoSum = (
  nums: number[], 
  target: number
): [number, number] => {
  for (let index = 0; index < nums.length; index++) {
    const complement = nums[index];

    for (let next = index + 1; next < nums.length; next++) {
      if (complement === nums[index]) {
        return [index, next];
      }
    }
  }

  throw Error(
    `Invalid input: nums => ${nums}, target => ${target}`
  );
};*/

// * Optimal Solution
// * Time Complexity: O(n)
// * Space Complexity: O(n)
const twoSum = (
  nums: number[],
  target: number
): [number, number] => {
  const complements = new Map<number, number>();

  for (let index = 0; index < nums.length; index++) {
    const complement = nums[index];
    if (complements.has(complement)) {
      return [complements.get(complement), index];
    }

    complements.set(target - complement, index);
  }

  throw Error(
    `Invalid input: nums => ${nums}, target => ${target}`
  );
};