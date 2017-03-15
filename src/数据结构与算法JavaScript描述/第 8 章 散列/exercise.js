import HashTable from './HashTable';

/**
 * 1、使用线性探测法创建一个字典，用来保存单词的定义。该程序需要包含两个部分：
 *     第一部分从文本文件中读取一组单词和它们的定义，并将其存入散列表；
 *     第二部分让用户输入单词，程序给出该单词的定义。
 */
var d = new HashTable();

d.setLine('a', 'aaa');
d.setLine('b', 'bbb');
d.setLine('c', 'ccc');

d.showLine();

// 第二部分让用户输入单词，程序给出该单词的定义
d.getLine('a');


/**
 * 2、使用开链法重新实现练习 1。
 */
var d2 = new HashTable();

d2.set('a', 'aaa');
d2.set('b', 'bbb');
d2.set('c', 'ccc');

d2.show();

// 第二部分让用户输入单词，程序给出该单词的定义
d2.get('a');


/**
 * 3、读取一个文本文件，使用散列显示该文件中出现的单词和它们在文件中出现的次数。
 */
HashTable.prototype.showD = function () {
    for (let i = 0; i < this.table.length; i++) {
        if (this.table[i] != null) {
            console.log(this.table[i][0] + ': ' + this.table[i].length);
        }
    }
};
var str = 'the brown fox jumped over the blue fox';
var d3 = new HashTable();

str.split(' ').forEach((item) => {
    d3.set(item, item);
});

d3.showD();
