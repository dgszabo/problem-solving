// MIN STACK DATA STRUCTURE PROBLEM
// Solved using a stack made of nodes
function MinStack() {
    this.head = null;
    this.tail = null;
    this.min = [];
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
    if(this.min.length === 0 || this.min[this.min.length - 1] > val) {
        this.min.push(val);
    }
    this.length++;
};
MinStack.prototype.pop = function() {
    if(this.length > 0) {
        let popped = this.head;
        this.head = popped.last;
        if(this.min[this.min.length - 1] === popped.val) {
            this.min.pop();
        }
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
    return this.min[this.min.length - 1];
};

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); //--> Returns -3.
minStack.pop();
minStack.top(); //--> Returns 0.
minStack.getMin(); //--> Returns -2. 