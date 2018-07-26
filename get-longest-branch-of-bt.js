// GET LONGEST BRANCH OF BINARY TREE PROBLEM
/*
You are given the root node of a regular binary tree. Your task is to find the longest branch of the tree and return the values of the nodes in it in an array.

Example:
    1
   / \
  2   4
 /   / \
3   5   6
       /
      7
When given node1 (the root) of this tree, your function should return [1, 4, 6, 7], which are the values of the nodes in the longest branch of the tree.

Hint: you'll have to write your own node constructor to be able to create the tree that you can test. When writing the getLongestBranch function, think of independent modular design. It's possible to tackle the problem in one swoop, but it's easier if you split it into smaller components.

Good luck!
*/

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