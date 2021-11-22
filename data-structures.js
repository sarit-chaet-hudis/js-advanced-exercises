const queueObj = {
    queue: ["john", "mary", "caleb", "michelle"],
    enqueue: function (person) {
        this.queue.push(person);
    },
    dequeue : function () {
        return this.queue.shift();
    }
}

queueObj.enqueue("gabriel");
console.log(queueObj.queue, " after gabriel was added");
console.log("next person please! ",queueObj.dequeue(), ", your'e up");
console.log(queueObj.queue, " after last person was dequeued");
