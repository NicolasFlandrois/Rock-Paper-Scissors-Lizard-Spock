const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rck");
const paper_div = document.getElementById("ppr");
const scissors_div = document.getElementById("ssr");
const lizard_div = document.getElementById("lzr");
const spock_div = document.getElementById("spk");

rock_div.addEventListener('click', function() {
	console.log("rock")
//	game("rck");
})

paper_div.addEventListener('click', function() {
	console.log("paper")
//	game("ppr");
})

scissors_div.addEventListener('click', function() {
	console.log("scissors")
//	game("ssr");
})

lizard_div.addEventListener('click', function() {
	console.log("lizard")
//	game("lzr");
})

spock_div.addEventListener('click', function() {
	console.log("spock")
//	game("spk");
})