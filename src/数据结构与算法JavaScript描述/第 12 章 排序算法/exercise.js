import CreateArray from './CreateArray';
import {bubbleSort, selectSort, insertSort, shellSort, mergeSort, quickSort} from './Sort';

/**
 * 1、使用本章讨论的所有算法对字符串数据而非数字数据进行排序，并比较不同算法的执行时间。
 *     这两者的结果是否一致呢？
 */
CreateArray.prototype.setStr = function (n) {
    for (let i = 0; i < n; i++) {
        this.dataStore[i] = Math.random().toString(36).slice(2);
    }
};
var arr1 = new CreateArray(),
    n1 = 10000;

// 冒泡排序
var bubbleSortTime1;

arr1.setStr(n1);
bubbleSortTime1 = new Date();
bubbleSort(arr1.get());
console.log('冒泡排序：' + (new Date() - bubbleSortTime1));


// 选择排序
var selectSortTime1;

arr1.setStr(n1);
selectSortTime1 = new Date();
selectSort(arr1.get());
console.log('选择排序：' + (new Date() - selectSortTime1));


// 插入排序
var insertSortTime1;

arr1.setStr(n1);
insertSortTime1 = new Date();
insertSort(arr1.get());
console.log('插入排序：' + (new Date() - insertSortTime1));


// 希尔排序
var shellSortTime1;

arr1.setStr(n1);
shellSortTime1 = new Date();
shellSort(arr1.get());
console.log('希尔排序：' + (new Date() - shellSortTime1));


// 归并排序
var mergeSortTime1;

arr1.setStr(n1);
mergeSortTime1 = new Date();
mergeSort(arr1.get());
console.log('归并排序：' + (new Date() - mergeSortTime1));


// 快速排序
var quickSortTime1;

arr1.setStr(n1);
quickSortTime1 = new Date();
quickSort(arr1.get());
console.log('快速排序：' + (new Date() - quickSortTime1));

// 测试结果：
// n === 10000 时：
// 选择排序：1394
// 插入排序：1693
// 希尔排序：3023
// 归并排序：21
// 快速排序：16

// n === 1000 时：
// 选择排序：13
// 插入排序：13
// 希尔排序：28
// 归并排序：1
// 快速排序：2


/**
 * 2、创建一个包含 1000 个整数的有序数组。
 *     编写一个程序，用本章讨论的所有算法对这个数组排序，分别记下它们的执行时间，并进行比较。
 *     如果对一个无序的数组进行排序结果又会怎样？
 */
var arr2 = new CreateArray(),
    n2 = 1000;

// 冒泡排序
var bubbleSortTime2;

// arr2.set(n2);
arr2.set(n2, true);
bubbleSortTime2 = new Date();
bubbleSort(arr2.get());
console.log('冒泡排序：' + (new Date() - bubbleSortTime2));


// 选择排序
var selectSortTime2;

// arr2.set(n2);
arr2.set(n2, true);
selectSortTime2 = new Date();
selectSort(arr2.get());
console.log('选择排序：' + (new Date() - selectSortTime2));


// 插入排序
var insertSortTime2;

// arr2.set(n2);
arr2.set(n2, true);
insertSortTime2 = new Date();
insertSort(arr2.get());
console.log('插入排序：' + (new Date() - insertSortTime2));


// 希尔排序
var shellSortTime2;

// arr2.set(n2);
arr2.set(n2, true);
shellSortTime2 = new Date();
shellSort(arr2.get());
console.log('希尔排序：' + (new Date() - shellSortTime2));


// 归并排序
var mergeSortTime2;

// arr2.set(n2);
arr2.set(n2, true);
mergeSortTime2 = new Date();
mergeSort(arr2.get());
console.log('归并排序：' + (new Date() - mergeSortTime2));


// 快速排序
var quickSortTime2;

// arr2.set(n2);
arr2.set(n2, true);
quickSortTime2 = new Date();
quickSort(arr2.get());
console.log('快速排序：' + (new Date() - quickSortTime2));

// 测试结果：
// 有序数组：
// 冒泡排序：4
// 选择排序：4
// 插入排序：6
// 希尔排序：5
// 归并排序：3
// 快速排序：3
// 
// 无序数组：
// 冒泡排序：20
// 选择排序：4
// 插入排序：11
// 希尔排序：6
// 归并排序：2
// 快速排序：1


/**
 * 3、创建一个包含 1000 个整数的倒序数组。
 *     编写一个程序，用本章讨论的所有算法对这个数组排序，分别记下它们的执行时间，并进行比较。
 */
var arr3 = new CreateArray(),
    n3 = 1000;

// 冒泡排序
var bubbleSortTime3;

arr3.set(n3);
arr3.reverse();
bubbleSortTime3 = new Date();
bubbleSort(arr3.get());
console.log('冒泡排序：' + (new Date() - bubbleSortTime3));


// 选择排序
var selectSortTime3;

arr3.set(n3);
arr3.reverse();
selectSortTime3 = new Date();
selectSort(arr3.get());
console.log('选择排序：' + (new Date() - selectSortTime3));


// 插入排序
var insertSortTime3;

arr3.set(n3);
arr3.reverse();
insertSortTime3 = new Date();
insertSort(arr3.get());
console.log('插入排序：' + (new Date() - insertSortTime3));


// 希尔排序
var shellSortTime3;

arr3.set(n3);
arr3.reverse();
shellSortTime3 = new Date();
shellSort(arr3.get());
console.log('希尔排序：' + (new Date() - shellSortTime3));


// 归并排序
var mergeSortTime3;

arr3.set(n3);
arr3.reverse();
mergeSortTime3 = new Date();
mergeSort(arr3.get());
console.log('归并排序：' + (new Date() - mergeSortTime3));


// 快速排序
var quickSortTime3;

arr3.set(n3);
arr3.reverse();
quickSortTime3 = new Date();
quickSort(arr3.get());
console.log('快速排序：' + (new Date() - quickSortTime3));

// 测试结果：
// 冒泡排序：31
// 选择排序：4
// 插入排序：14
// 希尔排序：6
// 归并排序：2
// 快速排序：1


/**
 * 4、创建一个包含10000个随机整数的数组，
 *     使用快速排序和JavaScript内置的排序函数分别对它进行排序，记录下它们的执行时间。
 *     这两种方法在执行时间上是否有区别？
 */
var arr4 = new CreateArray(),
    n4 = 10000;

var quickSortTime4;

arr4.set(n4, true);
quickSortTime4 = new Date();
quickSort(arr4.get());
console.log('快速排序：' + (new Date() - quickSortTime4));

var innerTime4;

arr4.set(n4, true);
innerTime4 = new Date();
arr4.get().sort((a, b) => {
    return a - b;
});
console.log('JavaScript内置的排序函数排序：' + (new Date() - innerTime4));

// 测试结果：
// 快速排序：14
// JavaScript内置的排序函数排序：2