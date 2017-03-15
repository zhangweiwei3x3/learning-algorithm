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
 * 1、修改 Queue 类，形成一个 Deque 类。
 *     这是一个和队列类似的数据结构，允许从队列两端添加和删除元素，因此也叫双向队列。
 *     写一段测试程序测试该类。
 */

/**
 * 双向队列
 */
function Deque() {
    this.dataStore = [];
}

// 队尾入队
Deque.prototype.enqueue = function (elem) {
    this.dataStore.push(elem);
};

// 队头入队
Deque.prototype.enqueueFront = function (elem) {
    this.dataStore.unshift(elem);
};

// 队头出队
Deque.prototype.dequeue = function () {
    return this.dataStore.shift();
};

// 队尾出队
Deque.prototype.dequeueBack = function () {
    return this.dataStore.pop();
};

// 读取队首的元素
Deque.prototype.front = function () {
    return this.dataStore[0];
};

// 读取队尾的元素
Deque.prototype.back = function () {
    return this.dataStore[this.dataStore.length - 1];
};

// 判断队列是否为空
Deque.prototype.isEmpty = function () {
    return this.dataStore.length === 0;
};

// 显示队列中的所有元素
Deque.prototype.toString = function () {
    let resStr = '';

    for (let i = 0; i < this.dataStore.length; i++) {
        resStr += this.dataStore[i] + '\r\n';
    }

    return resStr;
};

// 测试代码
var q = new Deque();

q.enqueue('Meredith');
q.enqueue('Cynthia');
q.enqueue('Jennifer');
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log('Front of queue: ' + q.front());
console.log('Back of queue: ' + q.back());
q.enqueueFront('11111');
q.enqueueFront('222222');
q.dequeueBack();
console.log(q.toString());
console.log('Front of queue: ' + q.front());
console.log('Back of queue: ' + q.back());


/**
 * 2、利使用前面完成的 Deque 类来判断一个给定单词是否为回文
 */
function check(str) {
    var d = new Deque();

    for (let i = 0; i < str.length; i++) {
        d.enqueue(str[i]);
    }
    var res = '';

    while (!d.isEmpty()) {
        res += d.dequeueBack();
    }

    return str === res;
}

// 测试
check('abcba'); // true
check('abcba1'); // false


/**
 * 3、修改例 5-5 中的优先队列，使得优先级高的元素优先码也大。写一段程序测试你的改动。
 */
 
 /**
  * 优先队列
  */
function PriorityQueue() {
    this.dataStore = [];
}

extend(PriorityQueue, Queue);

// code 越大，优先级越高
PriorityQueue.prototype.dequeue = function () {
    var priority = this.dataStore[0].code,
        index = 0;

    for (let i = 1; i < this.dataStore.length; i++) {
        if (this.dataStore[i].code > priority) {
            index = i;
            priority = this.dataStore[i].code;
        }
    }
    
    return this.dataStore.splice(index, 1);
};

function Patient(name, code) {
    this.name = name;
    this.code = code;
}

var p = new Patient('Smith', 5);
var ed = new PriorityQueue();

ed.enqueue(p);
p = new Patient('Jones', 4);
ed.enqueue(p);
p = new Patient('Fehrenbach', 1);
ed.enqueue(p);
p = new Patient('Brown', 7);
ed.enqueue(p);
p = new Patient('Ingram', 7);
ed.enqueue(p);
console.log(ed.toString());
var seen = ed.dequeue();

console.log('Patient being treated: ' + seen[0].name);
console.log('Patients waiting to be seen: ');
console.log(ed.toString());

// 下一轮
seen = ed.dequeue();

console.log('Patient being treated: ' + seen[0].name);
console.log('Patients waiting to be seen: ');
console.log(ed.toString());

// 下一轮
seen = ed.dequeue();

console.log('Patient being treated: ' + seen[0].name);
console.log('Patients waiting to be seen: ');
console.log(ed.toString());
