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
 * 1、实现 advance(n) 方法，使当前节点向前移动 n 个节点。
 */
// 方法：
// 1、建立一个空数组
// 2、循环列表，每次循环时，把当前的 节点 从数组头部插入数组中，并且设置数组的长度为 n
// 3、知道遇到当前元素 elem
// 4、数组的第 n 个元素即最后一个元素就是 搜要找的元素
// 5、清空数组
SLList.prototype.advance = function (n, elem) {
    var currNode = this.head,
        resArr = [];

    while (currNode && currNode.elem !== elem) {
        resArr.unshift(currNode);
        resArr.length = n;

        currNode = currNode.next;
    }

    return resArr[n - 1];
};


/**
 * 2、实实现 back(n) 方法，使当前节点向后移动 n 个节点。
 */
SLList.prototype.back = function (n, elem) {
    var currNode = this.find(elem);

    while (n-- && currNode) {
        currNode = currNode.next;
    }

    return currNode;
};

/**
 * 3、实现 show() 方法，只显示当前节点上的数据。
 */
SLList.prototype.show = function (elem) {
    return this.find(elem);
};

/**
 * 4、使用单向链表写一段程序，记录用户输入的一组测验成绩。
 */
function Student(name, subject, score) {
    this.name = name; // 姓名
    this.subject = subject; // 科目
    this.score = score; // 成绩
}
var score = new SLList();

score.insert(new Student('张', '数学', 100));
score.insert(new Student('张', '语文', 90));
score.insert(new Student('张', '英语', 70));

score.display();


/**
 * 5、使用双向链表重写例 6-4 的程序。
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

// 测试
var cities = new DLList();

cities.insert('Conway');
cities.insert('Russellville', 'Conway');
cities.insert('Carlisle', 'Russellville');
cities.insert('Alma', 'Carlisle');
cities.display();
cities.remove('Carlisle');
cities.display();
cities.dispReverse();


/**
 * 6、约瑟夫问题。
 *     写一段程序将 n 个人围成一圈，并且第 m 个人会被杀掉，计算一圈人中哪两个人最后会存活。
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

// 测试
// 如果最后要剩下几个人，只要修改 circle.size() > 2 即可
function last(n, m) {
    var circle = new SCLList();
     
    circle.insert(1);

    for (var i = 1; i < n; i++) {
        circle.insert(i + 1, i);
    }

    var current = circle.find(1),
        tempM = 0;

    // 最后剩下 2 个人
    while (circle.size() > 2) {
        if (tempM === m) {
            let temp = current.next;

            circle.remove(current.elem);

            current = temp;
            tempM = 0;
        } else {
            tempM++;
            current = current.next;
        }


        if (current.elem === circle.__head__) {
            current = current.next;
        }
    }

    console.log(circle.display());

    return circle;
}

last(3, 1); // 1、3