function firstDuplicate(a) {
    
    var i = -1, len = a.length, x, idx = [];
    
    while (x = a[i += 1], i < len) {
        if (!idx[x]) idx[x] = x; else return x;
    }
    
    return -1;
    
}


function rand(lim) { return Math.round(Math.random() * lim + 1); }

const Max = 10e5;

var arr = Array.apply(null, Array(Max)).map(() => rand(Max));

console.time('execution');
firstDuplicate([2, 1, 3, 5, 3, 2]);
console.timeEnd('execution');