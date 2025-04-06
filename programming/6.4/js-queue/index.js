class Queue {
    constructor() {
        this.q = []
    }

    queue(element) {
        this.q.push(element)
    }

    deQueue() {
        return this.q.shift()
    }

    isEmpty() {
        return this.q.length === 0
    }

    queueLength() {
        return this.q.length
    }

}


const eventQueue = new Queue()
eventQueue.queue("event_1")
eventQueue.queue("event_2")
eventQueue.queue("event_3")
eventQueue.queue("event_4")
console.log(eventQueue.deQueue())
console.log(eventQueue.deQueue())
console.log(eventQueue.deQueue())
eventQueue.queue("event_5")

console.log(eventQueue.isEmpty())
console.log(eventQueue.queueLength())