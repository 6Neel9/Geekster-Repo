

    var a = prompt(parseInt("Enter num1: "));
    var b = prompt(parseInt("Enter num2: "));
    var c = prompt(parseInt("Enter num3: "));
    
    if (a < b && a < c)
        alert( a + " is the smallest");
 
    else if (b < a && b < c)
        alert( b + " is the smallest");
 
    else
        alert( c + " is the smallest");
