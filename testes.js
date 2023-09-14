function findLongestSubarray(arr) {
let left = 0;
let right = 0;
let freqCount = {};
let maxLen = 0;

while (right < arr.length) {
  // Increase the frequency count of the current element
  if (!freqCount[arr[right]]) {
    freqCount[arr[right]] = 0;
  }
  freqCount[arr[right]]++;

  // Get the distinct values in the window
  let keys = Object.keys(freqCount).map(Number);

  // Check if the window meets the criteria
  if (keys.length <= 2 && Math.abs(keys[0] - keys[1]) <= 1) {
    maxLen = Math.max(maxLen, right - left + 1);
  } else {
    // Shrink the window from the left until it meets the criteria again
    while (keys.length > 2 || Math.abs(keys[0] - keys[1]) > 1) {
      freqCount[arr[left]]--;
      if (freqCount[arr[left]] === 0) {
        delete freqCount[arr[left]];
      }
      left++;
      keys = Object.keys(freqCount).map(Number);
    }
  }
  right++;
}

return maxLen;

}