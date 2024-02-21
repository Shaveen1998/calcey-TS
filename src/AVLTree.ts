import AVLTreeNode from "./AVLTreeNode";

class AVLTree{
    public  root:AVLTreeNode|null;

    constructor(){
        this.root = null
    }

    public getHeight(node:AVLTreeNode|null):number{
         return node ? node.height: 0;
    }

    public updateHeight(node:AVLTreeNode):void{ //O(1)
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right))
    }

    public getBalanceFactor(node:AVLTreeNode):number{ //O(1)
        return this.getHeight(node.left) - this.getHeight(node.right)
    }
}

export default AVLTree