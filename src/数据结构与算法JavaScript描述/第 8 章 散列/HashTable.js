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

    while (this.table[pos][index] != null && this.table[pos][index] !== key) {
        index += 2;
    }

    this.table[pos][index] = key;
    this.table[pos][index + 1] = data;
};

// get 获取
// 开链法
HashTable.prototype.get = function (key) {
    let keyValues = this.table[this.hash(key)];

    if (!keyValues) {
        return null;
    }

    for (let i = 0; i < keyValues.length; i += 2) {
        if (keyValues[i] === key) {
            return keyValues[i + 1];
        }
    }

    return null;
};


// 显示散列数据
// 开链法
HashTable.prototype.display = function () {
    for (let i = 0; i < this.table.length; i++) {
        if (this.table[i] != null) {
            for (let j = 0; j < this.table[i].length; j += 2) {
                console.log(this.table[i][j] + ': ' + this.table[i][j + 1]);
            }
        }
    }
};

// set 新增
// 线性探测法
HashTable.prototype.setLine = function (key, data = key) {
    let pos = this.hash(key);

    while (this.table[pos] != null && this.table[pos] !== key) {
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
HashTable.prototype.displayLine = function () {
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
