class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek(){
    return this.top;
  }

  push(value){
    const newNode = new Node(value);
    if(this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode
    }
    this.length++;
    return this;
  }

  pop(){
    if (this.isEmpty()) {
      return null;
    }
    if (this.top === this.bottom) {
      // Basically if there is only one node left that we are removing
      this.bottom = null;
      // Gotta set the bottom to null.  Because the code below doesn't handle that.
      // or else you'll have a top = null, and a bottom = some node.
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }

  isEmpty(){
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
console.log( myStack );
// Stack {
//   top: Node {
//     value: 'StackOverflow',
//       next: Node { value: 'Google', next: [Node] }
//   },
//   bottom: Node { value: 'Udemy', next: null },
//   length: 3
// }
console.log( 'PEEKING ::: ', myStack.peek() );
// PEEKING:::  Node {
//   value: 'StackOverflow',
//     next: Node { value: 'Google', next: Node { value: 'Udemy', next: null } }
// }
myStack.pop();
console.log( 'AFTER POP ::: ', myStack );
// AFTER POP:::  Stack {
//   top: Node { value: 'Google', next: Node { value: 'Udemy', next: null } },
//   bottom: Node { value: 'Udemy', next: null },
//   length: 2
// }