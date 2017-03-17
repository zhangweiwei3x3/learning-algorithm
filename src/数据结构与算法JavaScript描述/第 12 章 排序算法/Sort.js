/**
 * 冒泡排序
 *     1、比较相邻的元素。如果第一个比第二个大，就交换他们两个。
 *     2、对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。
 *     3、针对所有的元素重复以上的步骤，除了最后一个。
 *     4、持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较
 *
 *     备注：
 *         这个算法会改变原数组
 */
export function bubbleSort(arr) {
    var i = arr.length;

    while (i > 0) {
        for (let j = 0; j < i - 1; j++) {
            // 比较相邻的元素。如果第一个比第二个大，就交换他们两个
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        i--;
    }

    return arr;
}


/**
 * 选择排序
 *     选择排序从数组的开头开始，将第一个元素和其他元素进行比较。
 *     检查完所有元素后，把最小的元素会放到数组的第一个位置，然后算法会从第二个位置继续。
 *     这个过程一直进行，当进行到数组的倒数第二个位置时，所有的数据便完成了排序
 *     
 *     备注：
 *         这个算法会改变原数组
 */
export function selectSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i],
            pos = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (min > arr[j]) {
                min = arr[j];
                pos = j;
            }
        }

        if (pos > i) {
            [arr[i], arr[pos]] = [arr[pos], arr[i]];
        }
    }

    return arr;
}


/**
 * 插入排序
 *     把选中元素，插入到已排序好的数组中
 *     1、从第 2 个元素开始循环数组，将第 2 个元素和第 1 个元素比较
 *     2、把第 2 个元素 插入到合适的位置
 *     3、循环该过程
 *     
 *     备注：
 *         这个算法会改变原数组
 */
export function insertSort(arr) {
    // 从第二个元素开始循环比较
    // 默认第一个元素已经排序好了
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];

        for (let j = i; j--;) {
            if (arr[j] > temp) {
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}


/**
 * 希尔排序
 *     希尔排序(Shell Sort)是插入排序的一种。也称缩小增量排序，是直接插入排序算法的一种更高效的改进版本。
 */
export function shellSort(arr) {
    let len = arr.length,
        d = 1; // 增量

    // 获取 增量的最大值
    while (d < len / 3) {
        d = 3 * d + 1;
    }

    // 增量
    while (d >= 1) {
        // 从增量开始，循环数组
        for (let i = d; i < len; i++) {
            // 与当前元素的前面间隔为 d 的元素比较
            for (let j = i - d; j >= 0; j -= d) {
                if (arr[j] > arr[j + d]) {
                    [arr[j], arr[j + d]] = [arr[j + d], arr[j]];
                }
            }
        }

        // 增量递减
        d = (d - 1) / 3;
    }

    return arr;
}


/**
 * 归并排序
 *     自底向上的归并排序算法
 *     该算法，不是递归实现，占用内存空间比较小
 */

// 归并有序数组
function merge(arr, startLeft, stopLeft, startRight, stopRight) {
    var left = [],
        right = [];

    // 左数组
    for (let i = 0; i < stopLeft - startLeft; i++) {
        left[i] = arr[startLeft + i];
    }

    // 右数组
    for (let i = 0; i < stopRight - startRight; i++) {
        right[i] = arr[startRight + i];
    }

    for (let i = startLeft; i < stopRight; i++) {
        if (left[0] != null && right[0] != null) {
            if (left[0] > right[0]) {
                arr[i] = right.shift();
            } else {
                arr[i] = left.shift();
            }
        } else if (left[0] != null) {
            arr[i] = left.shift();
        } else if (right[0] != null) {
            arr[i] = right.shift();
        }
    }
}

// 归并排序
export function mergeSort(arr) {
    let len = arr.length,
        step = 1,
        left, right;

    while (step < len) {
        left = 0;
        right = step;

        while (right + step <= len) {
            merge(arr, left, left + step, right, right + step);
            left = right + step;
            right = left + step;
        }

        // 归并剩余元素
        if (right < len) {
            merge(arr, left, left + step, right, len);
        }

        step *= 2;
    }

    return arr;
}


/**
 * 快速排序
 *     随机快速排序，即随机获取主元
 */
export function quickSort(arr) {
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