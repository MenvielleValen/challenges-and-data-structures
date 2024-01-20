import { LinkedList } from "../linked-list/LinkedList";

export class Stack<T> {
  linkedList: LinkedList<T>;

  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty(): boolean {
    return !this.linkedList.head;
  }

  peak(): T {
    if (this.isEmpty()) return null;
    return this.linkedList.head.data;
  }

  push(data: T) {
    this.linkedList.prepend(data);
  }

  pop(): T {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.data : null;
  }

  toString() {
    this.linkedList.toString();
  }

  toArray(){
    return this.linkedList.toArray();
  }
}
