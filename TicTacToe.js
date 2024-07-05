let boxes = document.querySelectorAll(".Box")
let resetButton = document.querySelector("#Reset");
let newButton = document.querySelector("#newButton");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");
let turnO = true;

const winPattern = 
[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{

        if(turnO)
        {
            box.innerText = "O";
            turnO = false;
        }
        else
        {
            box.innerText = 'X';
            turnO = true;
        }
        // box.disabled = true;
        box.disabled = true;
        checkWinner();
    });
});

const resetGame = ()=>
{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disalbeBoxes = ()=>
{
    for(box of boxes)
    {
        box.disabled = true;
    }
}
const enableBoxes = ()=>
{
    for(box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
    
}

const showWinner = (Winner)=>
{
    msg.innerText = `Congratulations, Winner is ${Winner}`
    msgContainer.classList.remove("hide");
    disalbeBoxes();
}

const checkWinner = ()=>
{
    for (let pattern of winPattern)
    {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!="")
        {
            if (pos1val===pos2val && pos2val===pos3val)
            {
                showWinner(pos1val);
            }
        }
    }
}

newButton.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);