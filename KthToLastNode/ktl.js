// Given the head and number signifying how many places from end

function kthToLastNode(k, head) {
    // Set up error handling
    if (k < 1) {
        throw new Error('Cannot find less than first to last node, ', k);
    }

    // Make two pointers - right traverses whole list, left one behind (k)
    let leftNode = head;
    let rightNode = head;

    // Initialize loop to move the right node
    for (let i = 0; i < k - 1; i++) {
        // If no next, k is larger than the list
        if (!rightNode.next) {
            throw new Error('k is larger than the list length');
        }
        rightNode = rightNode.next;
    }

    // Walk down the whole list
    while (rightNode.next) {
        leftNode = leftNode.next;
        rightNode = rightNode.next;
    }

    // When while stops being true, left is kth to last node
    return leftNode.value;
}

class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  let a = new ListNode("Australian Sheperd");
  let b = new ListNode("Beagle");
  let c = new ListNode("Cairne Terrier");
  let d = new ListNode("Dobermann");
  let e = new ListNode("English Mastiff");
  
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  
  /* Some console.log tests */
  console.log(kthToLastNode(2, a));   // should print 'Dobermann'
  console.log(kthToLastNode(5, a));   // should print 'Australian Sheperd'
  console.log(kthToLastNode(3, c));   // should print 'Cairne Terrier'