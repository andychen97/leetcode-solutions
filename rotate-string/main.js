/*
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.

Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true
Example 2:

Input: s = "abcde", goal = "abced"
Output: false
*/

// write function below
var rotateString = function (s, goal) {
  const combined = s + s;
  return combined.includes(goal);
};

const answer = rotateString('abcde', 'cdeab');
// eslint-disable-next-line no-console
console.log(answer);

// pseudo code
// check the lengths of both s and goal
//    if they are not equal, return false
// multiply string s by 2 and assign it to a variable combined
// check if combined includes goal
// return true or false

var rotateString2 = function (s, goal) {
  if (s.length !== goal.length) return false;
  const combined = s + s;
  return combined.includes(goal);
};

const answer2 = rotateString2('abcde', 'cdeab');
// eslint-disable-next-line no-console
console.log(answer2);
