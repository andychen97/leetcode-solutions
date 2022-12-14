/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

//
// define a function with 2 parameters (nums, target)
// create an empty object named map
// loop through array
//    subtract target from nums[i] and assign to a variable named diff
//    use a conditional to check if maps contains a key of diff
//      if not, then add nums[i] to the maps object using index as value
//      if so, then returns indexes in an array
//

var twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const opposite = target - nums[i];
    if (obj[opposite] === undefined) {
      obj[nums[i]] = i;
    } else {
      return [obj[opposite], i];
    }
  }
};

const answer = twoSum([2, 11, 13, 7, 15], 9);
console.log(answer);
