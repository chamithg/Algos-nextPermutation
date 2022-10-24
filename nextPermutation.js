/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function nextPerm(nums) {
  // find the first small number than the last num = pivot

  let i = nums.length - 1;
  while (nums[i] >= nums[nums.length - 1] && i > 0) {
    i--;
  }
  pivot = nums[i];
  pivotInd = i;
  if (i === 0 && pivot > nums[nums.length - 1]) {
    return nums.sort();
  }
  console.log(pivot);

  // find the most closest large value to pivot = swap
  let gap;
  let swapInd = null;
  for (let j = i; j < nums.length; j++) {
    if (!gap) {
      gap = nums[j + 1] - pivot;
      swapInd = j;
    } else {
      if (gap > nums[j] - pivot) {
        gap = nums[j] - pivot;
        swapInd = j;
      }
    }
  }
  console.log(swapInd);

  // swap the pivot and swap
  nums[pivotInd] = nums[swapInd];
  nums[swapInd] = pivot;
  // reverse the string coming after pivots index

  //TODO

  return nums;
}

nums = [5, 4, 1, 2, 3, 8, 7];

console.log(nextPerm(nums));
