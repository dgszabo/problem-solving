// LOWEST COMMON ANCESTOR BST PROBLEM
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  
// IMPLEMENTED USING TWO STACKS TO BUILD PATH TO TARGET
// THEN POP THE STACKS UNTIL THEIR LAST ELEMENT COINCIDES
// O(n) time and space complexity
function lowestCommonAncestorBST(root, p, q) {
    let pStore = [root];
    let qStore = [root];
    
    function buildList(el, store) {
        while(el !== store[store.length - 1]) {
            if(store[store.length - 1].val < el.val) {
                store.push(store[store.length - 1].right);
            } else if(store[store.length - 1].val > el.val) {
                store.push(store[store.length - 1].left);
            }
        }
    }
    buildList(p, pStore);
    buildList(q, qStore);
    
    while(pStore[pStore.length - 1] !== qStore[qStore.length - 1]) {
        if(pStore.length > qStore.length) {
            pStore.pop();
        } else if(pStore.length < qStore.length) {
            qStore.pop();
        } else {
            pStore.pop();
            qStore.pop();
        }
    }

    return pStore[pStore.length - 1];
}

// IMPLEMENTED THROUGH RECURSION AND CONDITIONAL LOGIC
// O(log n) time and O(1)'ish space complexity
function lowestCommonAncestorBST(root, p, q) {
    if(p.val > root.val && q.val > root.val) {
        return lowestCommonAncestorBST(root.right, p, q);
    } else if(p.val < root.val && q.val < root.val) {
        return lowestCommonAncestorBST(root.left, p, q);
    } else {
        return root;
    }
}