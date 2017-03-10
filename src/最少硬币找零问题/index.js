/**
 * 动态规划
 */
function MinCoinChange(coins) {
    this.coins = coins;
    this.cache = {};
}
MinCoinChange.prototype.makeChange = function (amount) {
    // amount 是 0 或不存在时，返回空数组
    if (!amount) {
        return [];
    }

    // 有缓存，读缓存中的数据
    if (this.cache[amount]) {
        return this.cache[amount];
    }

    var min = [],
        newMin, newAmount;

    // 遍历 面额
    for (let i = 0; i < this.coins.length; i++) {
        let coin = this.coins[i];

        newAmount = amount - coin;

        // newAmount 不是负数时
        if (newAmount >= 0) {
            // 剩下的余额 划分
            newMin = this.makeChange(newAmount);

            // 新解 newMin 的长度 小于 旧解 min 的长度 或者 不存在 旧解（第一个解）
            // 并且 新解 newMin 有值（合理） 或者 newAmount 等于 0（已经划分结束）
            if ((newMin.length < min.length || !min.length) && (newMin.length || !newAmount)) {
                min = [coin].concat(newMin);
                console.log('new Min ' + min + ' for ' + amount);
            }
        }
    }

    return (this.cache[amount] = min);
};

var m = new MinCoinChange([1, 5, 10, 25]);

m.makeChange(14);


/**
 * 贪心算法
 */
function MinCoinChange2(coins) {
    // 先排序好 面额
    this.coins = coins.sort((a, b) => {return a - b;});
}
MinCoinChange2.prototype.makeChange = function (amount) {
    var change = [],
        total = 0;

    for (var i = this.coins.length; i--;) {
        var coin = this.coins[i];

        while (total + coin <= amount) {
            change.push(coin);
            total += coin;
        }
    }

    return change;
};

var m2 = new MinCoinChange2([10, 25, 5, 1]);

m2.makeChange(14);

