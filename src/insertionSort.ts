function insertionSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
        let currentVal: number = arr[i];
        let j: number;
        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
