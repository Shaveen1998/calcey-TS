import AVLTreeNode from "./AVLTreeNode";

class AVLTree{
    public  root:AVLTreeNode|null;

    constructor(){
        this.root = null
    }

    private getHeight(node:AVLTreeNode|null):number{ //O(1)
         return node ? node.height: 0;
    }

    private updateHeight(node:AVLTreeNode):void{ //O(1)
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right))
    }

    private getBalanceFactor(node:AVLTreeNode):number{ //O(1)
        return this.getHeight(node.left) - this.getHeight(node.right)
    }


    public insert(key:number):void{
        this.root = this.insertData(this.root, key);
    }

    private insertData(node:AVLTreeNode|null, key:number):AVLTreeNode{
        if(!node){
            return new AVLTreeNode(key)
        }
        if(key<node.key){
            node.left = this.insertData(node.left, key)

        }else if(key>node.key){
            node.right = this.insertData(node.right, key)
        }

        return node
    }
    
}

export default AVLTree