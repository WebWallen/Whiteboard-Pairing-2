class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if len(self.items) > 0:
            return self.items.pop()
        else:
            return None
    
    def peek(self):
        if len(self.items) > 0:
            return self.items[len(self.items) - 1]
        else:
            return None

class MaxStack:
    def __init__(self):
        self.stack = Stack()
        self.maxes = Stack()

    def push(self, item):
        self.stack.push(item)
        # Check the latest max and compare values (if bigger, push)
        currentMax = self.maxes.peek()
        if currentMax is None or item >= currentMax:
            self.maxes.push(item)

    def pop(self):
        item = self.stack.pop()
        # See if popped item maxes latest max (if so, remove)
        if item == self.maxes.peek():
            self.maxes.pop()
        return item

    def getMax(self):
        return self.maxes.peek()

maxStack = MaxStack()
print(maxStack.getMax())   # should print None

maxStack.push(1)
print(maxStack.getMax())   # should print 1

maxStack.push(100)
print(maxStack.getMax())   # should print 100

maxStack.pop()
print(maxStack.getMax())   # should print 1