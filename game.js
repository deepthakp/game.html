var time = 5;
var timerId;

function startTimer() {
  time = 5;
  timer.innerHTML = time;
  timerId = setInterval(() => {
    time--;
    if (time == 0) location.href = "./gameover.html?score=" + score;
    timer.innerHTML = time;
  }, 1000);
}

function resetTime(intervalId) {
  clearInterval(intervalId);
  startTimer();
}

startTimer();

const greaterThan=document.getElementById("greater-than")
const equalTo=document.getElementById("equal-to")
const lesserThan=document.getElementById("lesser-than")

const number1Box=document.getElementById("number1")
const number2Box=document.getElementById("number2")

var number1=Math.round(Math.random()*100)
var number2=Math.round(Math.random()*100)

number1Box.innerHTML=number1
number2Box.innerHTML=number2

var score=0

greaterThan.onclick=()=>{
  if(number1 > number2){
    score++
    resetTime(timerId)
  }
  else{
    location.href="./gameover.html?score=" + score
       }
       number1=Math.round(Math.random()*100)
 number2=Math.round(Math.random()*100)
 number1Box.innerHTML=number1
 number2Box.innerHTML=number2
  }
    equalTo.onclick=()=>{
      if(number1 == number2){
        score++
        resetTime(timerId)
      } else{
        location.href="./gameover.html?score=" + score
      
    }
    
 number1=Math.round(Math.random()*100)
 number2=Math.round(Math.random()*100)
 number1Box.innerHTML=number1
 number2Box.innerHTML=number2
  } 
  lesserThan.onclick=()=>{
    if(number1 == number2){
      score++
      resetTime(timerId)
    } else{
      location.href="./gameover.html?score=" + score
    
  }
  
number1=Math.round(Math.random()*100)
number2=Math.round(Math.random()*100)
number1Box.innerHTML=number1
number2Box.innerHTML=number2
} 

