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

function getComputerChoice() {
	const choices = ["rck", "ppr", "ssr", "lzr", "spk"];
	const randomNumber = Math.floor(Math.random() * 5);
	return randomNumber;
}


function game(userChoice) {
	const computerChoice = getComputerChoice();
	console.log("Computer Choice : " + computerChoice);
	console.log("User choice : " + userChoice)
}

game("rck")

function main() {
	rock_div.addEventListener('click', function() {
		game("rck");
	})

	paper_div.addEventListener('click', function() {
		game("ppr");
	})

	scissors_div.addEventListener('click', function() {
		game("ssr");
	})

	lizard_div.addEventListener('click', function() {
		game("lzr");
	})

	spock_div.addEventListener('click', function() {
		game("spk");
	})
}

main()