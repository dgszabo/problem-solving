// KEEP HELPER METHOD CHALLENGE
// HackReactor
function keep(array, keeper) {
    return filter(array, function(elem, index) {
      return elem === keeper;
    });
}

function each(coll, f) {
    if (Array.isArray(coll)) {
      for (let i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (let key in coll) {
        f(coll[key], key);
      }
    }
}
  
function filter(coll, predicate) {
    let acc = [];
    if(Array.isArray(coll)) {
      each(coll, function(element, key) {
        if (predicate(element, key)) {
          acc.push(element);
        }
      });
    } else if(typeof(coll) === 'object') {
      acc = {};
      each(coll, function(element, key) {
        if(predicate(element, key)) {
          acc[key] = element;
        }
      });
    }
    return acc;
}