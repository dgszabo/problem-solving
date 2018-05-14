// TIME IN WORDS CONDITION PROBLEM
// HackerRank
function timeInWords(h, m) {
    let numbers = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
        6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
        11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 16: 'sixteen',
        17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty',
    }
    let quarters = { 15: 'quarter', 30: 'half'}
    if(!m) {
        return numbers[h] + ' o\' clock';
    }
    
    let str = '';
    let min = m <= 30 ? m : 60 - m;

    if(quarters[min]) {
        str += quarters[min];
    } else if(min === 1) {
        str += numbers[min] + ' minute';
    } else if(numbers[min]) {
        str += numbers[min] + ' minutes';
    } else {
        let second = min.toString()[1];

        str += 'twenty ' + numbers[second] + ' minutes'
    }

    return m <= 30 ? str + ' past ' + numbers[h] : str + ' to ' + numbers[h + 1];
}