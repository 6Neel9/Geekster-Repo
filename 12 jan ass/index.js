function voteSystem(){
    let like = document.getElementById('vote');
    like.innerText = parseInt(like.innerText) + 1; 
}
function voteDislike(){
    let dislike = document.getElementById('vote');
    dislike.innerText = parseInt(dislike.innerText) - 1;
}