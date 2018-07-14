// INVERT BINARY TREE TREE MANIPULATION PROBLEM
// LeetCode https://leetcode.com/problems/invert-binary-tree/description/
function invertTree(root) {
  let bfsStore = [root];

  while(bfsStore.length > 0) {
      let tempStore = [];

      for(let i = 0; i < bfsStore.length; i++) {
          let left = bfsStore[i].left;
          bfsStore[i].left = bfsStore[i].right;
          bfsStore[i].right = left;

          if(bfsStore[i].left) {
              tempStore.push(bfsStore[i].left);
          }
          if(bfsStore[i].right) {
              tempStore.push(bfsStore[i].right);
          }
      }

      bfsStore = [].concat(tempStore);
  }

  return root;
};

function Node(val) {
  this.val = val;
  this.left = this.right = null;
}

var one = new Node(1);
one.left = new Node(2);
one.right = new Node(3);
one.left.left = new Node(4);
one.left.right = new Node(5);
one.right.left = new Node(6);
one.right.right = new Node(7);