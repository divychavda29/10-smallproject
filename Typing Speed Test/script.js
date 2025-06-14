const quotes = [
  "Practice makes perfect.",
  "Typing fast is a valuable skill.",
  "JavaScript is fun to learn.",
  "Keep calm and keep coding.",
  "Speed and accuracy both matter."
];

const quoteElement = document.getElementById("quote");
const input = document.getElementById("input");
const result = document.getElementById("result");
const startBtn = document.getElementById("startBtn");

let startTime, timerRunning = false;

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function startTest() {
  const quote = getRandomQuote();
  quoteElement.textContent = quote;
  input.value = "";
  input.disabled = false;
  input.focus();
  result.textContent = "";
  startTime = new Date().getTime();
  timerRunning = true;
}

function endTest() {
  const endTime = new Date().getTime();
  const totalTime = (endTime - startTime) / 1000; // in seconds

  const typedText = input.value.trim();
  const wordCount = typedText.split(/\s+/).length;
  const speed = Math.round((wordCount / totalTime) * 60);

  const originalText = quoteElement.textContent.trim();
  const isCorrect = typedText === originalText;

  result.textContent = `Speed: ${speed} WPM. ${isCorrect ? "✅ Text matched!" : "❌ Text did not match."}`;
  input.disabled = true;
  timerRunning = false;
}

input.addEventListener("input", () => {
  if (!timerRunning) return;

  if (input.value.trim() === quoteElement.textContent.trim()) {
    endTest();
  }
});

startBtn.addEventListener("click", startTest);
