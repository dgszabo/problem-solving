// JIM AND THE ORDERS GREEDY ALGO PROBLEM
// HackerRank https://www.hackerrank.com/challenges/jim-and-the-orders/problem
function jimOrders(orders) {
  // mutate the orders array to reflect customer numbers and delivery times and sort it
  for(let i = 0; i < orders.length; i++) {
      orders[i][0] = orders[i][0] + orders[i][1];
      orders[i][1] = i + 1;
  }
  orders.sort((a,b) => b[0] - a[0])

  // create delivery order array
  let deliveryOrder = [];

  // get delivery order in each batch and add it to deliveryOrder
  while(orders.length > 0) {
      let batch = [];
      let deliveryTime = orders[orders.length - 1][0];

      for(let i = orders.length - 1; i >= 0; i--) {
          if(orders[i][0] === deliveryTime) {
              batch.push(orders.pop()[1])
          } else {
              break;
          }
      }

      batch.sort((a,b) => a - b);
      deliveryOrder = deliveryOrder.concat(batch);
  }

  // return deliveryOrder
  return deliveryOrder;
}