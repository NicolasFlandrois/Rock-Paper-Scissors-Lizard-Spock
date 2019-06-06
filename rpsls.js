const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("k");

function getComputerChoice() {
	const choices = ["r", "p", "s", "l", "k"];
	const randomNumber = Math.floor(Math.random() * 5);
	return randomNumber;
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rl":
		case "lk":
		case "ks":
		case "sp":
		case "pr":
		case "rs":
		case "sl":
		case "lp":
		case "pk":
		case "kr":
			console.log("User Wins!");
			break;
		case "lr":
		case "kl":
		case "sk":
		case "ps":
		case "rp":
		case "sr":
		case "ls":
		case "pl":
		case "kp":
		case "rk":
			console.log("Computer Wins!")
			break
	}
}

function main() {
	rock_div.addEventListener('click', function() {
		game("r");
	})

	paper_div.addEventListener('click', function() {
		game("p");
	})

	scissors_div.addEventListener('click', function() {
		game("s");
	})

	lizard_div.addEventListener('click', function() {
		game("l");
	})

	spock_div.addEventListener('click', function() {
		game("k");
	})
}

main()