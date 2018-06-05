// PARTIAL CLOSURE PROBLEM
// Rithm School
function partial(func) {
    let args = [];

    function inner() {
        args = [...args, ...arguments]
        if(args.length >= func.length) {
            return func(...args.slice(0, func.length));
        }
        else return inner;
    }

    return inner;
}