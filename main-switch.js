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

//////////////////////////////////////////////
let words=document.querySelectorAll(".word");
words.forEach((word)=>{
    let Letters=word.textContent.split("");
    word.textContent="";
    Letters.forEach((letter)=>{
    let span=document.createElement("span");
    span.textContent=letter;
    span.className="letter";
    word.append(span);
    });
}
);
let currentWordIndex=0;
let MaxWordIndex=words.length -1;
words[currentWordIndex].style.opacity="1";

let changeText=()=>{
    let Currentword= words[currentWordIndex];
    let nextWord= currentWordIndex===MaxWordIndex ? words[0]:words[currentWordIndex + 1];
    Array.from(Currentword.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className="letter out";

        },i * 80  );
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className="letter behind";
        setTimeout(()=>{
            letter.className="letter in";
        },340+ i * 80);
    });
    currentWordIndex= currentWordIndex===MaxWordIndex?0:currentWordIndex+1;

};

changeText();
setInterval(changeText,3000);



// Circle



const circles =document.querySelectorAll('.circle');

circles.forEach(elem=>{
    var dots =elem.getAttribute("data-dots");
    var marked=elem.getAttribute("data-percent");
    var percent=Math.floor(dots*marked/100);
    var points="";
    var rotate=360/dots;


    for(let i=0; i<dots; i++)
    {
        points +=`     <div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML=points;
    const pointsMarked=elem.querySelectorAll('.points');
    for(let i=0; i<percent;i++){
        pointsMarked[i].classList.add('marked');
    }
})
//////////////////////////////////////////////////////////////////
//protofile

