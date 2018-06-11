class Cousin {
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
	    // TODO
    }
}
