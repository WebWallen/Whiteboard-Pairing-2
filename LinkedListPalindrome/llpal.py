class ListNode:
    def __init__(self, value):
        self.value = value
        self.next = None

def isLinkedListPalindrome(node):
    # Initialize fast/slow pointers and empty stack
    fast = node
    slow = node
    stack = []

    # While fast exists and has a next
    while fast and fast.next:
        # Append slow value to stack and increment
        stack.append(slow.value)
        slow = slow.next
        fast = fast.next.next

    # Fast is valid but has no next, so skip middle
    if fast:
        slow = slow.next

    # While slow hasn't finished its loop yet
    # Compare top (pop) of stack and current node
    # If mismatch with this and slow value, return false
    while slow:
        top = stack.pop()

        if top != slow.value:
            return False

        slow = slow.next

    return True

a = ListNode(1)
b = ListNode(2)
c = ListNode(3)
d = ListNode(2)
e = ListNode(1)

a.next = b
b.next = c
c.next = d
d.next = e

w = ListNode(10)
x = ListNode(11)
y = ListNode(11)
z = ListNode(10)

w.next = x
x.next = y
y.next = z

print(isLinkedListPalindrome(a))   # should print true
print(isLinkedListPalindrome(b))   # should print false since now the 'a' node is not included in the linked list

print(isLinkedListPalindrome(w))   # should print true
