# Given a Linked List, remove nth node from the end
# 1 --> 2 --> 3 --> 4 --> 5 and n = 3
# 1 --> 2 --> 4 --> 4
# Achieved by changing 2's next pointer up another step

class ListNode:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next

class LinkedList:
    def __init__(self):
        self.head = None

    # Create helper function to find the LL's size
    def size(self):
        count = 0
        current = self.head

        while (current):
            count += 1
            current = current.next

        return count

    def removeNthNode(self, n):
        # Handle lack of head
        if self.head is None:
            return

        # Set up variables for count, size, and current
        count = 0
        size = self.size()
        current = self.head

        # Update nth node's next pointer to remove it
        while current:
            if count == size - n:
                current.next = current.next.next
            
            count += 1
            current = current.next

        # Handle out of bounds errors
        if n > count:
            return "Error: there aren't that many nodes in the list"