/**
 * 排序算法
 */
var arr = [101, 0, 101, 1, 2, 9, 10, 12, 4, 6, 7, 8, 100, 8];

/**
 * 1、插入排序
 *     算法复杂度 ：n^2
 * 具体算法描述如下：
 *     1、从第一个元素开始，该元素可以认为已经被排序
 *     2、取出下一个元素，在已经排序的元素序列中从后向前扫描
 *     3、如果该元素（已排序）大于新元素，将该元素移到下一位置
 *     4、重复步骤3，直到找到已排序的元素小于或者等于新元素的位置
 *     5、将新元素插入到下一位置中
 *     6、重复步骤2~5
 */
function insertSort(arr) {
    var res = [arr[0]];

    // 循环数组
    for (let i = 1, len = arr.length; i < len; i++) {
        let temp = arr[i];

        // 把 temp 插入到已经排序好的数组中
        for (let j = i - 1; j >= 0; j--) {
            // temp 比 已排序好的数组的某个值res[j]小时
            // res[j] 向后移动一位
            // res[j] = temp
            // 继续循环数组
            if (res[j] > temp) {
                res[j + 1] = res[j];
                res[j] = temp;

            // temp 比 已排序好的数组的某个值res[j]大时
            // 直接插入
            } else {
                res[j + 1] = temp;
                break;
            }
        }
    }

    return res;
}

insertSort(arr);



/**
 * 2、归并排序
 *     算法复杂度: n * lgn
 *     递归实现
 *     输入源在30左右时 归并排序就比 插入排序算法要好，但是归并排序使用的递归，比较占用内存
 */

// 归并两个有序数组
function merge(left, right) {
    var res = [];

    while (left.length && right.length) {
        if (left[0] > right[0]) {
            res.push(right.shift());
        } else {
            res.push(left.shift());
        }
    }

    return res.concat(left, right);
} 

// 归并排序
function mergeSort(arr) {
    // arr 没有元素或者只有一个元素时（可看成排序好了的）
    // 直接返回
    if (arr.length < 2) {
        return arr;
    }
    var middle = Math.floor(arr.length / 2);

    // 递归merge 划分数组
    return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)));
}
 
mergeSort(arr);



/**
 * 3、随机快速排序
 *     法复杂度: n * lgn
 *     递归实现
 */
function quickSort(arr) {
    var len = arr.length;

    // arr 没有元素或者只有一个元素时（可看成排序好了的）
    // 直接返回
    if (len < 2) {
        return arr;
    }

    var pivotIndex = Math.floor(Math.random() * len), // 随机选取主元下标
        pivot = arr.splice(pivotIndex, 1)[0], // 随机选取的主元
        leftArr = [],
        rightArr = [];

    // 划分数组
    for (let i = arr.length; i--;) {
        let temp = arr[i];

        if (temp < pivot) {
            leftArr.push(temp);
        } else {
            rightArr.push(temp);
        }
    }

    // 递归排序
    return quickSort(leftArr).concat(pivot, quickSort(rightArr));
}

quickSort(arr);