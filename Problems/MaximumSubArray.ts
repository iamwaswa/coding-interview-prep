/*
 * Given an integer array nums, 
 * find the contiguous subarray (containing at least one number) 
 * which has the largest sum and return its sum.
 */

/*
 * Input: Unsorted array of integers 
 *        containing both negative and positive numbers
 * 
 * Problem: Find largest sum of
 *          a contiguous sub array
 * 
 * Constraints: Most optimal time and space solution
 * 
 * Output: Largest sum of a contiguous sub array
 */

// * Brute Force Solution
// * Time Complexity: O(n^2)
// * Space Complexity: O(1)
/*const maximumSubArray = (nums: number[]): number => {
  if (nums.length === 0) {
    throw Error(`Invalid input: empty array`);
  } else if (nums.length === 1) {
    return nums[0];
  }
  
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let index = 0; index < nums.length; index++) {
    let iterationSum = nums[index];

    if (iterationSum > maxSum) {
      maxSum = iterationSum;
    }

    for (let innerIndex = index + 1; innerIndex < nums.length; innerIndex++) {
      iterationSum += nums[innerIndex];
      if (iterationSum > maxSum) {
        maxSum = iterationSum;
      }
    }
  }

  return maxSum;
};*/

// * Divide & Conquer Solution
// * Time Complexity: O(nlog(n))
// * Space Complexity: O(log(n))
/*const maximumSubArray = (nums: number[]): number => {
  if (nums.length === 0) {
    throw Error(`Invalid input: empty array`);
  } else if (nums.length === 1) {
    return nums[0];
  }

  return subArraySum(nums, 0, nums.length - 1);
};

const subArraySum = (
  array: number[], 
  start: number, 
  end: number
): number => {
  if (array.length === 1) {
    return array[0];
  }

  const mid = Math.floor((start + end) / 2);
  const leftSubArraySum = subArraySum(array, start, mid);
  const rightSubArraySum = subArraySum(array, mid + 1, end);
  const maxSideSum = Math.max(leftSubArraySum, rightSubArraySum);

  const maxCrossSum = maxLeftCrossSum(array, start, mid) + 
    maxRightCrossSum(array, mid + 1, end);

  return Math.max(maxSideSum, maxCrossSum);
};

const maxLeftCrossSum = (
  array: number[],
  start: number,
  mid: number
): number => {
  let sum = array[mid];
  let maxSumSoFar = sum;

  for (let index = mid - 1; index >= start; index--) {
    sum += array[index];
    if (sum > maxSumSoFar) {
      maxSumSoFar = sum;
    }
  }

  return maxSumSoFar;
};

const maxRightCrossSum = (
  array: number[],
  afterMid: number,
  end: number
): number => {
  let sum = array[afterMid];
  let maxSumSoFar = sum;

  for (let index = afterMid + 1; index <= end; index++) {
    sum += array[index];
    if (sum > maxSumSoFar) {
      maxSumSoFar = sum;
    }
  }

  return maxSumSoFar;
};*/

// * Optimal Solution
// * Time Complexity: O(n)
// * Space Complexity: O(1)
const maximumSubArray = (nums: number[]): number => {
  if (nums.length === 0) {
    throw Error(`Invalid input: empty array`);
  } else if (nums.length === 1) {
    return nums[0];
  }

  let maxSumSoFar = nums[0];
  let maxSum = maxSumSoFar;

  for (let index = 1; index < nums.length; index++) {
    maxSum = Math.max(nums[index], nums[index] + maxSumSoFar);
    if (maxSumSoFar > maxSum) {
      maxSum = maxSumSoFar;
    }
  }

  return maxSum;
};