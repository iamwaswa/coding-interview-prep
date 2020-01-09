/*
 * Given an array of integers, 
 * find if the array contains any duplicates.
 * Your function should return true 
 * if any value appears at least twice 
 * in the array, 
 * and it should return false 
 * if every element is distinct
 */

/*
 * Input: Unsorted signed integer array
 *        that may contain duplicates
 * 
 * Problem: Find duplicates
 * 
 * Constraints: Fast and low memory use
 * 
 * Output: Return true if an integer
 *         has at least two copies in the array
 *         otherwise return false
 */

// * Brute Force Solution
// * Time Complexity: O(n^2)
// * Space Complexity: O(1)
/*const containsDuplicate = (nums: number[]): boolean => {
  for (let index = 0; index < nums.length; index++) {
    for (let otherIndex = index + 1; otherIndex < nums.length; otherIndex++) {
      if (nums[index] === nums[otherIndex]) {
        return true;
      }
    }
  }

  return false;
};*/

// * Optimal Solution
// * Time Complexity: O(n)
// * Space Complexity: O(n)
const containsDuplicate = (nums: number[]): boolean => {
  const numsSet = new Set<number>();
  for (let index = 0; index < nums.length; index++) {
    if (numsSet.has(nums[index])) {
      return true;
    }    

    numsSet.add(nums[index]);
  }

  return false;
};