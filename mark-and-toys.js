// MARK AND TOYS GREEDY ALGO PROBLEM
// HackerRank https://www.hackerrank.com/challenges/mark-and-toys/problem
function maximumToys(prices, k) {
    prices.sort((a,b) => b - a);
    let toyCount = 0;

    while(k >= prices[prices.length - 1]) {
        let popped = prices.pop();

        k -= popped;
        toyCount++;
    }

    return toyCount;
  }
