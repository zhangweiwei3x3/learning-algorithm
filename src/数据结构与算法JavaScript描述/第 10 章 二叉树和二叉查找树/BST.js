/**
 * 二叉树
 */

// 节点
function Node(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
}

// 二叉树
function BST() {
    this.root = null;
}

// 插入
BST.prototype.insert = function (data) {
    var n = new Node(data);

    if (this.root == null) {
        this.root = n;

        return;
    } 
    var current = this.root,
        parent;

    while (true) {
        parent = current;

        if (data < current.data) {
            current = current.left;

            if (current == null) {
                parent.left = n;

                break;
            }
        } else {
            current = current.right;

            if (current == null) {
                parent.right = n;

                break;
            }
        }
    }
};

// 查找给定值的节点
BST.prototype.find = function (data) {
    var current = this.root;

    while (current) {
        if (current.data === data) {
            return current;
        }

        if (current.data > data) {
            current = current.left;
        } else {
            current = current.right;
        }
    }

    return null;
};

// 删除节点
BST.prototype.removeNode = function (node, data) {
    if (node == null) {
        return null;
    }

    if (node.data === data) {
        // node 是叶子节点
        if (node.left == null && node.right == null) {
            return null;
        }

        // 有右节点
        if (node.left == null) {
            return node.right;
        }

        // 有左节点
        if (node.right == null) {
            return node.left;
        }

        // 两个节点都存在
        var tempNode = this.min(node.right);

        node.data = tempNode.data;
        node.right = this.removeNode(node.right, tempNode.data);

        tempNode = tempNode.left = tempNode.right = null;

        return node;
    }

    if (node.data > data) {
        node.left = this.removeNode(node.left, data);
    } else {
        node.right = this.removeNode(node.right, data);
    }

    return node;
};

// 删除节点
BST.prototype.remove = function (data) {
    this.removeNode(this.root, data);
};

// 先序遍历
// 根节点 -> 左节点 -> 右节点
BST.prototype.preOrder = function (node) {
    if (node != null) {
        console.log(node.data);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
};

// 中序遍历
// 左节点 -> 根节点 -> 右节点
BST.prototype.inOrder = function (node) {
    if (node != null) {
        this.inOrder(node.left);
        console.log(node.data);
        this.inOrder(node.right);
    }
};

// 后序遍历
// 左节点 -> 右节点 -> 根节点
BST.prototype.postOrder = function (node) {
    if (node != null) {
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.data);
    }
};


// 最小值
// 就是左节点的值
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

// 最大值
// 就是右节点的值
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


export default {Node, BST};
