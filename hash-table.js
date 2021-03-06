// HASHTABLE BASIC IMPLEMENTATION
class HashTable {
  constructor(n) {
      this.table = Array(n);
  }

  put(key, val) {
      if(!this.table[hash(key)]) {
          this.table[hash(key, this.table.length)] = { [key]: val };
      } else {
          this.table[hash(key, this.table.length)][key] = val;
      }
  }

  get(key) {
      let val = this.table[hash(key, this.table.length)][key];
      return val;
  }
}

function hash(key, len) {
  let sum = 0;

  for(let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
  }

  return sum % len;
}