const game = () => {
  let pScore = 0;
  let cScore = 0;

  const playMatch = () => {
    const match = document.querySelector(".match");
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelectorAll(".player-hand");
    const computerHand = document.querySelectorAll(".computer-hand");
    //Computer Options

    const computerOptions = ["rock", "paper", "scissors"];

    const computerNumber = Math.floor(Math.random() * 3);

    options.forEach((option) => {
      option.addEventListener("click", function () {
        console.log(this);
      });
    });
  };

  playMatch();
};

game();
