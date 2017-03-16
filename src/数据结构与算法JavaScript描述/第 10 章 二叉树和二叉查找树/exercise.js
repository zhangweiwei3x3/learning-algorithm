import {Node, BST} from './BST';

/**
 * 1、为 BST 类增加一个新方法，该方法返回 BST 中节点的个数。
 */
BST.prototype.map = function (callback, node) {
    if (typeof callback !== 'function') {
        return;
    }

    if (typeof node === 'undefined') {
        node = this.root;
    }

    if (node != null) {
        callback(node);
        this.map(callback, node.left);
        this.map(callback, node.right);
    }
};
BST.prototype.nodeSize = function () {
    var count = 0;

    this.map(() => {
        count++;
    });

    return count;
};

// 测试
var nums = new BST();

nums.insert(56);
nums.insert(22);
nums.insert(81);
nums.insert(91);
nums.insert(101);
nums.nodeSize();


/**
 * 2、为 BST 类增加一个新方法，该方法返回 BST 中边的个数。
 */
// 边的个数比节点的个数小 1
BST.prototype.sideSize = function () {
    return this.nodeSize() - 1;
};

// 测试
var nums2 = new BST();

nums2.insert(56);
nums2.insert(22);
nums2.insert(81);
nums2.insert(91);
nums2.insert(101);
nums.sideSize();

/**
 * 3、为 BST 类增加一个新方法 max()，该方法返回 BST 中的最大值。
 *     最大值就是右节点的值
 */
BST.prototype.max = function (node) {
    var current = node || this.root;

    if (current == null) {
        return false;
    }

    while (current.right != null) {
        current = current.right;
    }

    return current;
};

// 测试
var nums3 = new BST();

nums3.insert(56);
nums3.insert(22);
nums3.insert(81);
nums3.max();


/**
 * 4、为 BST 类增加一个新方法 min()，该方法返回 BST 中的最小值。
 *     最小值就是左节点的值
 */
BST.prototype.min = function (node) {
    var current = node || this.root;

    if (current == null) {
        return false;
    }

    while (current.left != null) {
        current = current.left;
    }

    return current;
};

// 测试
var nums4 = new BST();

nums4.insert(56);
nums4.insert(22);
nums4.insert(81);
nums4.min();


/**
 * 5、写一段程序，读入一个较大的文本文件，并将其中的单词保存到 BST 中，显示每个单词在文本中出现的次数。
 */
Node.prototype.update = function () {
    if (this.count) {
        this.count++;
    } else {
        this.count = 2;
    }
};
var str = 'the brown fox jumped over the blue fox';
var nums5 = new BST();

str.split(' ').forEach((item) => {
    if (nums5.find(item)) {
        nums5.find(item).update();
    } else {
        nums5.insert(item);
    }
});
nums5.map((node) => {
    console.log(node.data + ': ' + (node.count || 1));
});

