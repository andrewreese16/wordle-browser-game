const wordLength = 5;
const maxAttempts = 6;
const validWords = [
  "LEARN",
  "APPLE",
  "MOWER",
  "CLEAR",
  "SPIKE",
  "MAPLE",
  "QUICK",
  "GREAT",
  "WHICH",
  "APPLY",
  "ROUTE",
  "CRASH",
  "CLOWN",
  "SHAKY",
  "VEGAN",
  "POWER",
  "TRUST",
  "ENJOY",
  "CHIEF",
  "EXIST",
  "QUIET",
  "EXTRA",
  "AMONG",
  "ALBUM",
  "DEBUT",
  "DOUBT",
  "ABOUT",
  "ALERT",
  "ARGUE",
  "BEACH",
  "BEGAN",
  "BEGIN",
  "BEGUN",
  "AUDIO",
  "AUDIT",
  "AWARD",
  "BIRTH",
  "BADLY",
  "BASIC",
  "BOOST",
  "BUYER",
  "CIVIL",
  "CURVE",
  "CYCLE",
  "DEALT",
  "EQUAL",
  "EVERY",
  "FIFTY",
  "FIFTH",
  "FLUID",
  "FOCUS",
  "JUICE",
  "JOINT",
  "KNOWN",
  "MEDIA",
  "MIXED",
  "LAUGH",
  "LUNCH",
  "LEAST",
  "LEGAL",
  "LIMIT",
  "PHASE",
  "PLAIN",
  "SIZED",
  "USAGE",
  "VIRUS",
  "YOUTH",
  "YIELD",
  "WHOSE",
  "WRITE",
  "UNTIL",
  "THREW",
  "TRULY",
  "TREND",
  "TOUGH",
  "TOUCH",
  "SUITE",
  "TAXES",
  "SUGAR",
  "TIRED",
  "PROVE",
  "RIVAL",
  "SEVEN",
  "PRIZE",
  "SCENE",
  "ROUGH",
  "PRIOR",
  "RATIO",
  "PHOTO",
  "PANEL",
  "MOVIE",
  "OUGHT",
  "OFTEN",
  "OCEAN",
  "MINUS",
  "INDEX",
  "HUMAN",
  "HOUSE",
  "GLOBE",
  "NEWLY",
  "IRONY",
  "GIANT",
  "ENEMY",
  "EMPTY",
  "SENSE",
  "MOUNT",
  "NOVEL",
  "VALUE",
  "ZEBRA",
];

/*---------------------------- Variables (state) ----------------------------*/
let currentGuess = "";
let attempts = 0;
let selectedWord = validWords[Math.floor(Math.random() * validWords.length)];

/*------------------------ Cached Element References ------------------------*/
const keyboardEl = document.querySelector("#keyboard");
const gameBoardEl = document.querySelector("#game-board");
const startNewGameBtn = document.querySelector("#startNewGameBtn");

/*-------------------------------- Functions --------------------------------*/
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

document
  .querySelector("#toggle-theme")
  .addEventListener("click", toggleDarkMode);

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

document
  .querySelector("#toggle-theme")
  .addEventListener("click", toggleDarkMode);

function initGame() {
  renderKeyboard();
  renderBoard();
}

function renderKeyboard() {
  console.log("Rendering keyboard");
  keyboardEl.innerHTML = "";
  const rows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

  rows.forEach((row) => {
    const rowEl = document.createElement("div");
    rowEl.className = "key-row";

    row.split("").forEach((letter) => {
      const key = document.createElement("div");
      key.className = "key";
      key.textContent = letter;
      key.addEventListener("click", () => handleKeyClick(letter));
      rowEl.appendChild(key);
    });

    keyboardEl.appendChild(rowEl);
  });

  const specialKeysRow = document.createElement("div");
  specialKeysRow.className = "key-row";

  const enterKey = document.createElement("div");
  enterKey.className = "key key-small-text";
  enterKey.textContent = "Enter";
  enterKey.addEventListener("click", () => handleKeyClick("Enter"));
  specialKeysRow.appendChild(enterKey);

  const backspaceKey = document.createElement("div");
  backspaceKey.className = "key key-small-text";
  backspaceKey.textContent = "Back";
  backspaceKey.addEventListener("click", () => handleKeyClick("Back"));
  specialKeysRow.appendChild(backspaceKey);

  keyboardEl.appendChild(specialKeysRow);
}

