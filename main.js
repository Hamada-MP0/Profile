
const nav =document.querySelector(".nav"),
    navlist = document.querySelectorAll("li"),
    totalNavlist=navlist.length,
    allSection =document.querySelectorAll(".section"),
    totalSection = allSection.length;
   
    for(let i=0;i<totalNavlist;i++)
    {
        const a=navlist[i].querySelector("a");
        a.addEventListener("click",function () {
          removeBackSection();
            for(let j=0;j<totalNavlist;j++)
            {
                if(navlist[j].querySelector("a").classList.contains("active"))
                {
                   addBackSection(j);
                }
                navlist[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
            if(window.innerWidth<1300)
            {
                asideSectionTogglerBtn();

            }


    })
    }
    function removeBackSection(){
    for(let i=0;i<totalSection;i++)
        {
            allSection[i].classList.remove("back-section");
        }
    }
    function addBackSection(index){
        allSection[index].classList.add("back-section");
    }
        function showSection(element)
    

        {

            for(let i=0;i<totalSection;i++)
            {
                allSection[i].classList.remove("active");
            }
            const target=   element.getAttribute("href").split("#")[1];

            document.querySelector("#"+target).classList.add("active")
        }
        function updateNav(element){
            for(let i=0;i<totalNavlist;i++)
            {
                navlist[i].querySelector("a").classList.remove("active");
                const target=   element.getAttribute("href").split("#")[1];
                if(target===navlist[i].querySelector("a").getAttribute("href").split[1])
                {
                    navlist[i].querySelector("a").classList.add("active");
                    

                }
            }
        }

        // document.querySelector(".hire-me").addEventListener("click",function(){
        //     const sectionIndex= this.getAttribute("data-section-index");
        //     showSection(this);
        //     updateNav(this);
        //     removeBackSection();
        //     addBackSection(sectionIndex);  

        // })

        const navTogglerBtn=document.querySelector(".nav-toggler"),
        aside=document.querySelector(".aside");
        navTogglerBtn.addEventListener("click",()=>
        {
            asideSectionTogglerBtn();
            
        })
        function asideSectionTogglerBtn()
        {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0; i<totalSection; i++) {
                allSection[i].classList.toggle("open");
            }
        }
        ///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
let subBtn = document.querySelector(".sub-btn");
let suRead = document.querySelector(".reading");
subBtn.onclick=function()
{
    suRead.classList.remove("hidden");
}/////////////////////////////////////////////////////////////////////////////


const buttons =document.querySelectorAll(".about-btn button");
const conten = document.querySelectorAll(".Conten");

buttons.forEach((button,index) =>{
        button.addEventListener("click",()=>
        {
         conten.forEach(contents =>contents.style.display="none");
         conten[index].style.display="block";
         buttons.forEach(btn => btn.classList.remove("active"));
         button.classList.add("active") 
        });
    
});