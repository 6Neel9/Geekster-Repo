var n=parseInt(prompt("Enter number"));
if(n==0 || n==1){
    console.log("can't find")
}
else {
    console.log(2);
}

for(var i = 3; i <=n; i++){
    if(i%2 != 0){
        console.log(i);
    }
}