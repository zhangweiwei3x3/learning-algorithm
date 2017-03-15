import {extend} from '../../libs/Utils';

/**
 * 队列
 *     队列是一种先进先出（FIFO：First-In-First-Out）的数据结构
 */
function Queue() {
    this.dataStore = [];
}

// 入队
Queue.prototype.enqueue = function (elem) {
    this.dataStore.push(elem);
};

// 出队
Queue.prototype.dequeue = function () {
    return this.dataStore.shift();
};

// 读取队首的元素
Queue.prototype.front = function () {
    return this.dataStore[0];
};

// 读取队尾的元素
Queue.prototype.back = function () {
    return this.dataStore[this.dataStore.length - 1];
};

// 判断队列是否为空
Queue.prototype.isEmpty = function () {
    return this.dataStore.length === 0;
};

// 清空队列
Queue.prototype.clear = function () {
    // 使用 this.dataStore = [] 是重新赋值，以前的引用还在例：
    // var a = [1,2]; var b = a; a = []; 
    // console.log(b) // [1,2]
    this.dataStore.length = 0;
};

// 显示队列中的所有元素
Queue.prototype.toString = function () {
    let resStr = '';

    for (let i = 0; i < this.dataStore.length; i++) {
        resStr += this.dataStore[i] + '\r\n';
    }

    return resStr;
};


/**
 * 优先队列
 */
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



export default {Queue, PriorityQueue};