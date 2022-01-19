var num = parseInt(prompt("Enter your number"))
function manArr(n,callback1,callback2){
    var mul = callback1(n);
    var add = callback2(n);
    return [mul , add] ;
}
function mulBy4(x){
    return x * 4;
}
function add9(x){
    return x + 9;
}
var func = manArr(num,mulBy4,add9);
console.log('The multiplication and summation are ',func);
document.write('The multiplication and summation are ', func);

