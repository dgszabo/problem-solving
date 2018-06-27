// POWERNUMBER ALGO PROBLEM
// Interview challenge from glassdoor
function powerNumber(num) {
    let powerNumbers = new Set([4]);
    let creatorArray = [0, 0, 2]
    
    while(powerNumbers.size < num + 1) {
        let tempArr = [];
        for(let i = 2; i < creatorArray.length; i++) {
            tempArr.push(Math.pow(i, creatorArray[i] + 1))
        }
        tempArr.push(Math.pow(creatorArray.length, 2));

        let nextPower = Math.min(...tempArr);
        let incrementedExisting = false;
        for(let i = 2; i < creatorArray.length; i++) {
            if(Math.pow(i, creatorArray[i] + 1) === nextPower) {
                creatorArray[i]++;
                incrementedExisting = true;
            }
        }
        if(!incrementedExisting) {
            creatorArray.push(2);
        }
        
        powerNumbers.add(nextPower);    
    }
    
    return Array.from(powerNumbers).pop();
}