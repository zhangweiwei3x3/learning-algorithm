/**
 * ==============================================================
 * 动态规划
 * ==============================================================
 */

/**
 * 计算斐波那契数列
 *     1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
 */
// 递归实现
var recurFib = (function () {
    var cache = {
        1: 1,
        2: 1
    };

    function recurFibInner(n) {
        if (cache[n] != null) {
            return cache[n];
        }

        return cache[n] = recurFibInner(n - 1) + recurFibInner(n - 2);
    }

    return recurFibInner;
})();

// 动态规划
function dynFib(n) {
    if (n == 1 || n == 2) {
        return 1;
    }

    var val = [1, 1, 2];

    for (let i = 3; i < n; i++) {
        val[i] = val[i - 1] + val[i - 2];
    }

    return val[n - 1];
}


/**
 * 寻找最长公共子串
 */
// 暴力寻找最长公共子串
function lcs(w1, w2) {
    let index = 0,
        max = 0;

    for (let i = 0; i < w1.length; i++) {
        let tempMax = 0;

        for (let j = 0; j < w2.length; j++) {
            if (w1[i + tempMax] === w2[j]) {
                tempMax++;
            } else {
                if (tempMax > max) {
                    max = tempMax;
                    index = i;
                }
                
                tempMax = 0;
            }
        }

        if (tempMax > max) {
            max = tempMax;
            index = i;
        }
    }

    return w1.slice(index, index + max);
}

// 动态规划
function dynlcs(w1, w2) {
    let index = 0,
        max = 0,
        arr = [];

    for (let i = 0; i <= w1.length; i++) {
        arr[i] = [];

        for (let j = 0; j <= w2.length; j++) {
            if (i === 0 || j === 0) {
                arr[i][j] = 0;
            } else {
                if (w1[i - 1] === w2[j - 1]) {
                    arr[i][j] = (arr[i - 1][j - 1] || 0) + 1;
                } else {
                    arr[i][j] = 0;
                }
            }

            if (arr[i][j] && arr[i][j] > max) {
                max = arr[i][j];
                index = i;
            }
        }
    }

    if (max === 0) {
        return '';
    }

    return w1.slice(index - max, index);
}


/**
 * 背包问题
 */
// 递归实现
// capacity 背包容积
// size 商品大小
// value 商品价值
// n 商品个数
function knapsack(capacity, size, value, n = size.length) {
    if (n === 0 || capacity === 0) {
        return 0;
    }

    // 尺寸比较大，则减少商品的个数
    if (size[n - 1] > capacity) {
        return knapsack(capacity, size, value, n - 1);
    } else {
        return Math.max(
            value[n - 1] + knapsack(capacity - size[n - 1], size, value, n - 1),
            knapsack(capacity, size, value, n - 1)
        );
    }
}

// 动态规划
function dKnapsack(capacity, size, value, n) {
    var K = [];

    for (let i = 0; i <= n; i++) {
        K[i] = [];
        for (let j = 0; j <= capacity; j++) {
            if (i == 0 || j == 0) {
                K[i][j] = 0;
            } else if (size[i - 1] <= j) {
                K[i][j] = Math.max(value[i - 1] + K[i - 1][j - size[i - 1]], K[i - 1][j]);
            } else {
                K[i][j] = K[i - 1][j];
            }
        }
    }

    return K[n][capacity];
}


/**
 * ==============================================================
 * 贪心算法
 * ==============================================================
 */

/**
 * 找零问题
 */
function makeChange(amount, coins) {
    coins = coins.sort((a, b) => {return a - b;});
    var change = [],
        total = 0;

    for (var i = coins.length; i--;) {
        var coin = coins[i];

        while (total + coin <= amount) {
            change.push(coin);
            total += coin;
        }
    }

    return change;
}


export default {recurFib, dynFib, lcs, dynlcs, knapsack, dKnapsack, makeChange};
