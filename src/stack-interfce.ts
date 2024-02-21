export interface Stack<T>{
    push(item:T): void;
    pop():T | undefined;  //if the stack is empty
    peek():T | undefined;
    is_empty():boolean
    clear():void;
}