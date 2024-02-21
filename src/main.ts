import ArrayStack from "./arrayStack";
import BST from "./BST";
//stack implementation
let stack = new ArrayStack<number>();

stack.push(12)
stack.push(52)

let bstObj = new BST();

bstObj.insert(25)
bstObj.insert(85)
bstObj.insert(-5)
bstObj.insert(-52)
bstObj.insert(252)
bstObj.insert(42)
bstObj.insert(35)
bstObj.insert(100)
bstObj.insert(95)

console.log('****IN ORDER TRAVERSAL******')
bstObj.inOrderTraversal(bstObj.root)

console.log('****PRE ORDER TRAVERSAL******')
bstObj.preOrderTraversal(bstObj.root)

console.log('****POST ORDER TRAVERSAL******')
bstObj.postOrderTraversal(bstObj.root)




