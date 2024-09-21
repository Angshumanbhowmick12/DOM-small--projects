let boxes=document.querySelectorAll(".btn");
let reset=document.querySelector(".reset");
let showMsg=document.querySelector(".msg-container")
let msg=document.querySelector(".msg")
let newbtn=document.querySelector(".new-btn")


let trunX=true;
let count=0;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(trunX){
            box.innerText="X";
            trunX=false;
        }
        else{
            box.innerText="O";
            trunX=true;
        }

        box.disabled=true;
        count++;

        let isWinner=ChekWinner()

        if(!isWinner && count===9){
            drawGame()
        }

    })

})

const drawGame=()=>{
    msg.innerText="Game was Draw 😵";
    showMsg.classList.remove("hide")
    
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulation🚀🥳 ${winner} win the game `;
    showMsg.classList.remove("hide");
    disableBoxes();
}

const resetBtn=()=>{
    trunX=true;
    count=0;
    enableBoxes();
    showMsg.classList.add("hide");


}

const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText= "";
    }
}

const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}



const ChekWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText
        let pos2Val=boxes[pattern[1]].innerText
        let pos3Val=boxes[pattern[2]].innerText

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val == pos3Val){
                showWinner(pos1Val)
                return true;
            }
        }
         
    }
}

reset.addEventListener('click',resetBtn)
newbtn.addEventListener('click',resetBtn)