let call=document.querySelectorAll(".cell");
var turn = document.getElementById("turn");
let Player1=1;
function Play(){
    console.log(this);
    if(Player1==1){
        this.innerHTML="X";
        Player1=0;
    }
    else{
        this.innerHTML="O";
        Player1=1;
    }

}

for (let i = 0; i < call.length; i++) {
    call[i].addEventListener("click", Play,{once:true});
    

}


