// COIN CHANGE DYNAMIC PROGRAMING PROBLEM
function coinChange(coins, amount) {
  // initialize the combinations array
  let combinations = Array.apply(null, Array(amount + 1)).map(el => 0);
  combinations[0] = 1;

  // build up the combinations to reach each amount in array
  for(let i = 0; i < coins.length; i++) {
      for(let j = coins[i]; j < combinations.length; j++) {
          combinations[j] += combinations[j - coins[i]];
      }
  }

  return combinations.pop();
}

// coinChange([5,2,1], 5) // 4
// coinChange([1,2,5], 12) // 13
// coinChange([1,2,5,10,20], 12) // 15