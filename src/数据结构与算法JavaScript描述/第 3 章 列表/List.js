/**
 * 列表
 */
function List() {
    this.dataStore = []; // 初始化一个空数组来保存列表元素
    this.pos = 0; // 列表当前位置
}

// 清空列表
List.prototype.clear = function () {
    // 使用 this.dataStore = [] 是重新赋值，以前的引用还在例：
    // var a = [1,2]; var b = a; a = []; 
    // console.log(b) // [1,2]
    this.dataStore.length = 0;
    this.pos = 0;
};

// 查找元素当前的位置
List.prototype.find = function (elem) {
    for (let i = this.dataStore.length; i--;) {
        if (this.dataStore[i] === elem) {
            return i;
        }
    }

    return -1;
};

// 列表中是否含有元素
List.prototype.contains = function (elem) {
    return this.find(elem) !== -1;
};

// 返回当前位置的元素
List.prototype.getElement = function () {
    return this.dataStore[this.pos];
};

// 在列表的末尾插入新元素
List.prototype.append = function (elem) {
    this.dataStore.push(elem);
};

// 在现有的元素后面插入新元素
List.prototype.insert = function (elem, after) {
    let insertPos = this.find(after);

    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, elem);

        return true;
    }

    return false;
};

// 从列表中删除元素
List.prototype.remove = function (elem) {
    let insertPos = this.find(elem);

    if (insertPos > -1) {
        this.dataStore.splice(insertPos, 1);

        return true;
    }

    return false;
};

// 将列表的当前位置移动到第一个元素
List.prototype.front = function () {
    this.pos = 0;
};

// 将列表的当前位置移动到最后一个元素
List.prototype.end = function () {
    this.pos = this.dataStore.length - 1;
};

// 将列表的当前位置向前移动一位
List.prototype.prev = function () {
    this.pos--;
};

// 将列表的当前位置向后移动一位
List.prototype.next = function () {
    this.pos++;
};

// 将列表的当前位置移动到指定位置
List.prototype.moveTo = function (position) {
    this.pos = position;
};

// 返回列表当前元素位置
List.prototype.currPos = function () {
    return this.pos;
};

// 返回列表的字符串形式
List.prototype.toString = function () {
    return this.dataStore.toString();
};

// 返回列表中元素个数
List.prototype.size = function () {
    return this.dataStore.length;
};