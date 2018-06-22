// BIGGER IS GREATER ALGO PROBLEM
// HackerRank https://www.hackerrank.com/challenges/bigger-is-greater/problem
function biggerIsGreater(w) {
    let letters = w.split('');
    let finalLen = letters.length;
    let wordSet = new Set();

    function helper(letters, arr) {
        if(letters.length === 0) {
            wordSet.add(arr.join(''));
            return;
        }
        for(let i = letters.length - 1; i >= 0; i--) {
            let tempArr = [...arr];
            let tempLetters = [...letters]
            tempArr.push(tempLetters.splice(i, 1)[0]);    
            
            helper(tempLetters, tempArr);
        }
    }
    
    helper(letters, []);

    let wordArray = Array.from(wordSet).sort();

    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === w) {
            return wordArray[i + 1] ? wordArray[i + 1] : 'no answer';
        }
    }
}