var n = prompt("Enter a number: ");
count = 0
for(var i = 2; i <= n/2; i++){
    if(n%i == 0){
        count = count + 1
        
    }
}    
    if(count==0){
        alert("it's a prime number");
    }
        
    else{
        alert("it's not a prime number")
    }    
    



