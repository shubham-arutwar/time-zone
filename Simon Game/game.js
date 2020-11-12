
var buttonColors = ["red" , "blue" , "green" , "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence(){

  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

 playSound(randomChosenColor);
}

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);
});

function playSound(name){

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

animatePress(currentColour){

}
