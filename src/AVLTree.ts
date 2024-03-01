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


    public insert(key:number):void{   //O(log(n))
        this.root = this.insertData(this.root, key);
    }

    private insertData(node:AVLTreeNode|null, key:number):AVLTreeNode{   //O(log(n))
        if(!node){
            return new AVLTreeNode(key)
        }
        if(key<node.key){
            node.left = this.insertData(node.left, key)

        }else if(key>node.key){
            node.right = this.insertData(node.right, key)
        }else{
            return node
        }
        this.updateHeight(node);

        let balance = this.getBalanceFactor(node);

        if(balance>1){//Tree left heavy

            let select = node.left as AVLTreeNode;
            if(key<select.key){
                return this.rightRotate(node)
            }else{
                node.left = this.leftRotate(node.left as AVLTreeNode)
                return this.rightRotate(node)
            }
            //tree right heavy
        }else if(balance<-1){
            let select = node.right as AVLTreeNode;
            if(key>select.key){
                return this.leftRotate(node)
            }else{
                node.left = this.rightRotate(node.left as AVLTreeNode)
                return this.leftRotate(node)
            }
        }

        return node



    }

    private rightRotate(node:AVLTreeNode):AVLTreeNode{  //O(1)
        let x: AVLTreeNode  = node.left as AVLTreeNode;
        let T2 = x.right as AVLTreeNode;
        x.right = node;
        node.left = T2;
        this.updateHeight(node)
        this.updateHeight(x)
        return x;

    }

    private leftRotate(node:AVLTreeNode):AVLTreeNode{ //O(1)
        let x: AVLTreeNode  = node.right as AVLTreeNode;
        let T2 = x.left as AVLTreeNode;
        x.left = node;
        node.right = T2;
        this.updateHeight(node)
        this.updateHeight(x)
        return x;

    }

    public inOrderTraversal(node :AVLTreeNode |null): void  //O(n)
    {
        if(node)
        {
            
                this.inOrderTraversal(node.left);//Left Child
                console.log(node.key) //Root Node
                this.inOrderTraversal(node.right); //Right Child                
        }
    }
    
}

export default AVLTree