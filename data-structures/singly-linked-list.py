# SINGLY LINKED LIST PROBLEMS
# Basic node and list builder functions
class Node:
    def __init__(self, val, next=None):
        self.val = val
        self.next = next
        
class Singly_Linked_List:
    def __init__(self, head=None, tail=None, length=0):
        self.head = head
        self.tail = tail
        self.length = length

    # PUSH - adding new node to the end of the list
    def push(self, val):
        new_node = Node(val)
        
        if(self.length == 0):
            self.head = new_node
        
        if(self.tail):
            self.tail.next = new_node
        self.tail = new_node
        
        self.length += 1
        return self

    # POP - removing a nove from the end of the list
    def pop(self):
        if(self.length == 0):
            return None
        
        cur = self.head
        
        if(self.length == 1):
            popped_node = cur
            self.head = None
            self.tail = None
        else:
            while(cur.next != self.tail):
                cur = cur.next
            popped_node = cur.next
            cur.next = None
            self.tail = cur
        
        self.length -= 1
        
        return popped_node

    