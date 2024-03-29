//Author : Nicolas Flandrois
//Date : Fri 07 Jun 2019 02:31:47 CEST 
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
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

function convertTwoWord(letter) {
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	if (letter === "s") return "Scissors";
	if (letter === "l") return "Lizard";
	return "Spock";
}

function win(user, computer) {
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "User".fontsize(3).sup();
	const smallCompWord = "Comp".fontsize(3).sup();
	result_p.innerHTML = `${convertTwoWord(user)}${smallUserWord} beats ${convertTwoWord(computer)}${smallCompWord}. You Win!`;
	document.getElementById(user).classList.add('green-glow');
	setTimeout(() => document.getElementById(user).classList.remove('green-glow'), 500);
}

function lose(user, computer) {
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "User".fontsize(3).sub();
	const smallCompWord = "Comp".fontsize(3).sub();
	result_p.innerHTML = `${convertTwoWord(user)}${smallUserWord} loses ${convertTwoWord(computer)}${smallCompWord}. You Lost!`;
	document.getElementById(user).classList.add('red-glow');
	setTimeout(() => document.getElementById(user).classList.remove('red-glow'), 500);
}

function draw(user, computer) {
	const smallUserWord = "User".fontsize(3).sub();
	const smallCompWord = "Comp".fontsize(3).sub();
	result_p.innerHTML = `${convertTwoWord(user)}${smallUserWord} equals ${convertTwoWord(computer)}${smallCompWord}. It's a Draw!`;
	document.getElementById(user).classList.add('grey-glow');
	setTimeout(() => document.getElementById(user).classList.remove('grey-glow'), 500);
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
	rock_div.addEventListener('click', () => game("r"));

	paper_div.addEventListener('click', () => game("p"));

	scissors_div.addEventListener('click', () => game("s"));

	lizard_div.addEventListener('click', () => game("l"));

	spock_div.addEventListener('click', () => game("k"));
}

main()