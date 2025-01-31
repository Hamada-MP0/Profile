
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
let readMoreBtn = document.querySelector(".sub-btn .btn"); // الحصول على الزر مباشرة

subBtn.onclick = function() {   
    suRead.classList.toggle("hidden");

    // التحقق من النص الحالي وتحديثه
    if (readMoreBtn.textContent !== "Read Less") {
        readMoreBtn.textContent = "Read Less";
    } else {
        readMoreBtn.textContent = "Read More";
    }
};
/////////////////////////////////////////////////////////////////////////////


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

/////////////*****************/////////////////////// */
// Dark mode
document.addEventListener('DOMContentLoaded', function () {
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;

    // تحقق من الإعدادات المحفوظة (إذا كان المستخدم قد اختار الوضع الدارك مسبقًا)
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('shadow-dark');
        themeSwitcher.checked = true;
    }

    // إضافة حدث التبديل
    themeSwitcher.addEventListener('change', function () {
        if (this.checked) {
            body.classList.add('shadow-dark');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('shadow-dark');
            localStorage.setItem('theme', 'light');
        }
    });
});

//////////////////////////////////////
let Skills =document.querySelector(".SK");
Skills.addEventListener("click",()=>{
  
}
);















const butPr =document.querySelectorAll(".fillter-buttons button");
const portBox = document.querySelectorAll(".port-box");




butPr.forEach((button) =>{
        button.addEventListener("click",()=>
        {
            portBox.forEach(contents =>contents.style.display="none");
            portBox.style.display="block";
         butPr.forEach(btn => btn.classList.remove("active"));
         button.classList.add("active") 
        });
    
});







document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.fillter-buttons .btn');
    const portfolioItems = document.querySelectorAll('.port-box');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // إزالة الفئة "active" من جميع الأزرار
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // إضافة الفئة "active" للزر الذي تم النقر عليه
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block'; // عرض العنصر
                } else {
                    item.style.display = 'none'; // إخفاء العنصر
                }
            });
        });
    });
});