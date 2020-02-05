let call = document.querySelectorAll(".cell");
var turn = document.getElementById("turn");
let Player1 = 1;
let moveCount = 0;
//Start a game where first Player enter x and second player enter o

function Play() {
    console.log(this);

    if (Player1 == 1) {
        this.innerHTML = "X";
        Player1 = 0;
        turn.innerHTML = "O Now";

    } else {
        this.innerHTML = "O";
        Player1 = 1;
        turn.innerHTML = "X  Now";

    }
    moveCount++;
    //Call function getWinner
    getWinner();
}

//to click Event X or O
for (let i = 0; i < call.length; i++) {
    call[i].addEventListener("click", Play, {
        once: true
    });


}
 ///function Determine the winner
 // to select and display the winner message
function selectWinnerBoxes(b1, b2, b3) {
    b1.classList.add("win");
    b2.classList.add("win");
    b3.classList.add("win");
    turn.innerHTML = b1.innerHTML + " winner";
    turn.style.fontSize = "40px";
//Call function remove1
    remove1();

}
//When a player wins the stops click event
function remove1() {
    for (let i = 0; i < call.length; i++) {
        call[i].removeEventListener("click", Play);
    }
}
//It allows to start a new game
function replay() {

    for (var i = 0; i < call.length; i++) {
        call[i].classList.remove("win");
        call[i].innerHTML = "";
        call[i].addEventListener("click", Play, {
            once: true
            
        });
        moveCount = 0;

    }   

}
///function Determine the winner
function getWinner() {
////  declare variable to call and select the  id for the td
    var box1 = document.getElementById("0"),
        box2 = document.getElementById("1"),
        box3 = document.getElementById("2"),
        box4 = document.getElementById("3"),
        box5 = document.getElementById("4"),
        box6 = document.getElementById("5"),
        box7 = document.getElementById("6"),
        box8 = document.getElementById("7"),
        box9 = document.getElementById("8");
//Condition Check the winner

    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML) {
        //Call function remove1
        selectWinnerBoxes(box1, box2, box3);

    } else if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) {
        selectWinnerBoxes(box4, box5, box6);
    } else if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) {
        selectWinnerBoxes(box7, box8, box9);
    } else if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) {
        selectWinnerBoxes(box1, box4, box7);
    } else if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) {
        selectWinnerBoxes(box2, box5, box8);
    } else if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) {
        selectWinnerBoxes(box3, box6, box9);
    } else if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) {
        selectWinnerBoxes(box1, box5, box9);
    } else if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) {
        selectWinnerBoxes(box3, box5, box7);
        //Condition Check the tie
    } else if (moveCount === 9) {
        turn.innerHTML = "Tie";
   
    }

}