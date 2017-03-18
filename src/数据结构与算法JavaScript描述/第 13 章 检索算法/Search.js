/**
 * 检索算法
 */

// 顺序搜索
// 自组织数据 80 - 20 原则
export function seqSeach(arr, data) {
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        if (arr[i] === data) {
            if (i > len * 0.2) {
                // i向前移动 1 位
                [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];

                return i - 1;
            }

            return i;
        }
    }

    return -1;
}

// 二分查找
// 针对有序数组
export function binSearch(arr, data) {
    let upper = arr.length - 1,
        lower = 0;

    while (lower < upper) {
        let mid = Math.floor((upper + lower) / 2);

        if (arr[mid] == data) {
            return mid;
        }

        if (arr[mid] < data) {
            lower = mid + 1;
        } else {
            upper = mid - 1;
        }
    }

    return -1;
}