function renderBoard() {
  gameBoardEl.innerHTML = "";
  for (let i = 0; i < maxAttempts; i++) {
    const row = document.createElement("div");
    row.className = "guess-row";
    for (let j = 0; j < wordLength; j++) {
      const tile = document.createElement("div");
      tile.className = "guess-tile";
      row.appendChild(tile);
    }
    gameBoardEl.appendChild(row);
  }
}

function handleKeyClick(letter) {
  if (letter === "Enter") {
    if (currentGuess.length === wordLength) {
      checkGuess();
    } else {
      displayMessage("Please enter a complete guess.");
    }
  } else if (letter === "Back") {
    currentGuess = currentGuess.slice(0, -1);

    updateBoard();
  } else if (currentGuess.length < wordLength) {
    currentGuess += letter;
    updateBoard();
  }
}

function updateBoard() {
  const guessRows = document.querySelectorAll(".guess-row");
  const currentRow = guessRows[attempts];
  if (currentRow) {
    const tiles = currentRow.querySelectorAll(".guess-tile");
    for (let i = 0; i < wordLength; i++) {
      tiles[i].textContent = currentGuess[i] || "";
    }
  }
}

function updateBoard() {
  const guessRows = document.querySelectorAll(".guess-row");
  const currentRow = guessRows[attempts];
  if (currentRow) {
    const tiles = currentRow.querySelectorAll(".guess-tile");
    for (let i = 0; i < wordLength; i++) {
      tiles[i].textContent = currentGuess[i] || "";
    }
  }
}

function displayMessage(message, isError = false) {
  const messageContainer = document.querySelector("#message-container");
  messageContainer.textContent = message;
  messageContainer.className = isError ? "message-error" : "message-success";
}

function provideFeedback() {
  const guessRows = document.querySelectorAll(".guess-row");

  const currentRowIndex = attempts;
  if (currentRowIndex < 0 || currentRowIndex >= guessRows.length) {
    console.error("Invalid attempt index.");
    return;
  }

  const currentRow = guessRows[currentRowIndex];
  const tiles = currentRow.querySelectorAll(".guess-tile");
  let isWin = true;

  tiles.forEach((tile, index) => {
    if (currentGuess[index] === selectedWord[index]) {
      tile.style.backgroundColor = "green";
    } else if (selectedWord.includes(currentGuess[index])) {
      tile.style.backgroundColor = "yellow";
      isWin = false;
    } else {
      tile.style.backgroundColor = "gray";
      isWin = false;
    }
  });

  if (isWin) {
    displayMessage("Congratulations! You've guessed the word!", false);
  }
}

function checkGuess() {
  if (currentGuess.length !== wordLength) {
    displayMessage("Please enter a complete guess.", true);
    return;
  }

  if (!validWords.includes(currentGuess.toUpperCase())) {
    displayMessage("Invalid word. Try again.", true);
    currentGuess = "";
    updateBoard();
    return;
  }

  provideFeedback();

  attempts++;
  currentGuess = "";

  if (attempts >= maxAttempts) {
    displayMessage(`Game Over! The correct word was ${selectedWord}`, true);
    return;
  }

  updateBoard();
}

function startNewGame() {
  currentGuess = "";
  attempts = 0;
  selectedWord = validWords[Math.floor(Math.random() * validWords.length)];
  renderBoard();
  renderKeyboard();
  displayMessage("");
}

startNewGameBtn.addEventListener("click", startNewGame);

initGame();
