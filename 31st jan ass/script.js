var arr = [2,7,11,15,14,5,9,6];
var target = 19;
for(let i = 0 ; i < arr.length ; i++){
    for (let j = i + 1; j <= arr.length - 1; j++){
        if(target == arr[i] + arr[j]){
            console.log([i,j]);
            document.write(`The indexes of values total = 19 is &nbsp;${[i,j]}`)
        }
    }
}