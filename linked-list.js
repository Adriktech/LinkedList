class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;

  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null
    this.length = 0
  }

  addToHead(val) {
    // Your code here
    const newNode = new LinkedList (value, null)
    newNode.next = this.head
    this.head = newNode
  }

  addToTail(val) {
    // Your code here

  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
