// ENCRIPTION ARRAY MANIPULATION PROBLEM
// HackerRank
function encryption(s) {
    let inputArr = [];
    let eachLen = Math.ceil(Math.sqrt(s.length));
    
    for(let i = 0; i < s.length; i += eachLen) {
        inputArr.push(s.slice(i, i + eachLen));
    }
    
    let outputArr = [];
    
    for(let j = 0; j < inputArr[0].length; j++) {
        let encriptedWord = [];
        for(let k = 0; k < inputArr.length; k++) {
            encriptedWord.push(inputArr[k][j]);
        }
        outputArr.push(encriptedWord.join(''));
    }
    
    return outputArr.join(' ');
}
