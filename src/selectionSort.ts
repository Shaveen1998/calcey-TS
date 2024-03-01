function selectionSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length - 1; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        // Swap
        if (i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([44, 5, 12, 47, 88, 56]));
