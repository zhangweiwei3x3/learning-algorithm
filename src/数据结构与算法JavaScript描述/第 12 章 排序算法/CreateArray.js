/**
 * 创建数组
 */
function CreateArray() {
    this.dataStore = [];
}

// 设置数组
// n 个元素
// isRandom 是否是 随机数组
CreateArray.prototype.set = function (n, isRandom) {
    if (isRandom) {
        for (let i = 0; i < n; i++) {
            this.dataStore[i] = Math.ceil(Math.random() * n);
        }
    } else {
        for (let i = 0; i < n; i++) {
            this.dataStore[i] = i;
        }
    }
};

// 获取数组元素
CreateArray.prototype.get = function () {
    return this.dataStore;
};

// 交换数组元素
CreateArray.prototype.swap = function (n, m) {
    [this.dataStore[n], this.dataStore[m]] = [this.dataStore[m], this.dataStore[n]];
};

// 反转数组元素
CreateArray.prototype.reverse = function () {
    return this.dataStore.reverse();
};

// 清空
CreateArray.prototype.clear = function () {
    this.dataStore.length = 0;
};

export default CreateArray;