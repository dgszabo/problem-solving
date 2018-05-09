// BON APPETIT INPUT PARSING PROBLEM
// HackerRank
function bonAppetit(inp) {
    let input = inp.split('\n')
    let even = input[1].split(' ').reduce((sum, a) => { return sum + +a }, 0) / 2;
    let notEaten = input[1].split(' ')[+input[0].split(' ')[1]];
    return +input[2] === even ? notEaten / 2 : 'Bon Appetit';
}