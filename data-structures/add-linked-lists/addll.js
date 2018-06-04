class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next || null;
  }

  asRevString() {
    const out = [];
    let n = this;

    while (n) {
      out.push(n.data);
      n = n.next;
    }

    return out.reverse().join("");
  }
}

function addLinkedLists(l1, l2) {
  function getNum(node) {
      let str = '';

      while(node) {
          str += node.data;
          node = node.next;
      }

      return str;
  }

  let numStr1 = getNum(l1).split('').reverse().join('');
  let numStr2 = getNum(l2).split('').reverse().join('');

  return new Node(parseInt(numStr1) + parseInt(numStr2));

  let last;
  let newNumStr = (parseInt(numStr1) + parseInt(numStr2)).toString();

  for(let i = newNumStr.length - 1; i >= 0; i--) {
      let newNode = new Node(parseInt(newNumStr[i]));
      if(last) {
          newNode.next = last;
      }
      last = newNode;
  }

  return last;
}

let l1, l2;

l1 = new Node(1);
l2 = new Node(2);
console.log(addLinkedLists(l1, l2).asRevString(), "3");

l1 = new Node(3, new Node(2, new Node(1)));
l2 = new Node(6, new Node(5, new Node(4)));
console.log(addLinkedLists(l1, l2).asRevString(), "579");

l1 = new Node(4, new Node(4, new Node(1)));
l2 = new Node(6, new Node(5, new Node(4)));
console.log(addLinkedLists(l1, l2).asRevString(), "600");

l1 = new Node(3, new Node(2, new Node(1)));
l2 = new Node(9, new Node(8));
console.log(addLinkedLists(l1, l2).asRevString(), "212");
