## 数据结构与算法JavaScript描述 -> 第 2 章 数组

数组是计算机编程世界里最常见的数据结构。任何一种编程语言都包含数组,只是形式上略有不同罢了。数组是编程语言中的内建类型,通常效率很高,可以满足不同需求的数据 存储。


## 练习：
* **1、创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩的方法。**

```js
function StudentScore() {
    this.scores = [];
}
// 添加成绩
StudentScore.prototype.add = function (score) {
    this.scores.push(score);
};
// 平均成绩
StudentScore.prototype.average = function () {
    const size = this.scores.length;

    if (!size) {
        throw new Error('该学生没有成绩，请添加！');
    }
    let total = this.scores.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    }, 0);

    return total / size;
};
```


* **2、将一组单词存储在一个数组中，并按正序和倒序分别显示这些单词。**

正序：join

倒序： reverse 反转数组

```js
const words = ['hello', 'world'];

// 正序
words.join(' ');

// 倒序
var res = '';

for (let i = words.length; i--;) {
    res += words[i].split('').reverse().join('') + ' ';
}
res.slice(0, -1);
```


* **3、修改本章前面出现过的 weekTemps 对象，使它可以使用一个二维数组来存储每月的有用数据。增加一些方法用以显示月平均数、具体某一周平均数和所有周的平均数。**

这里不考虑周跨月问题，即：星期一在二月，星期天在三月

原 weekTemps 对象为：
```js

function weekTemps() {
    this.dataStore = [];
    this.add = add;
    this.average = average;
}

function add(temp) {
    this.dataStore.push(temp);
}

function average() {
    var total = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
        total += this.dataStore[i];
    }
    return total / this.dataStore.length;
}

var thisWeek = new weekTemps();

thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
print(thisWeek.average()); // 显示 54.875
```


* **4、创建这样一个对象，它将字母存储在一个数组中，并且用一个方法可以将字母连在一起，显示成一个单词。**

join 即可