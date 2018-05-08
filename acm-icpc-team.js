// ACM ISPS TEAM COMBINATORICS PROBLEM
// HackerRank
function acmTeam(topic) {
    // mapping through the input array to create arrays of bits
    let newTopic = topic.map(el => el.split(''));

    // reducing all possible combinations to the maximum topics per pair and their count
    let max = 0;
    let count = 0;

    for(let j = 0; j < newTopic.length; j++) {
        for(let k = j + 1; k < newTopic.length; k++) {
            let tempMax = 0;
            for(let l = 0; l < newTopic[j].length; l++) {
                if(newTopic[j][l] === '1' || newTopic[k][l] === '1') {
                    tempMax++;
                }
            }
            if(tempMax > max) {
                max = tempMax;
                count = 1;
            } else if(tempMax === max) {
                count++;
            }
        }
    }
    
    return [max, count];
}