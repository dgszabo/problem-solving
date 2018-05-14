// LOWEST COMMON ANCESTOR BINARY TREE PROBLEM
// Recursive solution
function lowestCommonAncestor(root, p, q) {
    if(root === null) return null;
    if(root.val === p.val || root.val === q.val) return root;

    const left = lowestCommonAncestor(root.left, p , q);
    const right = lowestCommonAncestor(root.right, p , q);

    if(left !== null && right !== null) return root;
    if(left || right) return left || right;
    if(!left && !right) return null;
}