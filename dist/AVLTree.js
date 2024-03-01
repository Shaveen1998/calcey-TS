"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AVLTreeNode_1 = require("./AVLTreeNode");
class AVLTree {
    constructor() {
        this.root = null;
    }
    getHeight(node) {
        return node ? node.height : 0;
    }
    updateHeight(node) {
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }
    getBalanceFactor(node) {
        return this.getHeight(node.left) - this.getHeight(node.right);
    }
    insert(key) {
        this.root = this.insertData(this.root, key);
    }
    insertData(node, key) {
        if (!node) {
            return new AVLTreeNode_1.default(key);
        }
        if (key < node.key) {
            node.left = this.insertData(node.left, key);
        }
        else if (key > node.key) {
            node.right = this.insertData(node.right, key);
        }
        else {
            return node;
        }
        this.updateHeight(node);
        let balance = this.getBalanceFactor(node);
        if (balance > 1) { //Tree left heavy
            let select = node.left;
            if (key < select.key) {
                return this.rightRotate(node);
            }
            else {
                node.left = this.leftRotate(node.left);
                return this.rightRotate(node);
            }
            //tree right heavy
        }
        else if (balance < -1) {
            let select = node.right;
            if (key > select.key) {
                return this.leftRotate(node);
            }
            else {
                node.left = this.rightRotate(node.left);
                return this.leftRotate(node);
            }
        }
        return node;
    }
    rightRotate(node) {
        let x = node.left;
        let T2 = x.right;
        x.right = node;
        node.left = T2;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    }
    leftRotate(node) {
        let x = node.right;
        let T2 = x.left;
        x.left = node;
        node.right = T2;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    }
    inOrderTraversal(node) {
        if (node) {
            this.inOrderTraversal(node.left); //Left Child
            console.log(node.key); //Root Node
            this.inOrderTraversal(node.right); //Right Child                
        }
    }
}
exports.default = AVLTree;
