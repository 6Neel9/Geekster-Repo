var like_btn = document.querySelector('.img2');
var counter = document.querySelector('.count');
like_btn.addEventListener('dblclick',function(){
    totallikes++;
    if(totallikes>=0){
        counter.value = totallikes + "Likes";
    }
    else{
        counter.value = String(totallikes +" Dislikes").slice(1);
    }
})
var dislike = document.querySelector('.love');
var totallikes = 0;
dislike.addEventListener('click', function(){
    if(totallikes <= 0){
        totallikes--;
       counter.value = String(totallikes +" Dislikes").slice(1);
    }
    else{
        totallikes--;
        counter.value = totallikes + "Likes" ;
    }
    console.log(parseInt(counter.value));
})
var img_ref = document.querySelectorAll('.img2');
var heart = document.querySelectorAll('.love');
for(let i = 0; i < img_ref.length; i++){
    img_ref[i].addEventListener('dblclick',function(){
        if(totallikes>=0){
            heart[i].innerText = "💙"
        }
    });

}
for(let i = 0; i < heart.length; i++){
    heart[i].addEventListener('click',function(){
        if(totallikes<=0){
            heart[i].innerText= "🤍";
        }
        
    });
}

