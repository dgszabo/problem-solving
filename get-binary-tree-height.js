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

    // get back the largest height (depth) found in the children nodes
    return Math.max(getBinaryTreeHeight(root.left, height + 1), getBinaryTreeHeight(root.right, height + 1));
}