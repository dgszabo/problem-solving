/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline()); // Number of elements which make up the association table.
var Q = parseInt(readline()); // Number Q of file names to be analyzed.
var associationTable = {};
var outArr = [];

for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    var EXT = inputs[0].toLowerCase(); // file extension
    var MT = inputs[1]; // MIME type.
    associationTable[EXT] = MT;
}

for (var i = 0; i < Q; i++) {
    var FNAME = readline(); // One file name per line.
    var fnameArr = FNAME.split('.')
    var EXT = fnameArr.length > 1 ? fnameArr[fnameArr.length - 1].toLowerCase() : 'N/A';
    // console.log(EXT)
    if(associationTable[EXT]) {
        outArr.push(associationTable[EXT]);
    } else {
        outArr.push('UNKNOWN')    
    }
}

// Write an action using print()
// To debug: printErr('Debug messages...');


// For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
print(outArr.join('\n'));