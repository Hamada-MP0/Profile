let Allspan=document.querySelectorAll(".buttons span");
let results=document.querySelector(".results > span");
let theInput=document.getElementById("the-input");


Allspan.forEach((span)=>{
    span.addEventListener("click",(e)=>{
        if(e.target.classList.contains("Check-item")){
            checkItem();
        }


        if(e.target.classList.contains("Add-item")){
            additem();
        }


        if(e.target.classList.contains("Delete-item")){
            deleteItem();
        }


        if(e.target.classList.contains("Show-item")){
            Showitem();
        }
    })
})
console.log(results)

function ShawMassage()
{
   
        results.innerHTML='input cant be empty';
    
}


function checkItem(){

    if(theInput.value!=="")
    {
        if(localStorage.getItem(theInput.value))
        {
            results.innerHTML=` is already in the list Local Storage  <span> ( ${theInput.value}  )<span/>`;
        }
        else{
            results.innerHTML=` is not in the list Local Storage <span>(  ${theInput.value}  )<span/>`;  
        }


    }
    else{
        ShawMassage();
    }

    
}
function additem(){
    if(theInput.value!=="")
        {
            localStorage.setItem(theInput.value,theInput.value);
            results.innerHTML=` is added to the list Local Storage <span>(  ${theInput.value}  )<span/>`;
        theInput.value="";
        }
        else{
            ShawMassage();
        }
}
function deleteItem(){
    if(theInput.value!=="")
        {
            if(localStorage.getItem(theInput.value)){
                localStorage.removeItem(theInput.value);
                results.innerHTML=` is deleted from the list Local Storage <span>(  ${theInput.value}  )<span/>`;
                theInput.value="";
            }
            else{
                results.innerHTML=` is not in the list Local Storage <span>(  ${theInput.value}  )<span/>`;
            }
    
        }
        else{
            ShawMassage();
        }
}
function Showitem(){
   if(localStorage.length){
    let i=0;
    results.innerHTML="";
   for(let [key] of Object.entries(localStorage))   
   {
    results.innerHTML+=` <span class="keys">(  ${++i}   : (  ${key}  ) . <hr/> <span/>`;

   }
   }else{

    results.innerHTML="No items in the list Local Storage";
   }
}