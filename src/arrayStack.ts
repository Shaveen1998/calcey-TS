import {Stack} from './stack-interfce'

class ArrayStack<T> implements Stack<T>{

    private itemList:T[]=[];

    public push(item: T): void { //O(1)
        this.itemList.push(item)
    }
    public pop(): T | undefined { //O(1)
        return this.itemList.pop()
    }
    public peek(): T | undefined { //O(1)
        return this.itemList[this.itemList.length-1 ]
    }
    public is_empty(): boolean {//O(1)
       return this.itemList.length==0 ? true : false
    }
    public clear(): void { //O(n)
        this.itemList.length = 0
    }
}

export default ArrayStack