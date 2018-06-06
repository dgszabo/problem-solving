// CIRCULAR ARRAY PROBLEM
// Rithm School
// in O(n) rotational time and O(n) rotational space complexity
class CircularArray {
	constructor() { 
        this.arr = [];
        this.start = 0;
	}

	addItem(item) { 
        if(this.arr.length === 0 || this.start === 0) this.arr.push(item);
        else {
            this.arr.splice(this.start, 0, item);
            this.start = this.start + 1;
        }
	}
	getByIndex(index) { 
        if(index >= 0 && index < this.arr.length) return this.arr[(index + this.start) % this.arr.length];
        else return `There is no element on index ${index}!`;
	}
	rotate(increment) { 
        this.start = this.start + increment >= 0 ? (this.start + increment) % this.arr.length : this.arr.length + ((this.start + increment) % this.arr.length);
	}
	printArray() { 
        for(let i = 0; i < this.arr.length; i++) {
            let idx = (this.start + i) % this.arr.length;
                console.log(this.arr[idx]);
        }
	}
}

// in O(1) rotational time and O(1) rotational space complexity
class CircularArray {
	constructor() { 
        this.arr = [];
        this.start = 0;
	}

	addItem(item) { 
        this.arr.push(item);
	}
	getByIndex(index) { 
        if(index >= 0 && index < this.arr.length) return this.arr[(index + this.start) % this.arr.length];
        else return `There is no element on index ${index}!`;
	}
	rotate(increment) { 
        this.start = increment >= 0 ? increment % this.arr.length : this.arr.length + (increment % this.arr.length);
	}
	printArray() { 
        for(let i = 0; i < this.arr.length; i++) {
            let idx = (this.start + i) % this.arr.length;
                console.log(this.arr[idx]);
        }
	}
}

