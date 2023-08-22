const welcomeContainer = document.querySelector(".welcome-container");
const nextBtn = document.querySelector(".next-btn");
const gameContainer = document.querySelector(".game-container");

function moveToGame() {
  welcomeContainer.classList.add("hide");
  gameContainer.classList.remove("hide");
  // gameContainer.classList.remove("opacity");
  // gameContainer.style.opacity = "1";
}

nextBtn.addEventListener("click", moveToGame);

// the game
let playerChoice = "";
let computerChoice = "";
let emojis = ["✂️", "📄", "🪨"];
let currentEmojiNumber = 0;
let shuffleInterValidID = setInterval(shuffeEmojis, 150);
let playerChoiceContainer = document.getElementById("player-choice-container");
let emojiShuffleElement = document.getElementById("emoji-shuffle");
playerChoiceContainer.addEventListener("click", handlePlayerChoice);

function handlePlayerChoice(event) {
  if (!event.target.classList.contains("emoji")) return;

  playerChoice = event.target.textContent;
  playerChoiceContainer.innerHTML = `<p class="emoji">${playerChoice}</p>`;
  clearInterval(shuffleInterValidID);
  determineGameWinner();
}

function shuffeEmojis() {
  computerChoice = emojis[currentEmojiNumber];
  emojiShuffleElement.textContent = computerChoice;

  if (currentEmojiNumber < emojis.length - 1) {
    currentEmojiNumber++;
  } else {
    currentEmojiNumber = 0;
  }
}

function determineGameWinner() {
  let gameResultMessegeElment = document.getElementById("game-result-message");
  let gameResultMessege = "";

  if (playerChoice === computerChoice) {
    gameResultMessege = "It's a tie!";
  } else if (playerChoice === "🪨" && computerChoice === "✂️") {
    gameResultMessege = "Player Wins!";
  } else if (playerChoice === "📄" && computerChoice === "🪨") {
    gameResultMessege = "Player Wins!";
  } else if (playerChoice === "✂️" && computerChoice === "📄") {
    gameResultMessege = "player Wins!";
  } else {
    gameResultMessege = "Computer Wins!";
  }

  gameResultMessegeElment.textContent =
    gameResultMessege + "Refresh tp play Again!";
}
