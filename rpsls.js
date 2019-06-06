let userScore = 0;
let computerScore = 0;
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
	return choices[randomNumber];
}

function win(user, computer) {
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_div.innerHTML = user + " beats " + computer + ". You Win!"
}

function lose(user, computer) {
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
}

function draw(user, computer) {
	;
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
			win(userChoice, computerChoice);
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
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "ll":
		case "kk":
		case "ss":
		case "pp":
			draw(userChoice, computerChoice);
			break;
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