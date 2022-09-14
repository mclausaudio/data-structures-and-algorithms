class Stack {
  constructor() {
    this.stack = [];
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack[this.stack.length - 1];
  }

  push(value) {
    this.stack.push(value)
    return this.stack;
  }

  pop() {
    if (this.isEmpty()) {
      return [];
    }
    this.stack.pop();
    return this.stack;
  }

  isEmpty() {
    if (this.stack.length <= 0) {
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
// Stack { stack: [ 'Udemy', 'Google', 'StackOverflow' ] }
console.log('PEEKING ::: ', myStack.peek());
// PEEKING::: StackOverflow
myStack.pop();
console.log('AFTER POP ::: ', myStack);
// AFTER POP :::  Stack { stack: [ 'Udemy', 'Google' ] }