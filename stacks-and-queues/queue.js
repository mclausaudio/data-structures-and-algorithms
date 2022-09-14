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

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.first = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.first === this.bottom) {
      // Basically if there is only one node left that we are removing
      this.bottom = null;
      // Gotta set the bottom to null.  Because the code below doesn't handle that.
      // or else you'll have a first = null, and a bottom = some node.
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
// Mimic a browsers history
myStack.push('Udemy');
myStack.push('Google');
myStack.push('StackOverflow');
console.log(myStack);

console.log('PEEKING ::: ', myStack.peek());

myStack.pop();
console.log('AFTER POP ::: ', myStack);
