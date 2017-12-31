var p1Button = document.querySelector("#p1");
var p1Score = 0;
var p2Button = document.querySelector("#p2");
var p2Score = 0;
var p1fs = document.querySelector("#p1FS");
var p2fs = document.querySelector("#p2FS");
var reset = document.querySelector("#rs");
var winningScore = 5;
var gameOver = false;
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var inputValue = document.querySelector("input");

p1Button.addEventListener("mouseover",function () { 
	if(!gameOver){
   p1Score = p1Score + 1;
   p1fs.textContent = p1Score;
   if(p1Score==winningScore){
   	p1fs.classList.add("winner");
   	gameOver = true;
   }
 }
});


p2Button.addEventListener("mouseover",function () {
	if (!gameOver) {
   p2Score = p2Score + 1;
   p2fs.textContent = p2Score;
   if(p2Score==winningScore){
   	p2fs.classList.add("winner");
   	gameOver = true;
   }
   
}
});


reset.addEventListener("mouseover",function () {
  p1Score = 0;
  p2Score = 0;
  p1fs.textContent = 0;
p2fs.textContent = 0;
p1fs.classList.remove("winner");
p2fs.classList.remove("winner");
gameOver = false;
 });

numInput.addEventListener("change",function () {
	winningScoreDisplay.textContent = inputValue.value;
	winningScore = inputValue.value;
});