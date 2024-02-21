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
}
exports.default = BST;
// class BinarySearchTree{
//     public root:TreeNode|null;
//     constructor(){
//         this.root = null;
//     }
//     //insert 
//     public insert(key:number):void{
//         this.root = this._insert(this.root, key);
//     }
//     //inserthelper
//     private _insert(node:TreeNode|null, key:number):TreeNode{
//         if(!node){
//             return new TreeNode(key)
//         }
//         if(key<node.key){
//             node.left = this._insert(node.left, key);
//         }
//         if(key>node.key){
//             node.right = this._insert(node.right, key)
//         }
//         return node;
//     }
// }
