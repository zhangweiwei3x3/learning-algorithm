import {lcs, dKnapsack, makeChange} from './High';

/**
 * 1、写一个程序，使用暴力技巧来寻找最长公共子串。
 */
lcs('12345', '2124567');


/**
 * 2、写一个程序，允许用户改变背包问题的约束条件，以便于观察条件的变化对结果的影响。
 *     比如，你可以改变背包的容量、物品的价值，或物品的重量。
 *     每次最好只改一个约束条件。
 */
var capacity = 16,
    size = [2, 4, 7, 8, 9],
    value = [4, 5, 10, 11, 13],
    n = size.length;

function change(c = capacity, s = size, v = value) {
    capacity = c;
    size = s;
    value = v;
}

// 测试
change([17, 4, 7, 8, 9]);
dKnapsack(capacity, size, value, n);


/**
 * 3、使用贪心算法找零钱，不过这次不允许使用 10 美分，假设要找的零钱一共是 30 美分，请尝试找到一个解。这个解是最优解吗？
 */
makeChange(30, [25, 1]);
