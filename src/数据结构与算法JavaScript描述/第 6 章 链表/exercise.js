import {SLList, DLList, SCLList} from './LinkedList';

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