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

    # UNSHIFT - adding new node to the beginning of the list
    def unshift(self, val):
        new_node = Node(val)
        
        if(self.length == 0):
            self.tail = new_node
        
        new_node.next = self.head
        self.head = new_node
        self.length += 1
        
        return self

    # SHIFT - removing a nove from the beginning of the list
    def shift(self):
        if(self.length == 0):
            return None
        
        shifted_node = self.head
        
        if(self.length == 1):
            self.head = None
            self.tail = None
        else:
            self.head = self.head.next
        
        self.length -= 1
        
        return shifted_node

    # GET - get the node from a specific index
    def get(self, ind):
        if(ind >= self.length):
            return None
        
        cur = self.head
        
        while(ind):
            cur = cur.next
            ind -= 1
            
        return cur.val

    # SET - set the node's value at a specific index to given value
    def set(self, ind, val):
        if(ind >= self.length):
            return False
        
        cur = self.head
        
        while(ind):
            cur = cur.next
            ind -= 1
            
        cur.val = val
        
        return True

    # __INSERT - adding a new node at a specific index of the list
    def insert(self, ind, val):
        if(ind > self.length):
            return False
        
        new_node = Node(val)
        
        if(ind == self.length):
            self.tail.next = new_node
            self.tail = new_node
        elif(ind == 0):
            new_node.next = self.head
            self.head = new_node
        else:
            cur = self.head
            
            while(ind - 1):
                cur = cur.next
                ind -= 1
            
            new_node.next = cur.next
            cur.next = new_node
        
        self.length += 1
        
        return True

    # REMOVE - removes a node at a specific index of the list
    def remove(self, ind):
        if(ind >= self.length):
            return None
        
        if(self.length == 1):
            removed_node = self.head
            self.head = None
            self.tail = None
        else:
            if(ind == 0):
                removed_node = self.head
                self.head = self.head.next
            else:
                cur = self.head
                while(ind - 1):
                    cur = cur.next
                    ind -= 1
                removed_node = cur.next
                cur.next = cur.next.next
                if(cur.next == self.tail):
                    self.tail = cur
            
        self.length -= 1
        
        return removed_node

    # REVERSE - reverses all the nodes in the list
    def reverse(self):
        if(self.length == 0):
            return None
        
        if(self.length == 1):
            return self
        
        first = self.head
        second = self.head.next
        step = self.length - 1
        
        while(step):
            for num in range(1, step):
                first = first.next
                second = second.next
            
            second.next = first
            
            first = self.head
            second = self.head.next
            step -= 1
            
        first.next = None
        
        tail = self.tail
        self.tail = self.head
        self.head = tail
        
        return self