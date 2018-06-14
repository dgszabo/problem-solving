// JUMP GAME RECURSION PROBLEM
// Rithm School
function jumpGame(arr, cur = 0, vis = new Set()){
    // winning base case
    if(arr.length === 0 || cur === arr.length - 1 || cur + arr[cur] >= arr.length - 1) return true;
    
    // loosing base case
    if(vis.size >= arr.length - 1 || arr[cur] === 0) return false;
  
    vis.add(cur);
    return (
      (cur - arr[cur] > 0 && jumpGame(arr, cur - arr[cur], vis)) ||
      (cur + arr[cur] < arr.length - 1 && jumpGame(arr, cur + arr[cur], vis))
    )
}