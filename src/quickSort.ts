function swap(arr: number[], i: number, j: number): void {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

function helper(arr: number[], start: number = 0, end: number = arr.length - 1): number {
    let pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            swapIndex++;
            // Swap
            swap(arr, i, swapIndex);
        }
    }

    swap(arr, start, swapIndex);
    return swapIndex;
}

function quickSort(arr: number[], left: number = 0, right: number = arr.length - 1): number[] {
    if (left < right) {
        let pivotIndex = helper(arr, left, right);

        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

// Example usage:
const arr: number[] = [5, 3, 7, 2, 9, 1, 6];
console.log("Original array:", arr);
const sortedArr: number[] = quickSort(arr);
console.log("Sorted array:", sortedArr);


