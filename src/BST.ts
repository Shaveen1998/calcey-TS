import TreeNode from "./TreeNode";

class BST{
    public root: TreeNode | null;

    constructor(){
        this.root = null
    }

   //insert 
   public insert(key:number):void{ //O(logn)
    this.root = this._insertData(this.root, key)
   }
   //recursive method
   private _insertData(node:TreeNode | null, key:number):TreeNode{
        if(!node){
            return new TreeNode(key);
        }

        if(key< node.key){
            node.left = this._insertData(node.left, key)
        }else if(key> node.key){
            node.right = this._insertData(node.right,key)
        }

        return node;
   }

   public inOrderTraversal(node: TreeNode | null):void{ //O(n)
    if(node){
        this.inOrderTraversal(node.left)
        console.log(node.key)
        this.inOrderTraversal(node.right)
    }
    

   }

   public postOrderTraversal(node: TreeNode | null):void{
    if(node){
        this.postOrderTraversal(node.left)
        this.postOrderTraversal(node.right)
        console.log(node.key)
    }
    

   }

   public preOrderTraversal(node: TreeNode | null):void{
    if(node){
        console.log(node.key)
        this.preOrderTraversal(node.left)
        this.preOrderTraversal(node.right)
    }
    

   }
   
   public invertTree(node:TreeNode|null):TreeNode|null{
    if(node===null) return null

    //swap
    let temp = node.left;
    node.left = node.right;
    node.right = temp;

    this.invertTree(node.left);
    this.invertTree(node.right)

    return node
   }

   public search(key:number):boolean{
    return this.searchNode(this.root, key)
   }

   public searchNode(node:TreeNode|null, key:number):boolean{
    if(!node)return false;

    if(key<node.key){
        return this.searchNode(node.left, key)

    }else if(key>node.key){
        return this.searchNode(node.right,key)
    }else{
        return true
    }
   }
   
}

export default BST
