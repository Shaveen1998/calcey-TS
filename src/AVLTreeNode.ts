class AVLTreeNode{
    public key:number;
    public left:AVLTreeNode|null;
    public right: AVLTreeNode|null;
    public height:number;

    constructor(key:number){
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 0
    }
}

export default AVLTreeNode;