var url = "https://api2.binance.com/api/v3/ticker/24hr"
var data = fetch(url);
data.then(fullFill).then(secFull).catch(notFul);
function fullFill(arg){
    return arg.json();
}
function notFul(arg){
    console.log("api failed fetching")
}
function secFull(arg){
    console.log(arg)
    li.innerText = arg[0].symbol;
    li1.innerText = arg[0].priceChange;
    li2.innerText = arg[0].weightedAvgPrice;
    li3.innerText = arg[0]["openTime"]; 
}
body1 = document.getElementById("container");
var div = document.createElement("div");
var table = document.createElement("table");
var ol = document.createElement("ol");
var li = document.createElement("li");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");


body1.appendChild(div);
div.appendChild(table);
table.appendChild(ol);
ol.appendChild(li);
ol.appendChild(li1);
ol.appendChild(li2);
ol.appendChild(li3);
