/* 
 * Key Points

 * Input: array sorted in ascending order
 * Input: array contains only integers
 * Input: sum is an integer
 * 
 * Problem: Find a matching pair that 
 *          adds up to the given sum
 * 
 * Constraints: most optimal solution for
 *              time and space complexity
 * 
 * Output: return value is a boolean
 */

// * Brute Force Solution
// * Time Complexity: O(n^2)
// * Space Complexity: O(1)
/*
const hasMatchingPairs = (array: number[], sum: number): boolean => {
  for (let firstArrayIndex = 0; firstArrayIndex < array.length; firstArrayIndex++) {
    for (let secondArrayIndex = firstArrayIndex + 1; secondArrayIndex < array.length; secondArrayIndex++) {
      const calculatedSum = array[firstArrayIndex] + array[secondArrayIndex];
      
      if (calculatedSum === sum) {
        return true;
      }
    }    
  }

  return false;
};
*/

// * Optimal Solution
// * Time Complexity: O(n)
// * Space Complexity: O(1)
/*
 * Have low start at the beginning of the array
 * Have high start at the end of the array
 * If low < high start iteration
 * low + high compare to sum
 * If result < sum then increase low
 * If result > sum then decrease high
 * If result === sum then return true
 * Continue to next iteration
 */
/*
const hasMatchingPairs = (array: number[], sum: number): boolean => {
  let high = array.length - 1;
  for (let low = 0; low < high; low++) {
    const calculatedSum = array[low] + array[high];
    if (calculatedSum < sum) {
      continue;
    } else if (calculatedSum > sum) {
      high--;
      low--;
    } else {
      return true;
    }
  }
  
  return false;
};
*/

// * Added Constraints
// * Array is not sorted

// * Optimal Solution
// * Time Complexity: O(n)
// * Space Complexity: O(n)
/*
 * Create an object of key-value pairs
 * Iterate through elements of the array
 * If complement in object then return true
 * Else place element in object
 */ 
const hasMatchingPairs = (array: number[], sum: number): boolean => {
  const complements = new Set<number>();
  for (let index = 0; index < array.length; index++) {
    const currentValue = array[index];
    const complement = sum - currentValue;
    if (complements.has(complement)) {
      return true;
    } 

    complements.add(currentValue)
  }

  return false;
};

console.log(hasMatchingPairs([], 0));
console.log(hasMatchingPairs([1], 1));
console.log(hasMatchingPairs([1,2,4,4], 8));
console.log(hasMatchingPairs([4,4,2,1], 8));
console.log(hasMatchingPairs([1,2,3,4], 5));
console.log(hasMatchingPairs([4,3,2,1], 5));
