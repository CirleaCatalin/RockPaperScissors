const game = () => {
  let pScore = 0;
  let cScore = 0;

  const playMatch = () => {
    const match = document.querySelector(".match");
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelectorAll(".player-hand");
    const computerHand = document.querySelectorAll(".computer-hand");

    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        console.log(computerChoice);
        //Calling comparehands

        //update images
        playerHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `./assets/${computerChoice}.png`;
      });
    });
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    //tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    // check for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player wins";
        return;
      } else {
        winner.textContent = "Computer wins";
        return;
      }
    }
    // check for paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer wins";
        return;
      } else {
        winner.textContent = "Player wins";
        return;
      }
    }
    // check for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer wins";
        return;
      } else {
        winner.textContent = "Player wins";
        return;
      }
    }
  };
  playMatch();
};

game();
