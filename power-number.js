// POWERNUMBER ALGO PROBLEM
// Interview challenge from glassdoor

/*
A power number is an n > 1 number on the m > 1 power. So the 1st power number is 2^2, the second is 2^3 and the third is 3^2. Thus the list of the first power numbers is 4, 8, 9, 16, 25, 27, 36, and so on.

Devise a function that takes an N > 1 integer and returns the Nth power number! This is a pretty complicated task, so don't worry about time and/or space complexity.

Good luck!
*/

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