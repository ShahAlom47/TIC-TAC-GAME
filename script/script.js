let score1=0;
let score2=0;

let button= document.querySelectorAll(".btnn")

let player1= document.getElementById('player1')
let player2= document.getElementById('player2')

for (let btn of button){

    btn.addEventListener("click", function(e){

        let target = e.target
        if(target.innerText===""){
            player1Zero(player1,player2,target)
        }
        gamePoint();
    })
}


// game point 

function gamePoint() {

    const row1 = getRowCol('row1');
    const row2 = getRowCol('row2');
    const row3 = getRowCol('row3');

    const col1 = getRowCol('col-1');
    const col2 = getRowCol('col-2');
    const col3 = getRowCol('col-3');

    const corLR = getRowCol('cor-lr');
    const corRL = getRowCol('cor-rl');


    if (row1 === "XXX" || row2 === "XXX" || row3 === "XXX" || corLR === "XXX" || corRL === "XXX" || col1 === "XXX" || col2 === "XXX" || col3 === "XXX") {
       setTimeout(()=>{
        score2++
        updateScore('score2',score2);
        resetGame(button)
       },500)
        
    }
    else if (row1 === "000" || row2 === "000" || row3 === "000" || corLR === "000" || corRL === "000"|| col1 === "000" || col2 === "000" || col3 === "000") {
      
        setTimeout(()=>{
            score1++
            updateScore('score1',score1);
            resetGame(button) 
           },500)
      
    }


}