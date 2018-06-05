// PARTIAL CLOSURE PROBLEM
// Rithm School
function partial(func) {
    let args = [];

    function inner() {
        args = [...args, ...arguments]
        if(args.length >= func.length) {
            return func(...args);
        }
        else return inner;
    }

    return inner;
}