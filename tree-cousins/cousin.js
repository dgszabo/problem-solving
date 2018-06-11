// TREE COUSINS DATASTRUCTURE PROBLEM
// Rithm School
class Node {
    constructor(data) {
	    this.children = [];
	    this.data = data;
	    this.parent = null;
    }

    setParent(parent) {
	    this.parent = parent;
	    parent.children.push(this);
    }

    cousins() {
	    // traverse to the root of the tree
	    let searchVal = this;
	    let root = this;
	    while(root.parent) {
	        root = root.parent;
	    }
        
        // start BFS
	    let arr = [ root ];
	    let found = false;

	    while(arr.length > 0 && !found) {
	        let tempArr = [];
	        for(let el of arr) {
	            tempArr = [...tempArr, ...el.children]
	        }
	        let newTempArr = [];
	        for(let el of tempArr) {
	        	if(el === searchVal) {
	                found = true;
	            } else {
	                newTempArr.push(el);
	            }
	        }
	        arr = [...newTempArr];
	    }

	    return new Set(arr);
    }
}
