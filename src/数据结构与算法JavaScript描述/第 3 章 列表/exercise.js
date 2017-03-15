import List from './List';

/**
 * 1、增加一个向列表中插入元素的方法，该方法只在待插元素大于列表中的所有元素时才执行插入操作。
 *     这里的大于有多重含义，对于数字，它是指数值上的大小；
 *     对于字母，它是指在字母表中出现的先后顺序。
 */
List.prototype.insertLarge = function (elem, after) {
    for (this.front(); this.currPos() < this.size(); this.next()) {
        if (this.getElement() >= elem) {
            return false;
        }
    }
    let insertPos = this.find(after);

    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, elem);

        return true;
    }

    return false;
};

// 测试
var list = new List();

list.append(1);
list.append(2);
list.append(3);
list.insertLarge(4, 1);
console.log(list.toString());

list.append('b');
list.insertLarge('a', 'b');

console.log(list.toString());


/**
 * 2、增加一个向列表中插入元素的方法，该方法只在待插元素小于列表中的所有元素时才执行插入操作。
 */
List.prototype.insertSmall = function (elem, after) {
    for (this.front(); this.currPos() < this.size(); this.next()) {
        if (this.getElement() <= elem) {
            return false;
        }
    }
    let insertPos = this.find(after);

    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, elem);

        return true;
    }

    return false;
};

// 测试
var list2 = new List();

list2.append(1);
list2.append(2);
list2.append(3);
list2.insertSmall(0, 1);
console.log(list2.toString());

list2.insertSmall(4, 1);

console.log(list2.toString());


/**
 * 3、创建 Person 类，该类用于保存人的姓名和性别信息。
 *     创建一个至少包含 10 个 Person 对象的列表。
 *     写一个函数显示列表中所有拥有相同性别的人。
 */
function Person(name, sex) {
    this.name = name;
    this.sex = sex;
}
Person.prototype.getName = function () {
    return this.name;
};
Person.prototype.getSex = function () {
    return this.sex;
};

var p1 = new Person('p1', 'm');
var p2 = new Person('p2', 'm');
var p3 = new Person('p3', 'm');
var p4 = new Person('p4', 'm');
var p5 = new Person('p5', 'm');
var p6 = new Person('p6', 'f');
var p7 = new Person('p7', 'f');
var p8 = new Person('p8', 'f');
var p9 = new Person('p9', 'f');
var p10 = new Person('p10', 'f');

var listPerson = new List();

listPerson.append(p1);
listPerson.append(p2);
listPerson.append(p3);
listPerson.append(p4);
listPerson.append(p5);
listPerson.append(p6);
listPerson.append(p7);
listPerson.append(p8);
listPerson.append(p9);
listPerson.append(p10);


function getPeopleBySex(list, sex) {
    let res = [];

    for (list.front(); list.currPos() < list.size(); list.next()) {
        if (list.getElement().getSex() === sex) {
            res.push(list.getElement());
        }
    }

    return res;
}

getPeopleBySex(listPerson, 'm');


/**
 * 4、修改本章的影碟租赁程序，当一部影片检出后，将其加入一个已租影片列表。
 *     每当有客户检出一部影片，都显示该列表中的内容。
 */
// 影片列表
var movies = ['肖申克的救赎', '教父', '教父 2', '低俗小说', '黄金三镖客', '十二怒汉', '辛德勒名单', '黑暗骑士', '指环王:王者归来'];
var filmList = new List();

for (var i = 0; i < movies.length; ++i) {
    filmList.append(movies[i]);
}

// 客户列表
var customerList = new List();

// 客户对象
function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
}

// 已租影片列表
var movieListOut = new List();

// 检出
function checkOut(name, movie, filmList, customerList, movieListOut) {
    if (filmList.contains(movie)) {
        var c = new Customer(name, movie);

        customerList.append(c);
        filmList.remove(movie);
        movieListOut.append(movie);

        for (movieListOut.front(); movieListOut.currPos() < movieListOut.size(); movieListOut.next()) {
            console.log('已租赁影片：' + movieListOut.getElement().toString());
        }
    } else {
        console.log(movie + ' 不存在！');
    }
}

// 测试
checkOut('zhang', '肖申克的救赎', filmList, customerList, movieListOut);
checkOut('li', '教父', filmList, customerList, movieListOut);


/**
 * 5、为影碟租赁程序创建一个 check-in() 函数，当客户归还一部影片时，将该影片从已租列表中删除，同时添加到现有影片列表中。
 */
// 客户对象就不实时更新了，因为，当前的列表（List）不支持 复杂类型数据
function checkIn(name, movie, filmList, movieListOut) {
    filmList.append(movie);
    movieListOut.remove(movie);

    console.info('可租赁影片：');
    for (filmList.front(); filmList.currPos() < filmList.size(); filmList.next()) {
        console.info(filmList.getElement().toString());
    }
    console.warn('已租赁影片：');
    for (movieListOut.front(); movieListOut.currPos() < movieListOut.size(); movieListOut.next()) {
        console.warn(movieListOut.getElement().toString());
    }
}


// 测试
checkOut('zhang', '肖申克的救赎', filmList, customerList, movieListOut);
checkOut('li', '教父', filmList, customerList, movieListOut);
checkIn('zhang', '肖申克的救赎', filmList, movieListOut);
