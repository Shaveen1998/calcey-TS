class TreeNode{
   public key:number;
   public left:TreeNode|null;
   public right:TreeNode|null;

   constructor(key:number){
      this.key = key;
      this.left = null;
      this.right = null;
   }
}

export default TreeNode