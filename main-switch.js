const StyleSwitchToggler=document.querySelector(".style-Switcher-toggler");
StyleSwitchToggler.addEventListener("click",()=>{
    document.querySelector(".style-Switcher").classList.toggle("open");
})
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-Switcher").classList.contains("open")){
        document.querySelector(".style-Switcher").classList.remove("open");
    }
})

const AlternateStyles=document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    AlternateStyles.forEach((style)=>{
        if(color===style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}
//////////////////////////////////////////////////////////////////////////
const daynight=document.querySelector(".day-night ");
daynight.addEventListener("click",()=>{
    daynight.querySelector("i").classList.toggle("fa-sun");
    daynight.querySelector("i").classList.toggle("fa-moon");

    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        daynight.querySelector("i").classList.add("fa-sun");
    }
    else{
        daynight.querySelector("i").classList.add("fa-moon");
    }
})
