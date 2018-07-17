// MINIMUM LOSS SEARCH PROBLEM
// HackerRank https://www.hackerrank.com/challenges/minimum-loss/problem
function minimumLoss(prices) {
  let minLoss = - Infinity;

  for(let i = 0; i < prices.length - 1; i++) {
      for(let j = i + 1; j < prices.length; j++) {
          if(prices[j] - prices[i] < 0 && prices[j] - prices[i] > minLoss) {
              minLoss = prices[j] - prices[i];
          }
      }
  }

  return Math.abs(minLoss);
}
