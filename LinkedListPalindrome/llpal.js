// Compare first half of LL with second half
// If they match, this means we have a palindrome

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function isLinkedListPalindrome(node) {
    // Create fast/slow pointer and attach to node
    let fast = node;
    let slow = node;

    // Initialize an empty stack to help comparisons
    const stack = [];

    // Push slow value to stack, increment slow 1 / fast 2
    while (fast && fast.next) {
        stack.push(slow.value); // last in...
        slow = slow.next;
        fast = fast.next.next;
    }

    // Case for odd number of nodes: fast is valid, fast.next isn't
    // Signifies nodes aren't even, so leave out fast (skip middle)
    if (fast) {
        slow = slow.next;
    }

    // Compare each piece of stack with current element slow sees
    // If top (popped) stack element doesn't match slow value, false
    while (slow) {
        const top = stack.pop();
        if (top !== slow.value) {
            return false;
        }
    }

    return true;
}

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(2);
const e = new ListNode(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const w = new ListNode(10);
const x = new ListNode(11);
const y = new ListNode(11);
const z = new ListNode(10);

w.next = x;
x.next = y;
y.next = z;

console.log(isLinkedListPalindrome(a));   // should print true
console.log(isLinkedListPalindrome(b));   // should print false since now the 'a' node is not included in the linked list

console.log(isLinkedListPalindrome(w));   // should print true