var num = parseInt(prompt("Enter number: "));
var count = 0;
for(var i= 0; i<num;i++){
    if(num%i == 0 && num/i == i){
        count = count + 1;
        break;
    }
}
if(count==1){
    alert("It's a perfect square");
}
else{
    alert("not perfect square");
}