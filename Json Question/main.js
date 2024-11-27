

let countSpan=document.querySelector(".Count span");
let bultSpanCountainer=document.querySelector(".bullets .spans");
let SubmitButton=document.querySelector(".Submit-button");
let quizrea=  document.querySelector(".quiz-area")
let countDownElement = document.querySelector(".CountDown");

let current =0;
let rightAnswer=0;
let countdowninterval;


const questionsArray = [];


    let question="" ;
    let correctAnswer="" ;
    
 
    let userAnswer="" ;




function GetQuestion()
{
    let myquestion =new XMLHttpRequest();
    myquestion.open("GET","htmlQuestion.json",true);
    myquestion.send();
    myquestion.onreadystatechange=function()
    {
        if(this.readyState==4 && this.status==200)
        {
            let myjson = JSON.parse(this.responseText);
            createBullies(myjson.length);

            addQuestionData(myjson[current],myjson.length);
            countDown(1,myjson.length);
            SubmitButton.onclick=function(){
                let theRightAswer=myjson[current].right;
               correctAnswer=theRightAswer;
                current++;
                checkAnswer(theRightAswer,myjson.length);
                quizrea.innerHTML="";
                document.querySelector(".Answer-area").innerHTML="";
                addQuestionData(myjson[current],myjson.length);
                Handlebultes();
                clearInterval(countdowninterval);
                countDown(1,myjson.length);
                showResults(myjson.length);
                
 
                    
                  
                 

            }
   }
    }
}
GetQuestion();


function createBullies(num)
{
    countSpan.innerHTML=num;


    for(let i=0;i<num;i++){
        let theBult=document.createElement("span");
        bultSpanCountainer.appendChild(theBult);
        if(i==0){
            theBult.classList.add("on");
        }

    }
}


 function addQuestionData(obj,count){
  if(current<count)
  {
    let questionTitle=document.createElement("h2");
    let questionText =document.createTextNode(obj['title']);
  
   question=obj['title'];
    questionTitle.appendChild(questionText);
    quizrea.appendChild(questionTitle);

    for(let i=1;i<=4;i++)
    {
        let minDiv=document.createElement("div");
        minDiv.className = "answer";

        let inputRadio=document.createElement("input");
        inputRadio.name="question";
        inputRadio.type="radio";
        inputRadio.id=`answer_${i}`;
        inputRadio.dataset.answer=obj['answer_'+i];

        let label=document.createElement("label");
        label.htmlFor=`answer_${i}`;
        let labeltext=document.createTextNode(obj['answer_'+i]);
        label.appendChild(labeltext);
        minDiv.appendChild(inputRadio);
        minDiv.appendChild(label);
        document.querySelector(".Answer-area").appendChild(minDiv);

        document.querySelector(".Answer-area").appendChild(minDiv);
    }
   
  }
    
 }

 function checkAnswer(ANS,count)
 {

    let answers=document.getElementsByName("question");
    let theChoseAswer;
    for(let i=0;i<answers.length;i++){
        if(answers[i].checked){
            theChoseAswer=answers[i].dataset.answer;
        }
    }
    if(ANS===theChoseAswer){
        rightAnswer++;
    }
    userAnswer=theChoseAswer;

    questionsArray.push({
        question: question,
        userAnswer: userAnswer,
        correctAnswer: correctAnswer
    });

 }
 function Handlebultes()
 {
    let bults=document.querySelectorAll(".bullets span");
   let arrayofSpan=Array.from(bults);
   arrayofSpan.forEach((span,index)=>{
       if(index===current){
           span.classList.add("on");
       }
   })
 }

 function showResults(count){
    if(current===count){
        quizrea.remove();
        document.querySelector(".Answer-area").remove();
        document.querySelector(".Submit-button").remove();
        document.querySelector(".bullets").remove();
        document.querySelector(".hiden").style.display="block";

        if(rightAnswer>count/2&&rightAnswer<count){
            document.querySelector(".results").innerHTML=` <span class="good">Good</span> , <span class="right">${rightAnswer}  </span>  From <span class="count">  ${count}</span>   `;
        }   else if(rightAnswer===count)
        {
            document.querySelector(".results").innerHTML=`<span class="perfect">Perfect</span> , <span class="right">${rightAnswer}  </span>  From <span class="count">  ${count}</span> `;
        }
        else{
            document.querySelector(".results").innerHTML=`<span class="bad">Bad</span> , <span class="right">${rightAnswer}  </span> From  <span class="count">  ${count}</span> `;
        }
      
    }
  
 }


 function countDown(duration,count){
    if(current<count){
        let minute,second;
        countdowninterval=setInterval(function(){
            minute=parseInt(duration/60);
            second=parseInt(duration%60);

            minute=minute<10?`0${minute}`:minute;
            second=second<10?`0${second}`:second;
            countDownElement.innerHTML=`${minute} : ${second}`;

           if(--duration<0){
            clearInterval(countdowninterval);
            SubmitButton.click();
           }
        },1000);
    }
 }



//////////////////////////////////////////////////////////////////////////increaseec 
let view =document.querySelector('.Submit-viewanswer');
let Answer_area2 =document.querySelector('.Answer-area2');
let ss2=document.querySelector('.Submit-viewanswer');
let tryAgain =document.querySelector('.Submit-Tryagain');
tryAgain.onclick=function(){

    location.reload();
}

let counter2=0;

view.onclick=function(){
    view.innerHTML="the next";
    document.querySelector(".quiz-area2").innerHTML="";
    Answer_area2 .innerHTML="";
    if(counter2<questionsArray.length)
    {
        addViewAnswer(counter2);
    }
 
     counter2++;
    if(counter2==questionsArray.length)
    {
        view.innerHTML="View Answers";
        document.querySelector(".quiz-area2").innerHTML="";
        Answer_area2 .innerHTML="";
        counter2=0;
    }
    // addViewAnswer();
  
   
    // docment.querySelector(".Answer-area2").appendChild(answerTitle);
    
}
// ss2.onclick=function(){
            
//     console.log(counter2);
//     console.log(questionsArray.length);
//     counter2=0;
//     view.click();

// }
function addViewAnswer(counte){
    let questionTitle=document.createElement("h2");
    let questionText =document.createTextNode(questionsArray[counte].question +"?");
   

    questionTitle.appendChild(questionText);
    document.querySelector(".quiz-area2").appendChild(questionTitle);

    let answerTitle=document.createElement("h3");
    let answerText =document.createTextNode( "Your answer  < "+questionsArray[counte].userAnswer +" >");
    let minDiv=document.createElement("div");
  
    answerTitle.appendChild(answerText);
    minDiv.appendChild(answerTitle);
  Answer_area2.appendChild(minDiv);
  let rightc=document.createElement("h3");

  let rightcText =document.createTextNode(questionsArray[counte].correctAnswer );
  let minDiv2=document.createElement("div");
  minDiv2.className="right-answer"
  rightc.appendChild(rightcText);
  minDiv2.appendChild(rightc); 
Answer_area2.appendChild(minDiv2); 

if(questionsArray[counte].correctAnswer ===questionsArray[counte].userAnswer)
{
    minDiv.className="right-answer"
}
else{
    minDiv.className="wrong-answer"
}


    }


 

    questionsArray.forEach((entry, index) => {
        console.log(`السؤال ${index + 1}: ${entry.question}`);
        console.log(`إجابتك: ${entry.userAnswer}`);
        console.log(`الإجابة الصحيحة: ${entry.correctAnswer}`);
        console.log("===============================");
    });