var btn_p1 = document.getElementById("p1");
var btn_p2 = document.getElementById("p2");
var btn_reset = document.querySelector("#reset");
var p1Score = 0;
var p2Score = 0;
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var input = document.querySelector("input");
var winningScoreDisplay = document.querySelector("#input");
var p = document.querySelector("p");
var winningScore =0;


btn_p1.addEventListener("click",function(){
	
	if(p1Score < winningScore){
		++p1Score;
		p1Display.textContent = p1Score;
		if(p1Score===winningScore){
		p1Display.classList.add("winner");
		return;
		}
	}
	
	
	
	
});
btn_p2.addEventListener("click",function(){
	
		if(p2Score < winningScore){
		++p2Score;
		p2Display.textContent = p2Score;
		if(p2Score===winningScore){
		p2Display.classList.add("winner");
		return;
		}
	}
});
btn_reset.addEventListener("click",function(){
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Score=0;
	p2Score=0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
})
function reset(){
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Score=0;
	p2Score=0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}

input.addEventListener("change",function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
})