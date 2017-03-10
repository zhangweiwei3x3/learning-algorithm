/**
 * 1、创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩的方法。
 */
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

// 测试
var s = new StudentScore();

// 添加成绩
s.add(1);
s.add(2);
s.add(3);
s.add(4);
s.add(5);

// 平均值
s.average();


/**
 * 2、将一组单词存储在一个数组中，并按正序和倒序分别显示这些单词。
 */
const words = ['hello', 'world'];

// 正序
words.join(' ');

// 倒序
var res = '';

for (let i = words.length; i--;) {
    res += words[i].split('').reverse().join('') + ' ';
}
res.slice(0, -1);


/**
 * 3、修改本章前面出现过的 weekTemps 对象，
 *     使它可以使用一个二维数组来存储每月的有用数据。
 *     增加一些方法用以显示月平均数、具体某一周平均数和所有周的平均数。
 */
function WeekTemps() {
    this.dataStore = [];
}

// 给 week 周新增 数据
WeekTemps.prototype.add = function (week, temp) {
    // 初始化，防止没定义这周
    this.dataStore[week] = this.dataStore[week] || [];
    this.dataStore[week].push(temp);
};

// 求平均值
// week 有值就是 求 当前week周的平均值
// week不存在就是获取所有周的平均值
WeekTemps.prototype.average = function (week) {
    // 获取所有周的平均值
    if (week == null) {
        let total = 0,
            size = 0;

        this.dataStore.forEach((week) => {
            total += week.reduce((previousValue, currentValue) => {
                return previousValue + currentValue;
            }, 0);
            size += week.length;
        });

        return total / size;
    }

    // 当前week周的平均值
    if (!this.dataStore[week] || this.dataStore[week].length === 0) {
        throw new Error(`当前 ${week} 周没有数据`);
    }
    let total = this.dataStore[week].reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    }, 0);

    return total / this.dataStore[week].length;
};


// 测试
var thisWeek = new WeekTemps();

thisWeek.add(0, 52);
thisWeek.add(0, 55);
thisWeek.add(0, 61);
thisWeek.add(0, 65);
thisWeek.add(0, 55);
thisWeek.add(0, 50);
thisWeek.add(0, 52);
thisWeek.add(0, 49);


thisWeek.add(1, 52);
thisWeek.add(1, 52);
thisWeek.add(1, 52);
thisWeek.add(1, 49);
thisWeek.add(1, 49);
thisWeek.add(1, 49);


console.log(thisWeek.average()); // 53
console.log(thisWeek.average(0)); // 54.875
console.log(thisWeek.average(1)); // 50.5


/**
 * 4、创建这样一个对象，它将字母存储在一个数组中，并且用一个方法可以将字母连在一起，显示成一个单词。
 */
function Word() {
    this.letters = [];
}
Word.prototype.add = function (letter) {
    this.letters.push(letter);
};
Word.prototype.print = function () {
    return this.letters.join('');
};

// 测试
var w = new Word();

w.add('h');
w.add('e');
w.add('l');
w.add('l');
w.add('o');

w.print();