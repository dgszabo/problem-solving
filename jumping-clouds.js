// JUMPING CLOUDS PROBLEM from HackerRank
// https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem
// using a cyclical linked list
function jumpingOnClouds(c, k) {
    function Node(val) {
        this.val = val;
        this.next = null;
    }
    
    let head = new Node(c[0]);
    let cur = head;
    
    for(let i = 1; i < c.length; i++) {
        let newNode = new Node(c[i]);
        cur.next = newNode;
        cur = newNode;
        
        if(i === c.length - 1) {
            newNode.next = head;
        }
    }
    
    let e = 100;
    cur = head;
    for(let j = 0; j < k; j++) {
        cur = cur.next;
    }
    e -= 1 + 2 * cur.val;
    
    while(cur !== head) {
        for(let j = 0; j < k; j++) {
            cur = cur.next;
        }
        e -= 1 + 2 * cur.val;
    }
    
    return e;
}