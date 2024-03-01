function bubbleSort(arr: number[]): number[] { //O(n^2)
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            // Swap
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([44, 25, 56, 78, 12, 36]));


function bubbleSortOptimized(arr: number[]): number[] {  //O(n^2)
    let noSwaps: boolean;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            // Swap
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

console.log(bubbleSortOptimized([44, 25, 56, 78, 12, 36]));
