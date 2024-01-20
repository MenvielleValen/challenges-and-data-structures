export class LinkedListNode<T>{

    data: T;
    next: LinkedListNode<T>;

    constructor(value: T, next: LinkedListNode<T> = null){
        this.data = value;
        this.next = next;
    }

    toString(callback: (value: T) => void = null){
        return callback ? callback(this.data) : `${this.data}`;
    }
}