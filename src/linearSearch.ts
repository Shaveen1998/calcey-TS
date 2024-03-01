function linearSearch(arr: number[], val: number): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }

    return -1;
}

console.log(linearSearch([10, 15, 15, 25, 30], 15));
