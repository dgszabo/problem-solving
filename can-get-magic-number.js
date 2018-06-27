// CAN GET MAGIC NUMBER RECURSION CHALLENGE
// Quick interview challenge
function canGetMagicNumber(magicNumber, numbers) {
    function helper(arr, acc = 0, op = '+') {
        if(arr.length === 0) {
            if(acc === magicNumber) {
                return true;
            } else {
                return false;
            }
        }
        
        if(op === '+') {
            acc = acc + arr.shift();
        } else if(op === '-') {
            acc = acc - arr.shift();
        } else if(op === '*') {
            acc = acc * arr.shift();
        } else {
            acc = acc / arr.shift();
        }
        console.log(`The length of the array is ${arr.length} and the accumulator is ${acc}`);

        return (
            helper([...arr], acc, '+') ||
            helper([...arr], acc, '-') ||
            helper([...arr], acc, '*') ||
            helper([...arr], acc, '/')
        )
    }

    return helper(numbers);
}