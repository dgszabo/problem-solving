// APPEND AND DELETE OPTIMAL STOPPING PROBLEM
// HackerRank https://www.hackerrank.com/challenges/append-and-delete/problem
function appendAndDelete(s, t, k) {
    let stem = false;

    while(k > 0) {
        if(!stem) {
            if(s !== t.slice(0,s.length)) s = s.slice(0,-1);
            if(!stem && s === t.slice(0,s.length)) stem = true;
        } else {
            s = s + t.slice(s.length, s.length + 1);
        }
    
        if(s === t) return 'Yes';

        k--;
    }
    
    return 'No'
}