const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn=document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg= document.querySelector(".msg")

    for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    select.append(newOption);
    if (select.name==="from" && currCode==="USD"){
        newOption.selected="selected";}
   else if (select.name==="to" && currCode==="INR"){
        newOption.selected="selected";}
}

select.addEventListener("change",(evt)=>
{
  updateflag(evt.target);
})
}

let updateflag=(element)=>{
  let currCode=element.value;
  let countryCode=countryList[currCode];
  let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`
  let img=element.parentElement.querySelector("img");
  img.src=newSrc;
}

btn.addEventListener("click",async(evt)=>{
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtVal=amount.value;

  if (amtVal=="" || amtVal<1){
    // amtVal=1;
    amount.value="1";
  }

const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
let response=await fetch(URL);
let data = await response.json();
console.log(data);
let rate=data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
let finAmount=amtVal*rate;
msg.innerText=`${amtVal}${fromCurr.value}=${finAmount}${toCurr.value}`
});