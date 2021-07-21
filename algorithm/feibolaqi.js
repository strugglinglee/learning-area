//斐波拉契数列  求第n项的和
function fn(n) {
    let cache = {};
    function _fn(n) {
        if (cache[n]) {
            return cache[n];
        }
        count++;
        //前两项直接返回1
        if (n == 1 || n == 2) {
            return 1;
        }
        //求取前面一项
        let prev = _fn(n - 1);
        cache[n - 1] = prev;
        //求取前面
        let next = _fn(n - 2);
        cache[n - 2] = next;
        return prev + next;
    }
    return _fn(n);
}

let count2 = 0;
function fn2(n) {
    //需要计算的次数
    count2++;
    //前两项直接返回1
    if (n == 1 || n == 2) {
        return 1;
    }
    //前一项/前二项
    return fn2(n - 1) + fn2(n - 2);
}
//方法一
console.log(fn(20), count); // 6765 20
//方法二
console.log(fn2(20), count2); // 6765 13529