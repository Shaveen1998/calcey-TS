function binarySearch(arr: number[], val: number): number {
    let first: number = 0;
    let last: number = arr.length - 1;
    let mid: number = Math.floor((first + last) / 2);

    while (arr[mid] !== val && first <= last) {
        if (arr[mid] < val) {
            first = mid + 1;
        } else {
            last = mid - 1;
        }
        mid = Math.floor((first + last) / 2);
    }

    if (arr[mid] === val) {
        return mid;
    } else {
        return -1;
    }
}

console.log(binarySearch([1, 2, 3, 4, 5], 65));
