/**
 * 字典
 *     字典是一种以键 - 值对形式存储数据的数据结构
 */
function Dictionary() {
    this.dataStore = {};
}

// 新增
Dictionary.prototype.add = function (key, value) {
    this.dataStore[key] = value;
};

// 查找
Dictionary.prototype.find = function (key) {
    return this.dataStore[key];
};

// 删除
Dictionary.prototype.remove = function (key) {
    return delete this.dataStore[key];
};

// 字典的大小
Dictionary.prototype.size = function () {
    return Object.keys(this.dataStore).length;
};

// 清空
Dictionary.prototype.clear = function () {
    // for (let key in this.dataStore) {
    //     if (this.dataStore.hasOwnProperty(key)) {
    //         delete this.dataStore[key];
    //     }
    // }
    
    Object.keys(this.dataStore).forEach((key) => {
        delete this.dataStore[key];
    });
};

// 显示字典
Dictionary.prototype.display = function () {
    Object.keys(this.dataStore).sort().forEach((key) => {
        console.log(key + ' -> ' + this.dataStore[key]);
    });
};

/**
 * 1、写一个程序，该程序从一个文本文件中读入名字和电话号码，然后将其存入一个字典。
 *     该程序需包含如下功能：
 *         显示单个电话号码、
 *         显示所有电话号码、
 *         增加新电话号码、
 *         删除电话号码、
 *         清空所有电话号码。
 */
var contactsObj = {
    zhang: 13404354439,
    li: 1111111111,
    wang: 2222222222
};

var contacts = new Dictionary();

// 读入名字和电话号码
Object.keys(contactsObj).forEach((key) => {
    contacts.add(key, contactsObj[key]);
});

// 显示单个电话号码
console.log('zhang 的电话号码是：' + contacts.find('zhang'));

// 显示所有电话号码
console.log('所有电话号码是：');
contacts.display();

// 增加新电话号码
contacts.add('zhao', 33333333333);
console.log('新增 zhao 后的电话号码是：');
contacts.display();

// 删除电话号码
contacts.remove('zhang');
console.log('删除 zhang 后的电话号码是：');
contacts.display();

// 清空所有电话号码
contacts.clear();
console.log('清空所有电话号码：');
contacts.display();


/**
 * 使用 Dictionary 类写一个程序，该程序用来存储一段文本中各个单词出现的次数。
 * 该程序显示每个单词出现的次数，但每个单词只显示一次。
 * 比如下面一段话“the brown fox jumped over the blue fox”，程序的输出应为:
 *     the: 2
 *     brown: 1
 *     fox: 2
 *     jumped: 1
 *     over: 1
 *     blue: 1
 */
Dictionary.prototype.display = function () {
    Object.keys(this.dataStore).forEach((key) => {
        console.log(key + '：' + this.dataStore[key]);
    });
};

var str = 'the brown fox jumped over the blue fox';
var strDictionary = new Dictionary();

str.split(' ').forEach((key) => {
    let n = strDictionary.find(key);

    if (n == null) {
        strDictionary.add(key, 1);
    } else {
        strDictionary.add(key, n + 1);
    }
});

strDictionary.display();


/**
 * 3、修改练习 2，使单词按字母顺序显示
 */
Dictionary.prototype.display = function () {
    Object.keys(this.dataStore).sort().forEach((key) => {
        console.log(key + '：' + this.dataStore[key]);
    });
};

strDictionary.display();
