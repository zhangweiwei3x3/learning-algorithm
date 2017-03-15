/**
 * 链表
 */
// 节点
function Node(elem) {
    this.elem = elem;
    this.next = null; // 下一个节点
    this.prev = null; // 上一个节点
}

/**
 * 单向链表
 */
function SLList() {
    this.__head__ = Math.random().toString(36);
    this.head = new Node(this.__head__);
    this.__size__ = 0;
}

// 查找 elem 在链表中的节点
SLList.prototype.find = function (elem) {
    var currNode = this.head;

    while (currNode && currNode.elem !== elem) {
        currNode = currNode.next;
    }

    return currNode;
};

// 查找 elem 节点的前一个节点
SLList.prototype.findPrev = function (elem) {
    var currNode = this.head;

    while (currNode.next.elem !== elem && currNode.next !== null) {
        currNode = currNode.next;
    }

    return currNode;
};

// 链表的长度
SLList.prototype.size = function () {
    return this.__size__;
};

// 在 elem 节点后面插入新节点 newElem
// elem 如果不存在就是在表头插入新节点
SLList.prototype.insert = function (newElem, elem) {
    var newNode = new Node(newElem),
        currNode = elem ? this.find(elem) : this.head;

    // currNode 有值，标示找到了当前节点
    if (currNode) {
        // 新节点的 next 引用等于当前节点 next 引用
        newNode.next = currNode.next;
        // 重置当前节点的 next 引用
        currNode.next = newNode;

        this.__size__++;
    }

    // 返回是否插入成功
    return !!currNode;
};

// 移除 elem 节点
SLList.prototype.remove = function (elem) {
    var prevNode = this.findPrev(elem);

    // prev 有值，标示找到了当前节点的上一个节点
    if (prevNode) {
        var currNode = this.find(elem);

        prevNode.next = prevNode.next.next;

        // 释放引用
        currNode.elem = null;
        currNode.next = null;
        currNode = null;

        this.__size__--;
    }

    // 返回是否移除成功
    return !!prevNode;
};

// 显示链表中的元素
SLList.prototype.display = function () {
    var currNode = this.head;

    console.log('链表中的节点有：');
    while (currNode.next !== null) {
        currNode = currNode.next;
        console.log(currNode.elem);
    }
    console.log('----------------');
};


/**
 * 双向链表
 */
function DLList() {
    this.__head__ = Math.random().toString(36);
    this.head = new Node(this.__head__);
}

// 查找 elem 在链表中的节点
DLList.prototype.find = function (elem) {
    var currNode = this.head;

    while (currNode && currNode.elem !== elem) {
        currNode = currNode.next;
    }

    return currNode;
};

// 查找链表中最后一个节点
DLList.prototype.findLast = function () {
    var currNode = this.head;

    while (currNode.next !== null) {
        currNode = currNode.next;
    }

    return currNode;
};

// 在 elem 节点后面插入新节点 newElem
// elem 如果不存在就是在表头插入新节点
DLList.prototype.insert = function (newElem, elem) {
    var newNode = new Node(newElem),
        currNode = elem ? this.find(elem) : this.head;

    // currNode 有值，标示找到了当前节点
    if (currNode) {
        // 新节点的 prev 引用等于当前节点
        newNode.prev = currNode;
        // 新节点的 next 引用等于当前节点 next 引用
        newNode.next = currNode.next;
        // 重置当前节点的下一个节点的 prev 引用 等于新节点
        if (currNode.next !== null) {
            currNode.next.prev = newNode;
        }
        // 重置当前节点的 next 引用
        currNode.next = newNode;
    }

    // 返回是否插入成功
    return !!currNode;
};

// 移除 elem 节点
DLList.prototype.remove = function (elem) {
    var currNode = this.find(elem);

    // current 有值，标示找到了当前节点
    if (currNode) {
        currNode.prev.next = currNode.next;
        currNode.next.prev = currNode.prev;

        // 释放引用
        currNode.elem = null;
        currNode.prev = null;
        currNode.next = null;
        currNode = null;
    }

    // 返回是否移除成功
    return !!currNode;
};

// 显示链表中的元素
DLList.prototype.display = function () {
    var currNode = this.head;

    console.log('链表中的节点有：');
    while (currNode.next !== null) {
        currNode = currNode.next;
        console.log(currNode.elem);
    }
    console.log('----------------');
};

// 反序显示链表中的元素
DLList.prototype.dispReverse = function () {
    var currNode = this.findLast();

    console.log('反序链表中的节点：');
    while (currNode.elem !== this.__head__) {
        console.log(currNode.elem);
        currNode = currNode.prev;
    }
    console.log('----------------');
};

/**
 * 单向循环链表
 */
function SCLList() {
    this.__head__ = Math.random().toString(36);
    this.head = new Node(this.__head__);
    this.head.next = this.head;
    this.__size__ = 0;
}

// 查找 elem 在链表中的节点
SCLList.prototype.find = function (elem) {
    var currNode = this.head;

    // currNode.next.elem !== this.__head__ 防止 死循环
    while (currNode.elem !== elem && currNode.next.elem !== this.__head__) {
        currNode = currNode.next;
    }

    // 确定返回值的正确性
    return currNode.elem === elem ? currNode : null;
};

// 查找 elem 节点的前一个节点
SCLList.prototype.findPrev = function (elem) {
    var currNode = this.head;

    // currNode.next.elem !== this.__head__ 防止 死循环
    while (currNode.next.elem !== elem && currNode.next.elem !== this.__head__) {
        currNode = currNode.next;
    }

    // 确定返回值的正确性
    return currNode.next.elem === elem ? currNode : null;
};

// 链表的长度
SCLList.prototype.size = function () {
    return this.__size__;
};

// 在 elem 节点后面插入新节点 newElem
// elem 如果不存在就是在表头插入新节点
SCLList.prototype.insert = function (newElem, elem) {
    var newNode = new Node(newElem),
        currNode = elem ? this.find(elem) : this.head;

    // currNode 有值，标示找到了当前节点
    if (currNode) {
        // 新节点的 next 引用等于当前节点 next 引用
        newNode.next = currNode.next;
        // 重置当前节点的 next 引用
        currNode.next = newNode;

        this.__size__++;
    }

    // 返回是否插入成功
    return !!currNode;
};

// 移除 elem 节点
SCLList.prototype.remove = function (elem) {
    var prevNode = this.findPrev(elem);

    // prev 有值，标示找到了当前节点的上一个节点
    if (prevNode) {
        var currNode = this.find(elem);

        prevNode.next = prevNode.next.next;

        // 释放引用
        currNode.elem = null;
        currNode.next = null;
        currNode = null;

        this.__size__--;
    }

    // 返回是否移除成功
    return !!prevNode;
};

// 显示链表中的元素
SCLList.prototype.display = function () {
    var currNode = this.head;

    console.log('链表中的节点有：');
    while (currNode.next.elem !== this.__head__) {
        currNode = currNode.next;
        console.log(currNode.elem);
    }
    console.log('----------------');
};


export default {SLList, DLList, SCLList};
