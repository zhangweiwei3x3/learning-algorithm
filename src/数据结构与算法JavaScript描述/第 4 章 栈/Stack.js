/**
 * 栈
 *     后入先出（LIFO：last-in-first-out）的数据结构
 */
function Stack() {
    this.dataStore = [];
    this.top = 0;
}

// 入栈操作
Stack.prototype.push = function (elem) {
    this.dataStore.push(elem);
    this.top++;
};

// 出栈操作
Stack.prototype.pop = function (elem) {
    this.top--;

    return this.dataStore.pop(elem);
};

// 返回栈顶元素，不改变栈
Stack.prototype.peek = function () {
    return this.dataStore[this.top - 1];
};

// 栈大小
Stack.prototype.size = function () {
    return this.top;
};

// 清空栈
Stack.prototype.clear = function () {
    this.dataStore = [];
    this.top = 0;
};

// 判断栈是否为空
Stack.prototype.isEmpty = function () {
    return this.top === 0;
};