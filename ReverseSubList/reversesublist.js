// Receives LL node as input plus "start" and "end" integers
// Start = first node and end = last node within the sublist
// We want to reverse them "in place" without using extra memory

// 1 --> 2 --> 3 --> 4 --> 5 --> N
// Given input "start = 2" and "end = 4" -- output would be:
// 1 --> 4 --> 3 --> 2 --> 5 --> N

class ListNode {
    constructor(value, next=null) {
        this.value = value;
        this.next = next;
    };
};

function reverseLinkedList(node) {
    // First set up pointers for current, next, and previous
    let current = node;
    let nextNode = null;
    let prevNode = null;

    while (current) {
        // Store reference to next list node before overwriting it
        nextNode = current.next;

        // Reverse the "next" pointer by assigning previous
        current.next = prevNode;

        // Step forward to the next list node 
        prevNode = current;
        current = nextNode;
    }

    return prevNode.value;
}

const a = new ListNode('a');
const b = new ListNode('b');
const c = new ListNode('c');
const d = new ListNode('d');
const e = new ListNode('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

function printList(node) {
    let current = node;

    while (current) {
        console.log(current.value);
        current = current.next;
    }
}

console.log(reverseLinkedList(a));  // should print 'e'
printList(e);   // should print 'e', 'd', 'c', 'b', 'a'