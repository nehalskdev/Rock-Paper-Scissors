document.addEventListener("DOMContentLoaded", () => {
  const choices = document.querySelectorAll(".choice");
  const playerChoiceDisplay = document.getElementById("player-choice");
  const computerChoiceDisplay = document.getElementById("computer-choice");
  const resultMessageDisplay = document.getElementById("result-message");
  const playerScoreDisplay = document.getElementById("player-score");
  const computerScoreDisplay = document.getElementById("computer-score");
  const resetBtn = document.getElementById("reset-btn");

  let playerScore = 0;
  let computerScore = 0;

  // Initialize game
  updateScore();

  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const playerChoice = choice.id;
      const computerChoice = getComputerChoice();
      const result = determineWinner(playerChoice, computerChoice);

      updateChoices(playerChoice, computerChoice);
      updateResult(result);
      updateScore();
    });
  });

  resetBtn.addEventListener("click", resetGame);

  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function determineWinner(player, computer) {
    if (player === computer) {
      resultMessageDisplay.classList.add("draw");
      resultMessageDisplay.classList.remove("win", "lose");
      return "It's a draw!";
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      playerScore++;
      resultMessageDisplay.classList.add("win");
      resultMessageDisplay.classList.remove("lose", "draw");
      return "You win!";
    } else {
      computerScore++;
      resultMessageDisplay.classList.add("lose");
      resultMessageDisplay.classList.remove("win", "draw");
      return "You lose!";
    }
  }

  function updateChoices(player, computer) {
    playerChoiceDisplay.textContent = `Player choice: ${capitalize(player)}`;
    computerChoiceDisplay.textContent = `Computer choice: ${capitalize(
      computer
    )}`;
  }

  function updateResult(result) {
    resultMessageDisplay.textContent = result;
  }

  function updateScore() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
  }

  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    playerChoiceDisplay.textContent = "Player choice: -";
    computerChoiceDisplay.textContent = "Computer choice: -";
    resultMessageDisplay.textContent = "Make your move!";
    resultMessageDisplay.classList.remove("win", "lose", "draw");
  }

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
});
