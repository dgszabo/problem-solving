// EIGHT QUEENS MATRIX PROBLEM
function validatePosition(arr, y) {
    // create slanted variables
    let rightUp = y;
    let leftUp = y;

    // iterate through the already placed queens array and check if the new pos is invalid
    for(let i = arr.length - 1; i >= 0; i--) {
        rightUp++;
        leftUp--;
        if(arr[i] === y || (rightUp < 8 && arr[i] === rightUp) || (leftUp >= 0 && arr[i] === leftUp)) {
            return false;
        }
    }
    // otherwise return true
    return true;
}

function eightQueens(positions = [], y = 0, results = [], limit = 1) {
    // return results when exceed the end of the first line
    if(positions.length === 0 && y === limit) {
        return results;
    }

    // if the positions array is 8 long, add it to the results array
    if(positions.length === 8) {
        results.push([...positions]);
        
        // and continue search with new last position
        let newY = positions.pop() + 1;
        return eightQueens([...positions], newY, results, limit);
    }

    // if the position is out of range roll back to last line
    if(y >= 8) {
        let newY = positions.pop() + 1;
        return eightQueens([...positions], newY, results, limit);
    } else {
        // if the position in the line validates continue to next line, else try next position
        if(validatePosition(positions, y)) {
            positions.push(y);
            return eightQueens([...positions], 0, results, limit);
        } else {
            return eightQueens([...positions], y + 1, results, limit);
        }    
    }
}

// result compiler function to circumvent exceeding max stack size issue
function compile() {
    let allConfigurations = [];
    
    for(let i = 0; i < 8; i++) {
        allConfigurations.push(...eightQueens([], i, [], i + 1));
    }

    return allConfigurations;
}
