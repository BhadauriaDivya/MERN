let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");

let turnO=true;

const winPattern=[[0,1,2]
            ,[0,3,6]
            ,[0,4,8]
            ,[1,4,7]
            ,[2,5,8]
            ,[2,4,6]
            ,[3,4,5]
            ,[6,7,8]
        ]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        } 
        box.disabled=true; 
        checkWinner();
    }) 
})


const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Player ${winner}, won the game`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for (let i of winPattern){
        let p1val=boxes[i[0]].innerHTML;
        let p2val=boxes[i[1]].innerHTML;
        let p3val=boxes[i[2]].innerHTML;

        if(p1val != "" && p2val != "" && p3val != ""){
            if(p1val === p2val && p2val === p3val){
                showWinner(p1val);
            }
        }
    }
}


newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);