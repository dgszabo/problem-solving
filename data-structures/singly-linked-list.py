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

