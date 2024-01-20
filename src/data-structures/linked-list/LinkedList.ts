import { LinkedListNode } from "./LinkedListNode";

export class LinkedList<T> {
  head: LinkedListNode<T>;
  tail: LinkedListNode<T>;
  total: number = 0;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data: T): LinkedList<T> {
    const newNode = new LinkedListNode(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.total++;

    return this;
  }

  getNodeAt(pos: number): LinkedListNode<T> {
    if (this.head === null || this.total - 1 < pos) return null;

    let current = this.head;
    let x = 0;

    while (current !== null) {
      if (x === pos) break;
      x++;
      current = current.next;
    }

    return current;
  }

  prepend(data: T): LinkedList<T> {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  append(node: LinkedListNode<T>, data: T): LinkedList<T> {
    if (this.head === null || node === null) return this;

    const newNode = new LinkedListNode(data);

    const prevNode = node;
    const nextNode = node.next;

    prevNode.next = newNode;
    newNode.next = nextNode;

    this.total++;

    return this;
  }

  delete(node: LinkedListNode<T>): void {
    if (this.head === null || node === null) return null;

    let current = this.head;
    let tempNode = null;

    if (node === this.head) {
      tempNode = this.head;
      this.head = this.head.next.next;

      tempNode = null;
    } else {
      while (current.next !== node) {
        current = current.next;
      }

      tempNode = current.next;
      current.next = tempNode.next;
      tempNode = null;
    }

    this.total--;
  }

  deleteAt(pos: number): LinkedList<T> {
    this.delete(this.getNodeAt(pos));
    return this;
  }

  deleteHead(){
    if(this.head === null) return;

    let tempHead = this.head;
    this.head = tempHead.next;
    tempHead = null;

    return this.head;
  }

  appendAt(data: T, pos: number): LinkedList<T> {
    this.append(this.getNodeAt(pos - 1), data);
    return this;
  }

  //#region UTILS
  toString(): void {
    let current = this.head;
    while (current) {
      console.log(current.toString());
      current = current.next;
    }
  }

  size(): number {
    return this.total;
  }

  fromArray(arr: T[]): LinkedList<T> {
    arr.forEach((v) => this.add(v));
    return this;
  }

  toArray(): T[] {
    const nodes = [];
    let current = this.head;

    while (current) {
      nodes.push(current.data);
      current = current.next;
    }

    return nodes;
  }

  //#endregion
}
