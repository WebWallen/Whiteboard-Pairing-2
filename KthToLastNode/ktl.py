# Use two pointers - 1 to reach end, 1 to signify k-from-end

class ListNode:
    def __init__(self, value):
        self.value = value
        self.next = None

def kthToLastNode(k, head): 
    # Handle errors first 
    if k < 1:
        raise Exception('Cannot go lower than 1st from last node')

    # Set up the pointers we need and attach to head
    leftNode = head
    rightNode = head

    # Set up for loop for right node (confirms it has a next)
    for i in range(k - 1):
        # If there isn't a next, error 
        if not rightNode.next:
            raise Exception('K is bigger than the linked list')
        rightNode = rightNode.next

    # Set up while loop for left/right (if so, increments both)
    while rightNode.next:
        leftNode = leftNode.next
        rightNode = rightNode.next

    return leftNode.value

a = ListNode("Australian Sheperd")
b = ListNode("Beagle")
c = ListNode("Cairne Terrier")
d = ListNode("Dobermann")
e = ListNode("English Mastiff")

a.next = b
b.next = c
c.next = d
d.next = e

# Some tests
print(kthToLastNode(2, a))   # should print 'Dobermann'
print(kthToLastNode(5, a))   # should print 'Australian Sheperd'
print(kthToLastNode(3, c))   # should print 'Cairne Terrier'
