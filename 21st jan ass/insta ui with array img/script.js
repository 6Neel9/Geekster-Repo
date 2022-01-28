var img_cont = ["https://images.pexels.com/photos/9056836/pexels-photo-9056836.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "https://images.pexels.com/photos/2418664/pexels-photo-2418664.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://images.pexels.com/photos/2568539/pexels-photo-2568539.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                ]
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
/*         if(totallikes>=0){
            heart[i].innerText = "💙"
        } */
        heart[i].innerText = "💙"
    });

}
for(let i = 0; i < heart.length; i++){
    heart[i].addEventListener('click',function(){
/*         if(totallikes<=0){
            heart[i].innerText= "🤍";
        } */
        heart[i].innerText= "🤍";
        
    });
}

var change_img = document.getElementById("id1")
change_img.src = img_cont[0]
var change_img1 = document.getElementById("id2")
change_img1.src = img_cont[1]
var change_img2 = document.getElementById("id3")
change_img2.src = img_cont[2]

