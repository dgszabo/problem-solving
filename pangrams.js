// PANGRAMS STRING MANIPULATION PROBLEM
// HackerRank https://www.hackerrank.com/challenges/pangrams/problem
function pangrams(s) {
    let alphabet = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])
    
    for(let i = 0; i < s.length; i++) {
        alphabet.delete(s[i].toLowerCase());
    }

    return alphabet.size === 0 ? 'pangram' : 'not pangram';
}