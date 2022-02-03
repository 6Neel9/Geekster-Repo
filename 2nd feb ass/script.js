let counter_val = 301;
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

}