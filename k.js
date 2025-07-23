let boxes = document.querySelectorAll(".box");
let button = document.querySelector("#button");
let newbutton = document.querySelector("#new");
let message = document.querySelector(".message");
let msg = document.querySelector("#msg");


let turnO=true;//playerX,playerO 
// document.querySelector(".check").innerHTML="hello"


const winpatterns=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];
const ResetGame =() =>{
  turnO = true;
  enabledboxes();
  message.classList.add("hide");
}

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    console.log("box was clicked");
   if(turnO){
    //playerO
    box.innerText="O";
    turnO = false;
   }else{
    //playerX
    box.innerText="X";
    turnO = true;
   }
box.disabled = true;
 
checkwinner();
  });
});

const disabledboxes = ()=>{
  for(let box of boxes){
    box.disabled = true;
  }
};
const enabledboxes = ()=>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText="";
  }
};


const showwinner = (winner) => {
  msg.innerText = `Congratulation,winner is ${winner}`;
  message.classList.remove("hide");
  disabledboxes();
};

const checkwinner =()=>{
  for(let pattern of winpatterns){
let pos1val=boxes[pattern[0]].innerText;
let pos2val=boxes[pattern[1]].innerText;
let pos3val=boxes[pattern[2]].innerText;

if(pos2val !=""&& pos2val != ""&&pos3val!=""){
  if(pos1val===pos2val &&pos2val===pos3val);{
    console.log("winner",pos1val);
  showwinner(pos1val);
  }
  }
}
};
button.addEventListener("click",ResetGame);
newbutton.addEventListener("click",newGame);


