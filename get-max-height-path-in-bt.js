// GET MAX HEIGHT PATH IN BINARY TREE PROBLEM
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function getBinaryTreeHeight(root = null, height = 0) {
    // base case
    if(root === null) {
        return height;
    }

    return Math.max(getBinaryTreeHeight(root.left, height + 1), getBinaryTreeHeight(root.right, height + 1));
}

function getMaxHeightPath(root = null, arr = [], height) {
    // init height
    if(!height) {
        height = getBinaryTreeHeight(root);
    }

    // success base case
    if(arr.length === height) {
        return arr;
    }

    // fail base case
    if(root === null) {
        return false;
    }

    // rebinding and recursive call
    arr = arr.concat([root.val]);

    return (
        getMaxHeightPath(root.left, arr, height) ||
        getMaxHeightPath(root.right, arr, height)
    )
}

function format(arr) {
    return arr.join(' ');
}

// var one = new Node(1);
// one.left = new Node(2);
// one.right = new Node(3);
// one.left.left = new Node(4);
// one.left.right = new Node(5);
// one.right.left = new Node(6);
// one.right.left.right = new Node(7);