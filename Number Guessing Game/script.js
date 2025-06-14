const userGuess = document.getElementById("userGuess");
const checkBtn = document.getElementById("checkBtn");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");

let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

checkBtn.addEventListener("click", () => {
  const guess = Number(userGuess.value);
  attempts++;

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  if (guess === secretNumber) {
    message.textContent = `🎉 Correct! The number was ${secretNumber}`;
    checkBtn.disabled = true;
  } else if (guess < secretNumber) {
    message.textContent = "📉 Too low! Try a higher number.";
  } else {
    message.textContent = "📈 Too high! Try a lower number.";
  }

  attemptsText.textContent = `Attempts: ${attempts}`;
  userGuess.value = "";
});
