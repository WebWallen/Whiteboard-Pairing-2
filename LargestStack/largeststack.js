class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.items.length) return this.items.pop();
        return null;
    }

    peek() {
        if (this.items.length) {
            return this.items[this.items.length - 1];
        }
        return null;
    }
}

// Goal is to find largest item in the stack
// So we create two stacks: first = all, second = max
class MaxStack {
    constructor() {
        this.stack = new Stack();
        this.maxes = new Stack();
    }

    push(item) {
        this.stack.push(item);
        // If given item > latest max (or no max exists), add as new max to maxes stack
        if (!this.maxes.peek() || item >= this.maxes.peek()) {
            this.maxes.push(item);
        }
    }

    pop() {
        const item = this.stack.pop();
        // If popped item is current max, remove previous max
        if (item === this.maxes.peek()) {
            this.maxes.pop();
        }
    }

    // Simply call peek, already defined
    getMax() {
        return this.maxes.peek();
    }
}

/* Some console.log tests */
const maxStack = new MaxStack();
console.log(maxStack.getMax());   // should print `null`

maxStack.push(1);
console.log(maxStack.getMax());   // should print 1

maxStack.push(100);
console.log(maxStack.getMax());   // should print 100

maxStack.pop();
console.log(maxStack.getMax());   // should print 1