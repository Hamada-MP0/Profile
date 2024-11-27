let theinput=document.querySelector(".get-repos input") ;
let getbutton =document.querySelector(".get-button") ;
let repoData = document.querySelector(".show-data");




getbutton.onclick=function()
{
    getrepos();
}



function getrepos()
{
   if(theinput.value=="")
   {
   repoData.innerHTML="<span>Please Enter Github Username</span>"

   }
   else{

    fetch(`https://api.github.com/users/${theinput.value}/repos`)
    .then(response=>response.json())
    .then(data=>{
     
        repoData.innerHTML="";

        data.forEach(repo=>{
            repoData.innerHTML+=`
            <div class="repo-box">
            <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
            <p>${repo.description}</p>
            <span class="repo-lang">${repo.language}</span>
            <span class="repo-stars">${repo.stargazers_count} Stars</span>
            </div>
            `
        })
    })
   }
}