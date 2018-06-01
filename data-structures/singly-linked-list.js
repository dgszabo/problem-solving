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

    return this;
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

    return this;
}

// SHIFT - removing a nove from the beginning of the list
SinglyLinkedList.prototype.shift = function() {
    if(this.length === 0) return;
    
    let shiftedNode = this.head;

    if(this.length === 1) {
        this.tail = null;
        this.head = null;
    } else {
        this.head = this.head.next;
    }
    this.length--;
    
    return shiftedNode.val;
}

// __GET - get the node from a specific index
SinglyLinkedList.prototype.__get = function(ind) {
    if(this.length <= ind) return null;

    let cur = this.head;
    while(ind) {
        cur = cur.next;
        ind--;
    }

    return cur;
}

// SET - set the node's value at a specific index to given value
SinglyLinkedList.prototype.set = function(ind, val) {
    if(this.length <= ind) return false;

    let cur = this.head;
    while(ind) {
        cur = cur.next;
        ind--;
    }
    cur.val = val;
    return true;
}

// __INSERT - adding a new node at a specific index of the list
SinglyLinkedList.prototype.__insert = function(ind, val) {
    if(ind > this.length) return false;
    
    let newNode = new Node(val);

    if(ind === 0) {
        newNode.next = this.head;
    } else {
        let cur = this.head;
        ind--;
        while(ind) {
            cur = cur.next;
            ind--;
        }
        newNode.next = cur.next;
        cur.next = newNode;

        if(cur === this.tail) this.tail = newNode;
    }
    this.length++;

    return true;
}

// REMOVE - removes a node at a specific index of the list
SinglyLinkedList.prototype.remove = function(ind) {
    if(ind >= this.length) return;

    let removedNode;
    let cur = this.head;
    ind--;
    while(ind > 0) {
        cur = cur.next;
        ind--;
    }

    if(cur === this.head) {
        removedNode = this.head;
        this.head = this.head.next;
    } else if(cur.next === this.tail) {
        removedNode = this.tail;
        this.tail = cur;
    } else {
        removedNode = cur.next;
        cur.next = cur.next.next;
    }
    this.length--;
 
    return removedNode;
}

// REVERSE - reverses all the nodes in the list
SinglyLinkedList.prototype.reverse = function() {
    let cur = this.head;
    let next = this.head.next;
    for(let i = 0; i < this.length; i++) {
        if(cur === this.head) {
            let prev = cur;
            cur.next = null;
        } else {
            next = cur.next;
            cur.next = prev;
        }
        prev = cur;
        cur = next;
        if(next) {
            next = next.next;  
        }
    }
    let head = this.head;
    this.head = this.tail;
    this.tail = head;
    
    return this;
}