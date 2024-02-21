"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayStack {
    constructor() {
        this.itemList = [];
    }
    push(item) {
        this.itemList.push(item);
    }
    pop() {
        return this.itemList.pop();
    }
    peek() {
        return this.itemList[this.itemList.length - 1];
    }
    is_empty() {
        return this.itemList.length == 0 ? true : false;
    }
    clear() {
        this.itemList.length = 0;
    }
}
exports.default = ArrayStack;
