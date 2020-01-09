/*
 * Given an array nums, 
 * write a function to move all 0's 
 * to the end of it 
 * while maintaining the relative order of 
 * the non-zero elements.
 */

/*
 * Inputs: unsorted signed array
 * 
 * Problem: Move all zeroes to the end
 *          Keep non-zero numbers order the same 
 * 
 * Constraints: Must be in-place
 *              Minimize number of operations
 * 
 * Outputs: none
 */

// * Brute Force Solution
// * Time Complexity: O(n)
// * Space Complexity: O(n)
// * Issue: Not in-place
/*const moveZeroes = (nums: number[]): void => {
  const nonZeroArray = nums.filter((num: number): boolean => {
    return num !== 0;
  });

  let nonZeroIndex = 0;
  for (let index = 0; index < nums.length; index++) {
    if (index < nonZeroArray.length) {
      nums[index] = nonZeroArray[nonZeroIndex];
      nonZeroIndex++;
    } else {
      nums[index] = 0;
    } 
  }
};*/

// * Acceptable Solution
// * Time Complexity: O(n)
// * Space Complexity: O(1)
// * Issue: Sub-optimal operations: O(n) writes
/*const moveZeroes = (nums: number[]): void => {
  let nonZeroIndex = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === 0) {
      continue;
    }

    nums[nonZeroIndex] = nums[index]; 
  }

  for (let index = nonZeroIndex; index < nums.length; index++) {
    nums[index] = 0;
  }
};*/

// * Optimal Solution
// * Time Complexity: O(n)
// * Space Complexity: O(1)
// * Optimal operations: O(numNonZeroes)
const moveZeroes = (nums: number[]): void => {
  let nonZeroIndex = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== 0) {
      [nums[index], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[index]];
      nonZeroIndex++;
    }
  }
};