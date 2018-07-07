// ROADS AND LIBRARIES GRAPH PROBLEM
// HackerRank https://www.hackerrank.com/challenges/torque-and-development/problem
function roadsAndLibraries(n, c_lib, c_road, cities) {
  // create the city set
  let citySet = new Set();
  for(let i = 0; i < cities.length; i++) {
      citySet.add(cities[i][0]);
      citySet.add(cities[i][1]);
  }
  let cityNumber = citySet.size;

  // case when libraries are cheaper or as expensive as roads
  if(c_lib <= c_road) {
      return n * c_lib;
  }

  // case when libraries are more expensive than roads
  // create association table
  let associationTable = {};
  for(let i = 0; i < cities.length; i++) {
      if(!associationTable[cities[i][0]]) {
          associationTable[cities[i][0]] = [];
      }
      if(!associationTable[cities[i][1]]) {
          associationTable[cities[i][1]] = [];
      }
  }
  for(let i = 0; i < cities.length; i++) {
      associationTable[cities[i][0]].push(cities[i][1]);
      associationTable[cities[i][1]].push(cities[i][0]);
  }

  // create visited cities var and clusters var
  let clusters = 0;

  // identify how many clusters of cities are there
  while(citySet.size > 0) {
      // build up the first batch of connected cities
      clusters++;
      let cluster = getCluster(associationTable, Array.from(citySet)[0])

      // remove the cluster from the citySet
      for(let city of cluster) {
          citySet.delete(city);
      }
  }

  // count/return libraries and roads needed
  return ((n - cityNumber) * c_lib) + (clusters * c_lib) + ((cityNumber - clusters) * c_road);
}

// helper function to get a city cluster
function getCluster(associationTable, start, cluster = new Set()) {
  cluster.add(start);

  for(let i = 0; i < associationTable[start].length; i++) {
      if(!cluster.has(associationTable[start][i])) {
          getCluster(associationTable, associationTable[start][i], cluster);
      }
  }

  return cluster;
}

// roadsAndLibraries(3, 2, 1, [[1,2],[3,1],[2,3]]) // 4
// roadsAndLibraries(6, 2, 5, [[1,3],[3,4],[2,4],[1,2],[2,3],[5,6]]) // 12
// roadsAndLibraries(6, 2, 1, [[1,3],[3,4],[2,4],[1,2],[2,3],[5,6]]) // 8
// roadsAndLibraries(9, 91, 84, [[8, 2], [2, 9]]) // 805
// roadsAndLibraries(8, 10, 55, [[6, 4], [3, 2], [7, 1]]) // 80
