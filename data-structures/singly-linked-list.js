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

// PUSH
SinglyLinkedList.prototype.push = function(val) {
    let newNode = new Node(val)
    if(this.length === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
}