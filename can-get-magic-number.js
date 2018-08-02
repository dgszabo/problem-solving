// CAN GET MAGIC NUMBER RECURSION CHALLENGE
// Quick interview challenge

/*
You need to write the canGetMagicNumber function that takes a magic number (an integer) and an array of numbers (also integers). Your function needs to evaluate whether it is possible to put operators (+, -, *, /) between the numbers so as to get the magic number as the result after executing all the operations. The operations should be executed consequtively from left to right (* doesn't execute before + if + is on the left of *). Your function needs to use all the numbers in the array, but you can use the operators multiple times and can combine them in any order.

Examples:
canGetMagicNumber(5, [4,2,2,4]) // true
// because 4 / 2 / 2 + 4 = 5
// step 0: 4 / 2 = 2
// step 1: 2 / 2 = 1
// step 2: 1 + 4 = 5
// Remember, the operations always have to be performed left to right!

canGetMagicNumber(-1, [2,3]) // true
// because 2 - 3 = -1

canGetMagicNumber(5, [1,12,4,5]) // false
canGetMagicNumber(0, [1,2,4]) // false

Hint: the easiest way to tackle this problem is by using recursion that exlores all the different possibilities by branching out. You don't need to worry about the recursive iteration limit.

Good luck!
*/

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