var img_arr = [
    'https://images.unsplash.com/photo-1516233758813-a38d024919c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1574068468668-a05a11f871da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1570527140771-020891229bb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1612024782955-49fae79e42bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
    'https://images.unsplash.com/photo-1574870111867-089730e5a72b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
];
var btn_ref = document.getElementById('initButton');

//This is correct. ✔
btn_ref.addEventListener('click', showImages);

function imageClicked(event) {
    var img_prev_r = document.getElementById("img_preview");
    img_prev_r.classList.remove("d-none");
    //classList.add("class_name");
    
    var img_r = img_prev_r.children[0];

    // img_r.src = img_arr[3];
    img_r.src = event.target.src;
    // console.log();
    var z  = document.getElementById("closeRev");
    z.addEventListener('click',function(){
        img_prev_r.classList.add("d-none")
    })
 

    
}




function showImages() {
    var container_ref = document.getElementById("gallery_container");

    container_ref.innerText = "";
    
    for(var i = 0; i < img_arr.length; i = i + 1) {
        var img_ref = document.createElement("img");
        img_ref.src = img_arr[i];
        img_ref.addEventListener('click', imageClicked);

        container_ref.appendChild(img_ref);
    }
}    