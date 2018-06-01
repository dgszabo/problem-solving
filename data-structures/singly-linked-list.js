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

// PUSH - adding new node to the end of the list
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

// POP - removing a nove from the end of the list
SinglyLinkedList.prototype.pop = function() {
    if(this.length === 0) return;
    
    let poppedNode = this.tail;
    let cur = this.head;
    
    if(this.length === 1) {
      this.head = null;  
    } else {
      while(cur.next !== null && cur.next !== this.tail) {
        cur = cur.next;
      }
    }
    
    this.tail = cur;
    cur.next = null;
    this.length--;
    return poppedNode;
}

// UNSHIFT - adding new node to the beginning of the list
SinglyLinkedList.prototype.unshift = function(val) {
    let newNode = new Node(val)
    if(this.length === 0) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
}