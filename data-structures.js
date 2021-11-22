// Implement Queue:

const queueObj = {
  queue: ["john", "mary", "caleb", "michelle"],
  enqueue: function (person) {
    this.queue.push(person);
  },
  dequeue: function () {
    return this.queue.shift() || "Queue is empty";
  },
};

queueObj.enqueue("gabriel");
console.log(queueObj.queue, " after gabriel was added");
console.log("next person please! ", queueObj.dequeue(), ", your'e up");
console.log(queueObj.queue, " after last person was dequeued");

// Implement Stack:

const stackObj = {
  stack: ["blue", "red", "yellow", "pink"],
  push: function (element) {
      this.stack.push(element);
  },
  pop: function () {

      return this.stack.pop();
  }
};

stackObj.push("purple");
console.log("stack after pushing purple: ",stackObj.stack);
console.log("pop last element that was pushed: ",stackObj.pop());
console.log("stack after popping: ",stackObj.stack);

// Implement linked list

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

let node1 = new ListNode("content of node 1");
let node2 = new ListNode("hi im the second node");
// now link between node 1 and node 2 :
node1.next = node2;

// Lets create a linked list with node1 as its head!
let LinkedList1 = new LinkedList(node1);

// now access the second node with our linked list:
console.log(LinkedList1.head.next.data);
