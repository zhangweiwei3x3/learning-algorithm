/**
 * 集合
 *     使用 MySet 防止 和 元素 Set 对象
 */
function MySet() {
    this.dataStore = [];
}

// 添加
MySet.prototype.add = function (elem) {
    if (this.dataStore.indexOf(elem) === -1) {
        this.dataStore.push(elem);

        return true;
    }

    return false;
};

// 移除
MySet.prototype.remove = function (elem) {
    let pos = this.dataStore.indexOf(elem);

    if (pos !== -1) {
        this.dataStore.splice(pos, 1);

        return true;
    }

    return false;
};

// 包含
MySet.prototype.contains = function (elem) {
    return this.dataStore.indexOf(elem) !== -1;
    // for (let i = 0; i < this.dataStore.length; i++) {
    //     if (this.dataStore[i] === elem) {
    //         return true;
    //     }
    // }

    // return false;
};

// 大小
MySet.prototype.size = function () {
    return this.dataStore.length;
};

// 并集
MySet.prototype.union = function (set) {
    var tempSet = new Set();

    for (let i = 0; i < this.dataStore.length; i++) {
        tempSet.add(this.dataStore[i]);
    }

    for (let i = 0; i < set.dataStore.length; i++) {
        tempSet.add(set.dataStore[i]);
    }

    return tempSet;
};

// 交集
MySet.prototype.intersect = function (set) {
    var tempSet = new Set();

    for (let i = 0; i < this.dataStore.length; i++) {
        let elem = this.dataStore[i];

        if (set.contains(elem)) {
            tempSet.add(elem);
        }
    }

    return tempSet;
};

// 子集
// this 是否是 set 的子集
MySet.prototype.subset = function (set) {
    if (this.size() > set.size()) {
        return false;
    }

    for (let i = this.dataStore.length; i--;) {
        let elem = this.dataStore[i];

        if (!set.contains(elem)) {
            return false;
        }
    }

    return true;
};

// 补集
// 属于 this，不属于 set 的集合
MySet.prototype.difference = function (set) {
    var tempSet = new Set();

    for (let i = 0; i < this.dataStore.length; i++) {
        let elem = this.dataStore[i];

        if (!set.contains(elem)) {
            tempSet.add(elem);
        }
    }

    return tempSet;
};

// 显示
MySet.prototype.display = function () {
    return this.dataStore.toString();
};


export default MySet;
