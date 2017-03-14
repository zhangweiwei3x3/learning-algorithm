## 数据结构与算法JavaScript描述 -> 第 5 章 队列

队列是一种列表，不同的是队列只能在队尾插入元素，在队首删除元素。队列用于存储按顺序排列的数据，先进先出，这点和栈不一样，在栈中，最后入栈的元素反而被优先处理。可以将队列想象成在银行前排队的人群，排在最前面的人第一个办理业务，新来的人只能在后面排队，直到轮到他们为止。

队列是一种先进先出（FIFO：First-In-First-Out）的数据结构


## 练习：
* **1、修改 Queue 类，形成一个 Deque 类。这是一个和队列类似的数据结构，允许从队列两端添加和删除元素，因此也叫双向队列。写一段测试程序测试该类。**


* **2、利使用前面完成的 Deque 类来判断一个给定单词是否为回文。**


* **3、修改例 5-5 中的优先队列，使得优先级高的元素优先码也大。写一段程序测试你的改动。**

就是修改一个比较符号，< 改成 > 即可
优先队列：

```js
function PriorityQueue() {
    this.dataStore = [];
}

extend(PriorityQueue, Queue);

// code 越小，优先级越高
PriorityQueue.prototype.dequeue = function () {
    var priority = this.dataStore[0].code,
        index = 0;

    for (var i = 1; i < this.dataStore.length; i++) {
        if (this.dataStore[i].code < priority) {
            index = i;
            priority = this.dataStore[i].code;
        }
    }
    
    return this.dataStore.splice(index, 1);
};
```