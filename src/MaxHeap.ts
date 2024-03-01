class MaxHeap {
    private heapArray: number[];

    constructor() {
        this.heapArray = [];
    }

    private getParentIndex(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    private getLeftChildIndex(index: number): number {
        return 2 * index + 1;
    }

    private getRightChildIndex(index: number): number {
        return 2 * index + 2;
    }

    private swap(index1: number, index2: number): void {
        [this.heapArray[index1], this.heapArray[index2]] = [this.heapArray[index2], this.heapArray[index1]];
    }

    private bubbleUp(index: number): void {
        let parentIndex = this.getParentIndex(index);
        while (index > 0 && this.heapArray[parentIndex] < this.heapArray[index]) {
            this.swap(parentIndex, index);
            index = parentIndex;
            parentIndex = this.getParentIndex(index);
        }
    }

    private bubbleDown(index: number): void {
        let maxIndex = index;
        const leftChildIndex = this.getLeftChildIndex(index);
        if (leftChildIndex < this.heapArray.length && this.heapArray[leftChildIndex] > this.heapArray[maxIndex]) {
            maxIndex = leftChildIndex;
        }
        const rightChildIndex = this.getRightChildIndex(index);
        if (rightChildIndex < this.heapArray.length && this.heapArray[rightChildIndex] > this.heapArray[maxIndex]) {
            maxIndex = rightChildIndex;
        }
        if (index !== maxIndex) {
            this.swap(index, maxIndex);
            this.bubbleDown(maxIndex);
        }
    }

    insert(value: number): void {
        this.heapArray.push(value);
        this.bubbleUp(this.heapArray.length - 1);
    }

    extractMax(): number | undefined {
        if (this.heapArray.length === 0) return undefined;
        if (this.heapArray.length === 1) return this.heapArray.pop();
        const max = this.heapArray[0];
        this.heapArray[0] = this.heapArray.pop()!;
        this.bubbleDown(0);
        return max;
    }

    peek(): number | undefined {
        return this.heapArray[0];
    }

    size(): number {
        return this.heapArray.length;
    }

    isEmpty(): boolean {
        return this.heapArray.length === 0;
    }
}

// Example usage:
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(17);
maxHeap.insert(23);
maxHeap.insert(3);

console.log("Max heap after insertion:", maxHeap);
console.log("Extracted max:", maxHeap.extractMax());
console.log("Max heap after extraction:", maxHeap);
console.log("Peek:", maxHeap.peek());
