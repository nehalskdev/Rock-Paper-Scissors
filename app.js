document.addEventListener("DOMContentLoaded", () => {
  const choices = document.querySelectorAll(".choice");
  const playerChoiceDisplay = document.getElementById("player-choice");
  const computerChoiceDisplay = document.getElementById("computer-choice");
  const resultMessageDisplay = document.getElementById("result-message");

  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const playerChoice = choice.id;
      const computerChoice = getComputerChoice();
      const result = determineWinner(playerChoice, computerChoice);

      playerChoiceDisplay.textContent = `Player choice: ${capitalize(
        playerChoice
      )}`;
      computerChoiceDisplay.textContent = `Computer choice: ${capitalize(
        computerChoice
      )}`;
      resultMessageDisplay.textContent = `Result: ${result}`;
    });
  });

  function getComputerChoice() {
    const choices = ["rock🪨", "paper📃", "scissors✂️"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function determineWinner(player, computer) {
    if (player === computer) {
      return "It's a draw!";
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  }

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
});
