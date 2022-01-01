
    var a = parseInt(prompt("Enter num1: "));
    var b = parseInt(prompt("Enter num2: "));
    var c = parseInt(prompt("Enter num3: "));
    
    if (a <= b && a <= c)
        alert( a + " is the smallest");
 
    else if (b <= a && b <= c)
        alert( b + " is the smallest");
 
    else
        alert( c + " is the smallest");
