const n = [ [4, 3, 2, 4], 
          [9, 1, 5, 6], 
          [2, 7, 9, 8], 
          [8, 5, 2, 0], ];
function arrayAdd(){
    let sum = 0;
    for(var i= 0; i< n.length; i++){
        for(var j=0; j<n[i].length;j++){
            if(i===j){
                sum += n[i][j];
            }
        }
    }
    return sum;
}
var add = arrayAdd();
console.log("The sum of elements of diagonal", add);
document.write("The sum of elements of diagonal =", add);

