var num = 0;
var counter = document.getElementById('counter');
var increase = document.querySelector(".increase");
var decrease = document.querySelector(".decrease");
var z = null;
increase.addEventListener("click",function(){
    //clearInterval(dec)
    if(z){
        clearInterval(z)
        z = setInterval(()=>{
            counter.innerText ++;
        },1000)
    }
    else{
        z = setInterval(()=>{
            counter.innerText ++;
        },1000)
    }

})
decrease.addEventListener("click",function(){
    if(z){
        clearInterval(z)
        z = setInterval(()=>{
            counter.innerText --;
        },1000)
    }
    else{
        z = setInterval(()=>{
            counter.innerText --;
        },1000)
    }
})



