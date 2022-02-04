let counter_val = 300;
var run = 0;
let count = true;
let counter_id = setInterval(function(){
    var min = Math.floor(counter_val / 60);
    var sec = counter_val % 60;  
    min = min < 10 ? min : min;
    sec = sec < 10 ? "0" + sec : sec;
    counter_val -= 1 ;
    document.getElementById('seconds').innerHTML = min + "m " + sec + "s";
    if(counter_val<0){
        clearInterval(counter_id);
        count = false;
    }
},1000);
document.getElementById('stop').addEventListener('click', function(){
    clearInterval(counter_id);
    clearInterval(z)
    /* document.getElementById("stop").innerText = "start" */
    count = false;
})
document.getElementById('resume').addEventListener('click',function(){
    if(count == false){
        counter_id = setInterval(() => {
            var min = Math.floor(counter_val / 60);
            var sec = counter_val % 60;  
            min = min < 10 ? min : min;
            sec = sec < 10 ? "0" + sec : sec;
            counter_val -= 1;
            document.getElementById('seconds').innerHTML = min + "m " + sec + "s";
        }, 1000);
    }
    start()

})
function resetTime(){
        clearInterval(counter_id);
        count = false;
        if(run==0){
            counter_val = 300;
        }
        var min = Math.floor(counter_val / 60);
        var sec = counter_val % 60;  
        min = min < 10 ? min : min;
        sec = sec < 10 ? "0" + sec : sec;
        document.getElementById('seconds').innerHTML = min + "m " + sec + "s";  
        progress.style.width="0%";
        clearInterval(z)
    
}

var progress = document.getElementById("empty1");
var z=null;
progress.style.width="0%";
function start(){
    if(z){
        clearInterval(z);
    }
    
    z= setInterval(()=>{
        var w = String(progress.style.width).slice(0,-1);
        if(w>=100){
            clearInterval(z);
            return;
        }
        progress.style.width = `${parseInt(w)+1}%`;
        
    },3000);
}

start();

