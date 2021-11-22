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

