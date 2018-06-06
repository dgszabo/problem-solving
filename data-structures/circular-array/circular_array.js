// CIRCULAR ARRAY PROBLEM
// Rithm School
// in O(n) rotational time and O(n) rotational space complexity
class CircularArray {
	constructor() { 
        this.arr = [];
	}

	addItem(item) { 
        this.arr.push(item);
	}
	getByIndex(index) { 
        if(index >= 0 && index < this.arr.length) return this.arr[index];
        else return `There is no element on index ${index}!`;
	}
	rotate(increment) { 
        let tempArr = [...this.arr]
        for(let i = 0; i < this.arr.length; i++) {
            tempArr[i] = this.arr[(i + increment) % this.arr.length];
        }
        this.arr = [...tempArr];
	}
	printArray() { 
        console.log(this.arr.join('\n'));
	}
}
