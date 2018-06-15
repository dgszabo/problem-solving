// CHECK VALID BST DATASTRUCTURE PROBLEM
// Rithm School
function checkValidBST(node, lowLim = -Infinity, highLim = Infinity) {
	// done base case
	if(!node) return true;

	// false base case
	if(node.val <= lowLim || node.val >= highLim) return false;
	
	// return t/f from the two nodes
	return (
		checkValidBST(node.left, lowLim, node.val) &&
		checkValidBST(node.right, node.val, highLim)
	)
}

function Node(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

//create valid tree
var node1 = new Node(10)
var node2 = new Node(5)
var node3 = new Node(1)
var node4 = new Node(7)
node2.left = node3
node2.right = node4
var node5 = new Node(15)
var node6 = new Node(13)
var node7 = new Node(20)
node5.left = node6
node5.right = node7

node1.left = node2
node1.right = node5

//create invalid tree
var node1 = new Node(10)
var node2 = new Node(5)
var node3 = new Node(1)
var node4 = new Node(11)
node2.left = node3
node2.right = node4

node1.left= node2