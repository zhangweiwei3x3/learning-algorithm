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
Stack.prototype.pop = function () {
    this.top--;

    return this.dataStore.pop();
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
    // 使用 this.dataStore = [] 是重新赋值，以前的引用还在例：
    // var a = [1,2]; var b = a; a = []; 
    // console.log(b) // [1,2]
    this.dataStore.length = 0;
    this.top = 0;
};

// 判断栈是否为空
Stack.prototype.isEmpty = function () {
    return this.top === 0;
};


/**
 * 1、栈可以用来判断一个算术表达式中的括号是否匹配。
 *     编写一个函数，该函数接受一个算术表达式作为参数，返回括号缺失的位置。
 *     下面是一个括号不匹配的算术表达式的例子:
 *         2.3 + 23 / 12 + (3.14159×0.24。
 */
function checkExpression(expression) {
    var stack = new Stack();

    for (let i = 0; i < expression.length; i++) {
        let str = expression[i];

        // 左括号，需入栈
        if (str === '(') {
            stack.push({name: '(', pos: i});
        }

        // 右括号，需要判断是否需要出栈
        if (str === ')') {
            // 栈顶元素是 左括号
            // 表示可以出栈
            // 否则就要入栈
            if (!stack.isEmpty() && stack.peek().name === '(') {
                stack.pop();
            } else {
                stack.push({name: ')', pos: i});
            }
        }
    }

    // 栈为空
    if (stack.isEmpty()) {
        console.info('表达式合法');

        return true;
    }

    while (!stack.isEmpty()) {
        console.log('非法括号的位置是：' + stack.pop().pos);
    }
}

// 测试
checkExpression('1)2.3 + 23 / 12 + (3.14159×0.24');
checkExpression('2.3 + 23 / 12 + (3.14159×0.24');


/**
 * 2、利用栈对表达式求值。
 *     一个算术表达式的后缀表达式形式如下:
 *         op1 op2 operator
 *         使用两个栈，一个用来存储操作数，另外一个用来存储操作符，
 *         设计并实现一个 JavaScript 函数，该函数可以将中缀表达式转换为后缀表达式，然后利用栈对该表达式求值。
 */

// 这个是一个栈操作的，主要用于把中缀转换成后缀
function change(expression) {
    var match = expression.match(/(\s*\d+\s*)|\+|-|\*|\/|\(|\)/g);
    var symbolStack = new Stack();
    var outExpre = []; // 输出的后缀表达式

    for (let i = 0; i < match.length; i++) {
        let token = match[i].trim();

        switch (token) {
            case '+':
            case '-':
                if (symbolStack.peek() === '*' || symbolStack.peek() === '/') {
                    let flag = true;

                    while (flag) {
                        let top = symbolStack.peek();

                        if (top === '(') {
                            flag = false;
                        } else {
                            top = symbolStack.pop();
                            outExpre.push(top);
                            if (symbolStack.isEmpty()) {
                                flag = false;
                            }
                        }
                    }
                }
                symbolStack.push(token);
                break;

            case '*':
            case '/':
                symbolStack.push(token);
                break;

            case '(':
                symbolStack.push(token);
                break;

            case ')': {
                let flag = true;

                while (flag) {
                    let top = symbolStack.pop();

                    if (top !== '(') {
                        outExpre.push(top);
                    } else {
                        flag = false;
                    }
                }
                break;
            }

            default:
                outExpre.push(+token);
        }
    }

    while (!symbolStack.isEmpty()) {
        outExpre.push(symbolStack.pop());
    }

    // 输出后缀表达式
    console.log(outExpre.join(','));

    // 求值
    var resStack = new Stack();

    for (let i = 0; i < outExpre.length; i++) {
        let temp = outExpre[i];

        if (typeof temp === 'number') {
            resStack.push(temp);
        } else {
            let top = resStack.pop();

            resStack.push(eval(`${resStack.pop()} ${temp} ${top}`));
        }
    }

    return resStack.pop();
}


// 测试
change('(1 + 2 * 3 - 9) * 8');

// 利用两个栈，直接求中缀表达式
function count(expression) {
    var match = expression.match(/(\s*\d+\s*)|\+|-|\*|\/|\(|\)/g);
    var symbolStack = new Stack(); // 符号栈
    var operStack = new Stack(); // 操作数栈
    var flag = false; // 下一次是否需要计算

    for (let i = 0; i < match.length; i++) {
        let token = match[i].trim();

        switch (token) {
            case '+':
            case '-':
                symbolStack.push(token);
                break;

            case '*':
            case '/':
                if (symbolStack.peek() === '-' || symbolStack.peek() === '+') {
                    flag = true;
                }
                symbolStack.push(token);
                break;

            case '(':
                symbolStack.push(token);
                break;

            case ')': {
                let tempFlag = true;

                while (tempFlag) {
                    let top = operStack.pop();

                    if (top !== '(') {
                        operStack.push(eval(`${operStack.pop()} ${symbolStack.pop()} ${top}`));
                    } else {
                        operStack.pop();
                        tempFlag = false;
                    }
                }
                break;
            }

            default:
                operStack.push(+token);
                if (flag) {
                    flag = false;
                    let top = operStack.pop();
                    let top2 = operStack.pop();
                    var t = symbolStack.pop();

                    operStack.push(eval(`${top2} ${t} ${top}`));
                }
        }
    }

    while (!symbolStack.isEmpty()) {
        let top = operStack.pop();

        operStack.push(eval(`${operStack.pop()} ${symbolStack.pop()} ${top}`));
    }

    return operStack.pop();
}
// 测试
count('(1 + 2 * 3 - 9) * 8');


/**
 * 3、现实生活中栈的一个例子是佩兹糖果盒。
 *     想象一下你有一盒佩兹糖果，里面塞满了红色、黄色和白色的糖果，但是你不喜欢黄色的糖果。
 *     使用栈(有可能用到多个栈)写一段程序，在不改变盒内其他糖果叠放顺序的基础上，将黄色糖果移出。
 */
function Sweet(id, color) {
    this.id = id;
    this.color = color;
}
Sweet.prototype.getColor = function () {
    return this.color;
};

var s1 = new Sweet(1, '红色');
var s2 = new Sweet(2, '黄色');
var s3 = new Sweet(3, '黄色');
var s4 = new Sweet(4, '白色');
var s5 = new Sweet(5, '白色');
var s6 = new Sweet(6, '黄色');
var s7 = new Sweet(7, '白色');
var s8 = new Sweet(8, '红色');
var s9 = new Sweet(9, '红色');

var sweets = new Stack();

sweets.push(s1);
sweets.push(s2);
sweets.push(s3);
sweets.push(s4);
sweets.push(s5);
sweets.push(s6);
sweets.push(s7);
sweets.push(s8);
sweets.push(s9);

var tempSweets = new Stack();

// 筛选糖果
while (!sweets.isEmpty()) {
    let s = sweets.pop();

    if (s.getColor() !== '黄色') {
        tempSweets.push(s);
    }
}

// 还原糖果顺序
while (!tempSweets.isEmpty()) {
    let s = tempSweets.pop();

    if (s.getColor() !== '黄色') {
        sweets.push(s);
    }
}

// sweets 是已过滤黄色的糖果
console.log(sweets);
