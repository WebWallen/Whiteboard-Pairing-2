class ListNode:
    def __init__(self, value):
        self.value = value
        self.next = None

def reverseLinkedList(node):
    # Define pointer variables for current, next, previous
    current = node
    nextNode = None
    prevNode = None

    while current:
        # Store reference to next before manipulating
        nextNode = current.next

        # Reverse next by assigning prev to it
        current.next = prevNode

        # Increment to move forward
        prevNode = current
        current = nextNode

    return prevNode.value

def printList(node):
    current = node

    while current:
        print(current.value)
        current = current.next

a = ListNode('a')
b = ListNode('b')
c = ListNode('c')
d = ListNode('d')
e = ListNode('e')

a.next = b
b.next = c
c.next = d
d.next = e

print(reverseLinkedList(a))  # should print 'e'
printList(e)   # should print 'e', 'd', 'c', 'b', 'a'