var form = document.querySelector(".form");
var search=document.getElementById("Country_name")


form.addEventListener("submit", submitForm);
function submitForm(geek) {
    geek.preventDefault();
    searchImg(search)
}

function showImg(){
    
    const key="xHXktgcsd1CrC58cgLbVrptJJSNnHcrnUV1gNZB5L8g"
    var url =`https://api.unsplash.com/photos/?client_id=${key}&per_page=10`
    fetch(url).then((some)=>some.json())
    .then((data)=>{
    console.log(data)
    for (var i=0;i<data.length;i=i++){
        var div =document.getElementById("container")
        var img=document.createElement("img");
        img.src=(data[i].urls.small);
        
        div.appendChild(img)
    }
}).catch((err)=>alert(err))
}





function searchImg(){
    console.log(search.value)
    const api_key="xHXktgcsd1CrC58cgLbVrptJJSNnHcrnUV1gNZB5L8g"
    var url=`https://api.unsplash.com/search/photos/?query=${search.value}&client_id=${api_key}&per_page=10`
    fetch(url).then((res)=>res.json())
    .then((data)=>{
    console.log(data)
    for (var i=0;i<data.results.length;i=i+1){
        var div =document.getElementById("container")
        var img=document.createElement("img");
        img.src=(data.results[i].urls.small)
        img.addEventListener('click', imageClicked)
        div.appendChild(img)
    }
}).catch((err)=>alert(err))
}


function imageClicked(event) {
    var img_prev_r = document.getElementById("img_preview");
    img_prev_r.classList.remove("d-none");
    
    var img_r = img_prev_r.children[0];

    img_r.src = event.target.src;
    var removeg =document.getElementById('remove');
    removeg.addEventListener("click", function(){
    img_prev_r.classList.add("d-none")
})
}