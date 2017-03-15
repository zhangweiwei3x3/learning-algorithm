/**
 * 字典
 *     字典是一种以键 - 值对形式存储数据的数据结构
 */
function Dictionary() {
    this.dataStore = {};
}

// 新增
Dictionary.prototype.add = function (key, value) {
    this.dataStore[key] = value;
};

// 查找
Dictionary.prototype.find = function (key) {
    return this.dataStore[key];
};

// 删除
Dictionary.prototype.remove = function (key) {
    return delete this.dataStore[key];
};

// 字典的大小
Dictionary.prototype.size = function () {
    return Object.keys(this.dataStore).length;
};

// 清空
Dictionary.prototype.clear = function () {
    // for (let key in this.dataStore) {
    //     if (this.dataStore.hasOwnProperty(key)) {
    //         delete this.dataStore[key];
    //     }
    // }
    
    Object.keys(this.dataStore).forEach((key) => {
        delete this.dataStore[key];
    });
};

// 显示字典
Dictionary.prototype.display = function () {
    Object.keys(this.dataStore).sort().forEach((key) => {
        console.log(key + ' -> ' + this.dataStore[key]);
    });
};

export default Dictionary;