class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.first === this.last) {
      // Basically if there is only one node left that we are removing
      this.last = null;
      // Gotta set the last to null.  Because the code below doesn't handle that.
      // or else you'll have a first = null, and a last = some node.
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }

  isEmpty() {
    if (this.length <= 0) {
      return true;
    } else {
      return false;
    }
  }
}

const myStack = new Stack();
// Mimic a wait list
myStack.enqueue('Renee');
console.log('enqueue Renee : ', myStack);
myStack.enqueue('Yuki');
console.log('enqueue Yuki : ', myStack);
myStack.enqueue('Shurik');
console.log('enqueue Shurik : ', myStack);

console.log('PEEKING ::: ', myStack.peek());

myStack.dequeue(); // take off first item.  In this waitlist example, means the first person in line has been helped.
console.log('AFTER dequeue first item ::: ', myStack);
myStack.dequeue(); 
console.log('AFTER 2nd dequeue ::: ', myStack);
myStack.dequeue(); 
console.log('AFTER 3nd dequeue ::: ', myStack);
// AFTER 3nd dequeue :::  Stack { first: null, last: null, length: 0 }
