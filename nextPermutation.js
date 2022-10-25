/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function nextPerm(nums) {
  // find the first small number than the last num = pivot
  // itterate from end to start to find the first reducing point (i)

  //[1,2,3,5,4,(6),9,8,7]  --> i = 5, nums[j] ==6

  let i = nums.length - 2;
  while (nums[i] >= nums[i + 1]) {
    i--;
  }

  // then find the higher number than nums[i] iterating end
  // asign the value to (j)

  //[1,2,3,5,4,(6),9,8,(7)]  --> i = 5, nums[j] ==6   j =8 , nums[j] ==7

  // then switch nums[i] and nums[j]   [1,2,3,5,4,(7),9,8,(6)]

  if (i >= 0) {
    let j = nums.length - 1;
    while (nums[i] >= nums[j]) {
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  let left = i + 1;
  let right = nums.length - 1;

  // then reverse the right section of nums from (i+1)  [1,2,3,5,4,7,{9,8,6}] -->[1, 2, 3, 5, 4, 7, 6, 8, 9]

  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }

  return nums;
}

nums = [1, 2, 3, 5, 4, 6, 9, 8, 7]; // [1, 2, 3, 5, 4, 7, 6, 8, 9]
nums1 = [1, 2, 3];
nums2 = [2, 3, 1];

console.log(nextPerm(nums2));
