

document.querySelector(".pikachu-img").addEventListener("click", function(){

    var pikachu = new Audio("sounds/pikachu.mp3");
    pikachu.play();
});

document.querySelector(".sonic-img").addEventListener("click", function(){

    var sonic = new Audio("sounds/sonic.mp3");
    sonic.play();
});



var playButton = document.querySelector("button");
document.querySelector("button").addEventListener("click",function(){
  diceAnimate();
  rollIt();
  buttonAnimation(playButton);

});

document.querySelector(".play-button").addEventListener("click" , function(){
  var diceRoll = new Audio("sounds/dice.mp3");
  diceRoll.play();
});



var dice1 = document.querySelectorAll(".dice")[0];
var dice2 = document.querySelectorAll(".dice")[1];

dice1.addEventListener("animationend", endAnimation);
dice2.addEventListener("animationend", endAnimation);

function endAnimation(){
  dice1.style.animation = "none";
  dice2.style.animation = "none";
}

function rollIt(){

  var randomNumber1 = Math.floor(Math.random()*6 + 1);
  var randomDiceImage1 = "images/dice"+randomNumber1+".png";
  var dice1 =  document.getElementsByClassName("img1")[0];

  var randomNumber2 = Math.floor(Math.random()*6 + 1);
  var randomDiceImage2 = "images/dice"+randomNumber2+".png";
  var dice2 =  document.getElementsByClassName("img2")[0];

  dice1.setAttribute("src",randomDiceImage1);
  dice2.setAttribute("src",randomDiceImage2);

  var judgement = document.querySelector("h1");
  if(randomNumber1 == randomNumber2){

  judgement.innerText = "It's a Draw";
  }

  else if(randomNumber1 > randomNumber2){
  judgement.innerText = "🚩 Player 1 Wins !!";
  }
  else{
    judgement.innerText = "Player 2 Wins !!  🚩";
  }

}




function buttonAnimation(activeButton){


activeButton.classList.add("pressed");
setTimeout(function(){
  activeButton.classList.remove("pressed");
} , 200);
}
function diceAnimate(){
dice1.style.animation = "roll 0.4s ";
dice2.style.animation = "roll 0.4s ";
}
