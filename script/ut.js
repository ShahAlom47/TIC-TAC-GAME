

function player1Zero(player1, player2, target) {
    let pp = player1.classList.contains('border-cm')
    let pp2 = player2.classList.contains('border-cm')
    if (pp === true) {
        target.innerText = 0;
        setTimeout(()=>{
            player1.classList.remove('border-cm')
            player2.classList.add('border-cm')

        },500)
       


    }
    else if (pp2 === true) {
        target.innerText = "X";
        setTimeout(()=>{

            player2.classList.remove('border-cm')
            player1.classList.add('border-cm')
        },500)
       

    }

}

// call row and col 

function getRowCol(cls) {
    let xx = document.getElementsByClassName(cls);

    const makeArr = Array.from(xx)
    let item = makeArr.map(item => item.innerText)

    return item.join('')
}

// update score 
const updateScore= (id , value )=>{
   const scoreDis= document.getElementById(id)
   let distext= scoreDis.innerText=value


}

// reset game 

let resetGame = (button)=>{
    for (let btn of button){
    btn.innerText='';
    }



}