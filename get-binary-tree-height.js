// GET BINARY TREE HEIGHT BINARY TREE PROBLEM
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function getBinaryTreeHeight(root, height = 0) {
    // base case
    if(root === null) {
        return height;
    }

    return Math.max(getBinaryTreeHeight(root.left, height + 1), getBinaryTreeHeight(root.right, height + 1));
}