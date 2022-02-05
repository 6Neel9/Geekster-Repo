var restoreString = function(s, indices) {
    let arr = [];
    for (let i = 0; i  < s.length; i++) {
         arr[indices[i]] = s[i];
         console.log([indices[i]]) ;
         console.log(s[i]) ;
     }
    
    return arr.join('')
};
var g = restoreString("codeleet",[4,5,6,7,0,2,1,3]);
console.log(g);
