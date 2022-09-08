// Big O
// prepend O(1)
// append O(1)
// lookup O(n)
// insert O(n)
// delete O(n)

// Singly Linked List, we can only traverse from FORWARD TO BACKWARDS

class LinkedList {
  constructor(value) {
    // When you're creating a linked list, we're starting with the first node
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  // append O(1)
  append(value) {
    const newNode = new Node(value);
    // First update the .next value on the old / current value;
    this.tail.next = newNode;
    // This part below actually appends, or sets the value of the tail
    this.tail = newNode;
    this.length++;
    return this.printList();
  }
  // prepend O(1)
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode
    this.length++;
    return this.printList();
  }
  // insert O(n)
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }
    const newNode = new Node(value);
    let leader = this.traverseToIndex(index - 1);
    let holdingPointer = leader.next;

    newNode.next = holdingPointer;
    leader.next = newNode;
    this.length++;
    return this.printList();
  }
  // remove O(n)
  remove(index) {
    if (index === 0) {
      this.head = this.head.next
      this.length--;
      return this.printList();
    }
    if (index >= this.length) {
      const secondToLast = this.traverseToIndex(this.length - 2);
      secondToLast.next = null;
      this.tail = secondToLast;
      return this.printList();
    }
    const leader = this.traverseToIndex(index - 1)
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  // Utils
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next;
    }
    return array
  }
  traverseToIndex(index) {
    // check for params, make sure it's valid. for now we wil assume
    let counter = 0;
    let currentNode = this.head;
    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}


const myLinkedList = new LinkedList(10);
// [ 10 ]
myLinkedList.append(5);
myLinkedList.append(16);
// [ 10, 5, 16 ]
myLinkedList.prepend(1);
// [1, 10, 5, 16]
myLinkedList.insert(2, 99);
// [1, 10, 99, 5, 16]
myLinkedList.insert(10000, 8);
// [1, 10, 99, 5, 16, 8] appends since the index is more than teh current length
myLinkedList.remove(0) 
// [ 10, 99, 5, 16, 8 ]
myLinkedList.remove(10000) 
// [ 10, 99, 5, 16 ]
myLinkedList.remove(1) 
// [ 10, 5, 16 ]
console.log( myLinkedList.printList() );

console.log( JSON.stringify(myLinkedList) )
// {"head":{"value":10,"next":{"value":5,"next":{"value":16,"next":null}}},"tail":{"value":16,"next":null},"length":4}
