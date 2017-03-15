/**
 * 散列表
 */
function HashTable(n = 5381) {
    this.table = new Array(n);
    this.values = []; // 开链法 存的 data 数据
}

// set 新增
// 开链法
HashTable.prototype.set = function (key, data = key) {
    let pos = this.hash(key),
        index = 0;

    this.table[pos] = this.table[pos] || [];

    while (this.table[pos][index] != null) {
        index++;
    }

    this.table[pos][index] = data;
};

// get 获取
// 开链法
HashTable.prototype.get = function (key) {
    return this.table[this.hash(key)];
};


// 显示散列数据
// 开链法
HashTable.prototype.show = function () {
    for (let i = 0; i < this.table.length; i++) {
        if (this.table[i] != null) {
            console.log(i + ': ' + this.table[i].toString());
        }
    }
};

// set 新增
// 线性探测法
HashTable.prototype.setLine = function (key, data = key) {
    let pos = this.hash(key);

    while (this.table[pos] != null) {
        pos++;
    }

    this.table[pos] = key;
    this.values[pos] = data;
};

// get 获取
// 线性探测法
HashTable.prototype.getLine = function (key) {
    let hash = this.hash(key);

    for (let i = hash; this.table[hash] != null; i++) {
        if (this.table[hash] === key) {
            return this.values[hash];
        }
    }

    return;
};

// 显示散列数据
// 线性探测法
HashTable.prototype.showLine = function () {
    for (let i = 0; i < this.table.length; i++) {
        if (this.table[i] != null) {
            console.log(this.table[i] + ': ' + this.values[i]);
        }
    }
};

// 散列函数
// 根据 字符的 ASCII 码值 来计算散列值
HashTable.prototype.hash = function (string) {
    const H = 37;
    var total = 0;

    for (var i = 0; i < string.length; i++) {
        total += H * total + string.charCodeAt(i);
    }
    total = total % this.table.length;

    return parseInt(total, 10);
};


export default HashTable;
