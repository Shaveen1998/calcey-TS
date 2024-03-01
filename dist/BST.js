"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TreeNode_1 = require("./TreeNode");
class BST {
    constructor() {
        this.root = null;
    }
    //insert 
    insert(key) {
        this.root = this._insertData(this.root, key);
    }
    //recursive method
    _insertData(node, key) {
        if (!node) {
            return new TreeNode_1.default(key);
        }
        if (key < node.key) {
            node.left = this._insertData(node.left, key);
        }
        else if (key > node.key) {
            node.right = this._insertData(node.right, key);
        }
        return node;
    }
    inOrderTraversal(node) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.key);
            this.inOrderTraversal(node.right);
        }
    }
    postOrderTraversal(node) {
        if (node) {
            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);
            console.log(node.key);
        }
    }
    preOrderTraversal(node) {
        if (node) {
            console.log(node.key);
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
    }
    invertTree(node) {
        if (node === null)
            return null;
        //swap
        let temp = node.left;
        node.left = node.right;
        node.right = temp;
        this.invertTree(node.left);
        this.invertTree(node.right);
        return node;
    }
    search(key) {
        return this.searchNode(this.root, key);
    }
    searchNode(node, key) {
        if (!node)
            return false;
        if (key < node.key) {
            return this.searchNode(node.left, key);
        }
        else if (key > node.key) {
            return this.searchNode(node.right, key);
        }
        else {
            return true;
        }
    }
}
exports.default = BST;
