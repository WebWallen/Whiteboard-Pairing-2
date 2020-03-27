// Given a Linked List, remove nth node from the end
// 1 --> 2 --> 3 --> 4 --> 5 and n = 2
// 1 --> 2 --> 3 --> 5
// Achieved by changing 3's next pointer up another step

class ListNode {
    constructor(value, next=null) {
        this.value = value;
        this.next = next;
    };
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Create helper function to find the LL's size
    size () {
        let count = 0;
        let current = this.head;

        while (current) {
            count += 1;
            current = current.next;
        }

        return count;
    }

    removeNthNode(n) {
        // Handle lack of head 
        if (!this.head) return;

        // Set up varables for size, counter and pointer to be used in loop/comparison
        let count = 0;
        let size = this.size();
        let current = this.head;

        // Update next pointer when we find the nth node to remove it
        while (current) {
            if (count === size - n) current.next = current.next.next;
            count++;
            current = current.next;
        }

        // Handle out of bounds errors
        if (n > count) {
            return "Error: there aren't that many nodes in the linked list"
        }
    }
}