// SINGLY LINKED LIST PROBLEMS
// Basic node and list builder functions
function Node(val, next = null) {
    this.val = val;
    this.next = next;
}
  
function SinglyLinkedList(head = null, tail = null, length = 0) {
    this.head = head;
    this.tail = tail;
    this.length = length;
}