function fibonacciIter(n) {
  let arr = [1,1]
  if(n < 2) {
  	return arr[n];
  }

  for(let i = 2; i <= n; i++) {
  	arr.push(arr[i - 1] + arr[i - 2]);
  }

  	return arr[n];
  }

  // fibonacciIter(1) // 1
  // fibonacciIter(5) // 8

  function fibRec(n) {
  	if(n < 2) {
          return 1;
      }

      return (
          fibRec(n - 1) +
          fibRec(n - 2)
      )
  }

  // fibRec(1) // 1
  // fibRec(5) // 8

  function fibRecMemo(n, arr = [1,1]) {
    if(n < 2) {
    return arr[n]
  }

  if(!arr[n]) {
    arr[n] = fibRecMemo(n - 1, arr) + fibRecMemo(n - 2, arr);
  }

  return arr[n];
  }


  // fibRecMemo(1) // 1
  // fibRecMemo(5) // 8
  // fibRecMemo(120) // 8