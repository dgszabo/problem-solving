// ALERT OR NOT ARRAY ITERATION PROBLEM
function alertOrNot(inputs, windowSize, allowedIncrease) {
    // create basic variables
    let timesSeen = Array.apply(null, Array(inputs.length)).map(() => 0)
    let timesAboveLimit = [...timesSeen];
    let currentWindow = 0;

    // create window and modify variables; check if any element is above allowedIncrease
    for(let i = 0; i < windowSize; i++) {
        currentWindow += inputs[i];
        timesSeen[i]++;
    }
    
    let currentAvg = currentWindow / windowSize;
    let maxAvg = currentAvg;
    let minAvg = currentAvg;

    for(let i = 0; i < windowSize; i++) {
        if(inputs[i] > currentAvg * allowedIncrease) {
            timesAboveLimit[i]++;
        }
    }

    // slide window and modify variables
    for(let i = 0; i < inputs.length - windowSize; i++) {
        currentWindow -= inputs[i];
        currentWindow += inputs[i + windowSize];
        currentAvg = currentWindow / windowSize;
        if(minAvg > currentAvg) {
            minAvg = currentAvg;
        }
        if(maxAvg < currentAvg) {
            maxAvg = currentAvg;
        }
        for(let j = i + 1; j <= i + windowSize; j++) {
            timesSeen[j]++;
            if(inputs[j] > currentAvg * allowedIncrease) {
                timesAboveLimit[j]++;
            }
        }
    }

    // check if there is a need a to alert
    for(let i = 0; i < inputs.length; i++) {
        if(timesSeen[i] === timesAboveLimit[i]) {
            return true;
        }
    }
    if(minAvg * allowedIncrease < maxAvg) {
        return true;
    }

    return false;
}

// alertOrNot([100, 1, 1, 1, 1], 2, 1.5) // true
// alertOrNot([1, 1, 1, 1, 1], 3, 1.5) // false
// alertOrNot([100, 100, 100, 100, 100], 2, 1) // false
// alertOrNot([20, 30, 100, 80, 70], 2, 1.3) // true
// alertOrNot([40, 100, 80, 70], 2, 1.3) // false
// alertOrNot([100, 40, 100, 80, 70], 2, 1.3) // true
// alertOrNot([20, 40, 100, 80, 70, 60, 50, 40, 100], 2, 1.3) // true