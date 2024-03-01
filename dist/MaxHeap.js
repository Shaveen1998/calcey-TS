"use strict";
class MaxHeap {
    constructor() {
        this.heapArray = [];
    }
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    getLeftChildIndex(index) {
        return 2 * index + 1;
    }
    getRightChildIndex(index) {
        return 2 * index + 2;
    }
    swap(index1, index2) {
        [this.heapArray[index1], this.heapArray[index2]] = [this.heapArray[index2], this.heapArray[index1]];
    }
    bubbleUp(index) {
        let parentIndex = this.getParentIndex(index);
        while (index > 0 && this.heapArray[parentIndex] < this.heapArray[index]) {
            this.swap(parentIndex, index);
            index = parentIndex;
            parentIndex = this.getParentIndex(index);
        }
    }
    bubbleDown(index) {
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
    insert(value) {
        this.heapArray.push(value);
        this.bubbleUp(this.heapArray.length - 1);
    }
    extractMax() {
        if (this.heapArray.length === 0)
            return undefined;
        if (this.heapArray.length === 1)
            return this.heapArray.pop();
        const max = this.heapArray[0];
        this.heapArray[0] = this.heapArray.pop();
        this.bubbleDown(0);
        return max;
    }
    peek() {
        return this.heapArray[0];
    }
    size() {
        return this.heapArray.length;
    }
    isEmpty() {
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
