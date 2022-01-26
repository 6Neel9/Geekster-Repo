var url = "https://api2.binance.com/api/v3/ticker/24hr"
fetch(url)
.then((sats) => sats.json())
.then((fullysat) => {
    console.log(fullysat);
    for (let i = 0; i < 99; i++){
        var body = document.getElementById("container");
        var div = document.createElement("div");
        var table = document.createElement("table");
        var ul = document.createElement("ul");
        var li = document.createElement("li");
        var li1 = document.createElement("li");
        var li2 = document.createElement("li");
        body.prepend(div);
        div.appendChild(table);
        table.appendChild(ul);
        ul.append(li,li1,li2);

        li.innerText = fullysat[i].symbol;
        li1.innerText = fullysat[i].count;
        li2.innerText = fullysat[i].openPrice;
    }
})