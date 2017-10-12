import CreateArray from '../../libs/CreateArray';
import {insertSort} from '../第 12 章 排序算法/Sort';
import {seqSeach, binSearch} from './Search';

/**
 * 1、顺序查找算法总是查找数据集中匹配到的第一个元素。
 *      请重写该算法使之返回匹配到的最后一个元素。
 */
// 倒序搜索
function seqSeachLast(arr, data) {
    for (let i = arr.length; i--;) {
        if (arr[i] === data) {
            return i;
        }
    }

    return -1;
}

var arr1 = [1, 2, 3, 2, 1];

seqSeachLast(arr1, 1);


/**
 * 2、对同一个数据集进行测试，
 *      比较顺序查找算法执行所花费的时间与同时使用插入排序算法和二分查找算法花费的总时间。
 *      你得到的结果是什么？
 */
var arr2 = new CreateArray();
var n2 = 10000;

arr2.set(n2, true);
var arr21 = arr2.get();
var arr22 = arr21.slice(0);
var data2 = arr2[Math.floor(Math.random() * 1000)];

// 顺序查找
var seqTiem = new Date();

seqSeach(arr2, data2);
console.log('顺序查找：' + (new Date() - seqTiem));


// 插入排序算法和二分查找
var binTiem = new Date();

insertSort(arr22);
binSearch(arr22, data2);
console.log('插入排序算法和二分查找：' + (new Date() - binTiem));

// 测试结果
// 顺序查找：0
// 插入排序算法和二分查找：454


/**
 * 3、创建一个函数用来查找数据集中的次小元素。
 *      你能否归纳一下，如何实现查找第三小、第四小，等等的搜索函数？
 *      在至少有1000个元素的数据集上测试你的函数。请同时在数字和文本数据集上进行测试。
 */
// 把 data 插入到数组 arr 中
// 并且使，arr 的排序不变
// 并且 arr 数组的最大长度为 maxLength
function insert(arr, data, maxLength) {
    let flag = true;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > data) {
            arr.splice(i, 0, data);

            flag = false;
            break;
        }
    }

    flag && arr.push(data);

    if (arr.length > maxLength) {
        arr.length = maxLength;
    }
}

// 查找第 n 小的元素
function findMin(arr, n) {
    var res = [];

    for (let i = 0; i < arr.length; i++) {
        insert(res, arr[i], n);
    }

    return res[n - 1];
}

// 测试
var arr3 = new CreateArray();
var n3 = 3;

arr3.set(100);
console.log(arr3.get());
console.log(`第${n3}小的元素是：` + findMin(arr3.get(), n3));