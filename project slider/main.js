var sliderItem=Array.from(document.querySelectorAll(".slider-container img"));


var slidesCount=sliderItem.length;
var currentSlideIndex= 0;

var slideNumber=document.getElementById("slide-number");
var nextIndex=document.getElementById("next");
var prevIndex=document.getElementById("pref");

nextIndex.onclick=slideNext;
prevIndex.onclick=slidePrev;




var paginetionElement=document.createElement('ul');
paginetionElement.setAttribute('id','paginetion-ul');


for(var i=0; i<slidesCount; i++)
    {var paginetionItem=document.createElement("li");
        paginetionItem.setAttribute("data-item",i);
    
        paginetionItem.appendChild(document.createTextNode(i+1));
        paginetionElement.appendChild(paginetionItem);
    }
    document.getElementById("indicator").appendChild(paginetionElement);    
    
    
    
    var paginetionCreateUL=document.getElementById("paginetion-ul");
    

var sliderItUULem=Array.from(document.querySelectorAll('#paginetion-ul li'));
for(var i=0 ;i<sliderItUULem.length;i++)
{
    sliderItUULem[i].onclick=function(){
        currentSlideIndex=parseInt(this.getAttribute("data-item"));
        console.log(currentSlideIndex);     
       theChecker();
    }
}

theChecker();


function slideNext()
{
    if(nextIndex.classList.contains("disablied"))
{
    return false;
}
    
    else{
    currentSlideIndex++;
    theChecker();
}
}
function slidePrev()
{   if(prevIndex    .classList.contains("disablied"))
    {
        return false;
    }
        
        else{
        currentSlideIndex--;
        theChecker();
    }

}


function theChecker()
{
    slideNumber.textContent= 'slide #' +(currentSlideIndex) + 'of ' + (slidesCount);
    removeActive();

    sliderItem[currentSlideIndex].classList.add('active');
    
    paginetionCreateUL.children[currentSlideIndex ].classList.add('active');

    if (currentSlideIndex===0)

{
    prevIndex.classList.add('disablied');


}   else{
    prevIndex.classList.remove('disablied');

}

if (currentSlideIndex==slidesCount-1)

    {
        nextIndex.classList.add('disablied');
    
    
    }   else{
        nextIndex.classList.remove('disablied');
    
    }
    
}


function removeActive()
{
    // forEach  دى بتمشى على كل عنصر فى الارى و بتنفذ عمليه معينه
    sliderItem.forEach(
    (image)=>{               

  image.classList.remove('active');
    });
    
console.log(sliderItUULem);

    sliderItUULem.forEach(
        (image)=>{               
    
      image.classList.remove('active');
    });
}