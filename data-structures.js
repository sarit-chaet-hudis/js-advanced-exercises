// Implement Queue:

const queueObj = {
  queue: ["john", "mary", "caleb", "michelle"],
  enqueue: function (person) {
    this.queue.push(person);
  },
  dequeue: function () {
    return this.queue.shift() || "Queue is empty";
  },
  contains: function (person) {
    return this.queue.includes(person);
  },
  isEmpty: function () {
    return this.queue.length === 0;
  },
  removeFirstX: function (person) {
    const indexOfPerson = this.queue.indexOf(person);
    return indexOfPerson === -1
      ? person + "is not in queue"
      : this.queue.splice(indexOfPerson, 1);
  },
};

queueObj.enqueue("gabriel");
// console.log(queueObj.queue, " after gabriel was added");
// console.log("next person please! ", queueObj.dequeue(), ", your'e up");
// console.log(queueObj.queue, " after last person was dequeued");
// console.log("is there a mary in the queue? ", queueObj.contains("mary"));
// console.log("is the queue empty? ", queueObj.isEmpty());
console.log("remove mary ", queueObj.removeFirstX("mary"), queueObj.queue);

// Implement Stack:

const stackObj = {
  stack: ["blue", "red", "yellow", "pink"],
  push: function (element) {
    this.stack.push(element);
  },
  pop: function () {
    return this.stack.pop();
  },
  contains: function (color) {
    //
  },
  isEmpty: function () {
    return this.stack.length === 0;
  },
};

stackObj.push("purple");
console.log("stack after pushing purple: ", stackObj.stack);
console.log("pop last element that was pushed: ", stackObj.pop());
console.log("stack after popping: ", stackObj.stack);

// Implement linked list

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.addToEnd = function (newNode) {
      if (!head) return;
      // i think it isnt necessary
      let currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
        //walking on all the nodes untile there's no "next" = last node
      }
      currentNode.next = newNode;
    };
    this.addToStart = function (newNode) {
      let oldHead = this.head;
      this.head = newNode;
      // why in emanuel's code there's no "this.head = " ? 
      // he doesnt use a class for the entire linked list, 
      // so he just has a regular node named "head".
      newNode.next = oldHead;
    };
  }
}

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let node1 = new ListNode("content of node 1");
let node2 = new ListNode("hi im the second node");
// now link between node 1 and node 2 :
node1.next = node2;
let node3 = new ListNode("three");
node2.next = node3;
// direct access possible only because node was created manually.

// if the linked list items were created with a method, reaching the Nth node was possible only by travelling
// across all nodes until you reach it.

// Lets create a linked list with node1 as its head!
let LinkedList1 = new LinkedList(node1);

// now access the second node with our linked list:
console.log(LinkedList1.head.next.data);
