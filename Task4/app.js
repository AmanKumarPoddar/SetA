function countGoodSubarrays(nums, k) {
  let count = 0;

  for (let start = 0; start < nums.length; start++) {
    let distinctCount = 0;
    let freqMap = {};

    for (let end = start; end < nums.length; end++) {
      if (!freqMap[nums[end]]) {
        freqMap[nums[end]] = 0;
      }
      freqMap[nums[end]]++;

      if (freqMap[nums[end]] === 1) {
        distinctCount++;
      }

      if (distinctCount === k) {
        count++;
      }
    }
  }

  return count;
}

const nums = [1, 2, 3, 2];
const k = 2;
console.log(countGoodSubarrays(nums, k));
