// MIN STACK DATASTRUCTURE PROBLEM
// Solved using a stack made of nodes
function MinStack() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

function Node(val) {
    this.val = val;
    this.last = null;
}

MinStack.prototype.push = function(val) {
    let newNode = new Node(val);
    if(this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode.last = this.head;
        this.head = newNode;
    }
    this.length++;
};
MinStack.prototype.pop = function() {
    if(this.length > 0) {
        let popped = this.head;
        this.head = popped.last;
        this.length--;
        return popped;
    }
};

MinStack.prototype.top = function() {
    if(this.length > 0) {
        return this.head.val;
    }
};

MinStack.prototype.getMin = function() {
    let min = Infinity;
    let cur = this.head;
    for(let i = 0; i < this.length; i++) {
        if(cur.val < min) {
            min = cur.val;
        }
        cur = cur.last
    }
    return min;
};

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); //--> Returns -3.
minStack.pop();
minStack.top(); //--> Returns 0.
minStack.getMin(); //--> Returns -2. 