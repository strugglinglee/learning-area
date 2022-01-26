const getTwoSum = (nums, target) => {
  // 缓存已遍历项 key记录值 值记录下标
  const diffs = {};
  for (let i = 0; i < nums.length; i++) {
    // 有可能为零 所以检查其是否为undefined
    if (diffs[target - nums[i]] !== undefined) {
      return [diffs[target - nums[i]], i];
    }
    diffs[nums[i]] = i;
  }
};

// getTwoSum([4, 1, 5, 6], 9);

const getTwoSum2 = (nums, target) => {
  // 缓存已遍历项 key记录值 值记录下标
  const diffMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (diffMap.has(target - nums[i])) {
      return [diffMap.get(target - nums[i]), i];
    }
    diffMap.set(nums[i], i);
  }
};

// getTwoSum2([4, 1, 5, 6], 9);

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  const tlen = nums1.length;
  // nums1最后一位
  let max1 = m - 1;
  // nums2最后一位
  let max2 = n - 1;

  // 循环nums1
  for (let i = 0; i < tlen; i++) {
    // 目前需要填充的坑位
    const needFillIndex = tlen - i - 1;
    const isGet1 = nums1[max1] > nums2[max2];
    if (!nums2.length) {
      return nums1;
    }

    if (isGet1) {
      // 取nums1中有效位最大的值
      nums1[needFillIndex] = nums1[max1];
      max1--;
    } else {
      // 取nums2中有效位最大的值
      nums1[needFillIndex] = nums2.pop();
      max2--;
    }
  }
};

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge2 = function (nums1, m, nums2, n) {
  let k = m + n - 1;
  // nums1最后一位
  let i = m - 1;
  // nums2最后一位
  let j = n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
      k--;
    } else {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }

  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
  return nums1;
};

// merge2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

const threeSum = function (nums) {
  // 排序
  nums = nums.sort((a, b) => a - b);
  let n = 0;
  const len = nums.length;
  let res = [];

  // 给指针预留两个空位
  while (n < len - 2) {
    let r = len - 1;
    let l = n + 1;
    // 固定元素
    const fixedOne = nums[n];

    // 跳过相同元素 判断当前元素和下一个元素是否相等
    if (n > 0 && fixedOne === nums[n - 1]) {
      n++;
      continue;
    }

    while (l < r) {
      let rightOne = nums[r];
      let leftOne = nums[l];

      if (fixedOne + rightOne + leftOne < 0) {
        l++;
        // 跳过相同元素 判断当前元素和下一个元素是否相等
        while (l < r && nums[l] === nums[l - 1]) l++;
      } else if (fixedOne + rightOne + leftOne > 0) {
        r--;
        // 跳过相同元素  判断当前元素和上一个元素是否相等
        while (l < r && nums[r] === nums[r + 1]) r--;
      } else {
        res.push([fixedOne, rightOne, leftOne]);
        l++;
        r--;

        // 跳过相同元素 判断当前元素和下一个元素是否相等
        while (l < r && nums[l] === nums[l - 1]) l++;
        // 跳过相同元素 判断当前元素和上一个元素是否相等
        while (l < r && nums[r] === nums[r + 1]) r--;
      }
    }

    n++;
  }

  return res;
};

threeSum([-1, 0, 1, 2, -1, -4]);

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum2 = function (nums) {
  // 用于存放结果数组
  let res = [];
  // 给 nums 排序
  nums = nums.sort((a, b) => {
    return a - b;
  });
  // 缓存数组长度
  const len = nums.length;
  // 注意我们遍历到倒数第三个数就足够了，因为左右指针会遍历后面两个数
  for (let i = 0; i < len - 2; i++) {
    // 左指针 j
    let j = i + 1;
    // 右指针k
    let k = len - 1;
    // 如果遇到重复的数字，则跳过
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (j < k) {
      // 三数之和小于0，左指针前进
      if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
        // 处理左指针元素重复的情况
        while (j < k && nums[j] === nums[j - 1]) j++;
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        // 三数之和大于0，右指针后退
        k--;

        // 处理右指针元素重复的情况
        while (j < k && nums[k] === nums[k + 1]) k--;
      } else {
        // 得到目标数字组合，推入结果数组
        res.push([nums[i], nums[j], nums[k]]);

        // 左右指针一起前进
        j++;
        k--;

        // 若左指针元素重复，跳过
        while (j < k && nums[j] === nums[j - 1]) j++;

        // 若右指针元素重复，跳过
        while (j < k && nums[k] === nums[k + 1]) k--;
      }
    }
  }

  // 返回结果数组
  return res;
};

// threeSum2([-1, 0, 1, 2, -1, -4]);
