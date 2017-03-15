import MySet from './Set';
import {SLList} from '../第 6 章 链表/LinkedList';

/**
 * 1、修改 Set 类，使里面的元素按顺序存储。写一段测试代码来测试你的修改。
 */
MySet.prototype.add = function (elem) {
    if (this.dataStore.indexOf(elem) === -1) {
        let len = this.dataStore.length;

        if (len === 0) {
            this.dataStore.push(elem);
        } else {
            for (let i = len; i--;) {
                if (elem > this.dataStore[i]) {
                    this.dataStore.splice(i + 1, 0, elem);
                }
            }
        }

        return true;
    }

    return false;
};

// 测试
var set1 = new MySet();

set1.add(1);
set1.add(3);
set1.add(2);
set1.display();


/**
 * 2、修改 Set 类，将存储方式从数组替换为链表。写一段测试代码来测试你的修改。
 */
/**
 * 集合
 *     使用 MySet 防止 和 元素 Set 对象
 */
function MyLinkedSet() {
    this.dataStore = new SLList();
}

// 添加
MyLinkedSet.prototype.add = function (elem) {
    if (this.dataStore.find(elem) == null) {
        this.dataStore.insert(elem);

        return true;
    }

    return false;
};

// 移除
MyLinkedSet.prototype.remove = function (elem) {
    return this.dataStore.remove(elem);
};

// 包含
MyLinkedSet.prototype.contains = function (elem) {
    return this.dataStore.find(elem) != null;
};

// 大小
MyLinkedSet.prototype.size = function () {
    return this.dataStore.size();
};

// 并集
MyLinkedSet.prototype.union = function (set) {
    var tempSet = new Set();
    var current = this.dataStore.find(this.dataStore.__head__);

    while (current.next) {
        current = current.next;
        tempSet.add(current.elem);
    }

    current = set.dataStore.find(set.dataStore.__head__);
    while (current.next) {
        current = current.next;
        tempSet.add(current.elem);
    }

    return tempSet;
};

// 交集
MyLinkedSet.prototype.intersect = function (set) {
    var tempSet = new Set();
    var current = this.dataStore.find(this.dataStore.__head__);

    while (current.next) {
        current = current.next;

        if (set.contains(current.elem)) {
            tempSet.add(current.elem);
        }
    }

    return tempSet;
};

// 子集
// this 是否是 set 的子集
MyLinkedSet.prototype.subset = function (set) {
    if (this.size() > set.size()) {
        return false;
    }
    var current = this.dataStore.find(this.dataStore.__head__);

    while (current.next) {
        current = current.next;

        if (!set.contains(current.elem)) {
            return false;
        }
    }

    return true;
};

// 补集
// 属于 this，不属于 set 的集合
MyLinkedSet.prototype.difference = function (set) {
    var tempSet = new Set();
    var current = this.dataStore.find(this.dataStore.__head__);

    while (current.next) {
        current = current.next;

        if (!set.contains(current.elem)) {
            tempSet.add(current.elem);
        }
    }

    return tempSet;
};

// 显示
MyLinkedSet.prototype.display = function () {
    return this.dataStore.display();
};

// 测试
var myLinkedSet = new MyLinkedSet();

myLinkedSet.add(1);
myLinkedSet.add(2);
myLinkedSet.add(3);
myLinkedSet.display();

var myLinkedSet2 = new MyLinkedSet();

myLinkedSet2.add(1);
myLinkedSet2.add(2);
myLinkedSet2.add(4);

myLinkedSet.union(myLinkedSet2);

myLinkedSet.intersect(myLinkedSet2);

myLinkedSet.subset(myLinkedSet2);

myLinkedSet.difference(myLinkedSet2);


/**
 * 为 Set 类增加一个 higher(element) 方法，该方法返回比传入元素大的元素中最小的那个。
 *     写一段测试代码来测试这个方法。
 */
MySet.prototype.higher = function (elem) {
    let res;
    
    this.dataStore.forEach((item) => {
        if (item > elem) {
            if (res == null) {
                res = item;
            } else if (res > item) {
                res = item;
            }
        }
    });

    return res;
};

// 测试
var mySet3 = new MySet();

mySet3.add(1);
mySet3.add(2);
mySet3.add(3);
mySet3.add(4);
mySet3.add(5);
mySet3.add(6);
mySet3.add(7);

mySet3.higher(5);


/**
 * 4、为 Set 类增加一个 lower(element) 方法，该方法返回比传入元素小的元素中最大的那个。
 *     写一段测试代码来测试这个方法。
 */
MySet.prototype.lower = function (elem) {
    let res;
    
    this.dataStore.forEach((item) => {
        if (item < elem) {
            if (res == null) {
                res = item;
            } else if (item > res) {
                res = item;
            }
        }
    });

    return res;
};

// 测试
var mySet4 = new MySet();

mySet4.add(1);
mySet4.add(2);
mySet4.add(3);
mySet4.add(4);
mySet4.add(5);
mySet4.add(6);
mySet4.add(7);

mySet4.lower(5);

