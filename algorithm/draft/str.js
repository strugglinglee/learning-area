/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  const len = s.length;
  // 左指针
  let l = 0;
  // 右指针
  let r = len - 1;
  // 被删除字符串次数
  let d = 0;

  while (l < r) {
    console.log('l r', s[l], s[r]);
    // 删除字符大于一 自动跳出
    if (d > 1) {
      console.log('d > 1');
      return false;
      // 相等 继续往前
    } else if (s[l] === s[r]) {
      console.log('====');
      l++;
      r--;
      // 不相等 左边往右移动一位 删除左边字符
    } else {
      console.log('d++++');
      d++;
      l++;
    }
  }

  console.log('ddd', d);
  if (d > 1) {
    return false;
  }
  return true;
};

validPalindrome('cbbcc');

const validPalindrome2 = (s) => {
  // 缓存字符串的长度
  const len = s.length;

  // i、j分别为左右指针
  let i = 0,
    j = len - 1;

  // 当左右指针均满足对称时，一起向中间前进
  while (i < j && s[i] === s[j]) {
    i++;
    j--;
  }

  // 尝试判断跳过左指针元素后字符串是否回文
  if (isPalindrome(i + 1, j)) {
    return true;
  }
  // 尝试判断跳过右指针元素后字符串是否回文
  if (isPalindrome(i, j - 1)) {
    return true;
  }

  // 工具方法，用于判断字符串是否回文
  function isPalindrome(st, ed) {
    while (st < ed) {
      if (s[st] !== s[ed]) {
        return false;
      }
      st++;
      ed--;
    }
    return true;
  }

  // 默认返回 false
  return false;
};
