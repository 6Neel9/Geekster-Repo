var all_about = [
    {
        id: 1,
        about : "I am a Google Software Engineer!!.🎨"
    },
    {
      id: 2,
      about : "I am a Amazon Software Engineer!!.🎭"
  },
  {
      id: 3,
      about : "I am a Paypal Software Engineer!!.🎯"
  },      {
      id: 4,
      about : "I am a Zomato Software Engineer!!.🤡"
  }
]
   //For about section changing....
   
    var id = 0;
    function setId(){
      console.log("'set id is working");
      localStorage.setItem("id",id);
    }
  
    var change_sub = document.getElementById("extra");
    console.log(parseInt(localStorage.getItem("id")));
    change_sub.innerText = all_about[parseInt(localStorage.getItem("id"))].about;