## 数据结构与算法JavaScript描述 -> 第 3 章 列表

在日常生活中，人们经常使用列表:待办事项列表、购物清单、十佳榜单、最后十名榜单等。计算机程序也在使用列表,尤其是列表中保存的元素不是太多时。当不需要在一个很长的序列中查找元素,或者对其进行排序时，列表显得尤为有用。反之，如果数据结构非 常复杂，列表的作用就没有那么大了。

在 JavaScript 中的列表就是数组模拟的


## 练习：
* **1、增加一个向列表中插入元素的方法，该方法只在待插元素大于列表中的所有元素时才执行插入操作。这里的大于有多重含义，对于数字，它是指数值上的大小；对于字母，它是指在字母表中出现的先后顺序。**

javascript 默认的比较 数字就是 比大小；字母就是比顺序。不用处理。


* **2、增加一个向列表中插入元素的方法，该方法只在待插元素小于列表中的所有元素时才执行插入操作。**


* **3、创建 Person 类，该类用于保存人的姓名和性别信息。创建一个至少包含 10 个 Person 对象的列表。写一个函数显示列表中所有拥有相同性别的人。**


* **4、修改本章的影碟租赁程序，当一部影片检出后，将其加入一个已租影片列表。每当有客户检出一部影片，都显示该列表中的内容。**

```js
/**
 * 原影碟租赁程序
 */
// 影片列表
var movies = ['肖申克的救赎', '教父', '教父 2', '低俗小说', '黄金三镖客', '十二怒汉', '辛德勒名单', '黑暗骑士', '指环王:王者归来'];
var movieList = new List();

for (var i = 0; i < movies.length; ++i) {
    movieList.append(movies[i]);
}

// 客户列表
var customers = new List();

// 客户对象
function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
}

// 检出
function checkOut(name, movie, filmList, customerList) {
    if (filmList.contains(movie)) {
        var c = new Customer(name, movie);

        customerList.append(c);
        filmList.remove(movie);
    } else {
        console.log(movie + ' 不存在！');
    }
}
```

* **5、为影碟租赁程序创建一个 check-in() 函数，当客户归还一部影片时，将该影片从已租列表中删除，同时添加到现有影片列表中。**