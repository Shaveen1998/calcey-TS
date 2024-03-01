"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AVLTreeNode {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 0;
    }
}
exports.default = AVLTreeNode;
//practical applications of AVL trees - indexing a large database, autocomplete suggestions
//AVL and binary trees cant do real time updates
